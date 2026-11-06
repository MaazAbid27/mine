from fastapi import APIRouter, Depends, HTTPException, status

from app.api.v1.deps import get_current_user_email
from app.core.security import create_access_token, hash_password, verify_password
from app.models import user as user_model
from app.schemas.auth import (
    LoginRequest,
    MessageResponse,
    SignupRequest,
    SignupResponse,
    TokenResponse,
)

router = APIRouter(prefix="/auth")


@router.post("/signup", response_model=SignupResponse, status_code=status.HTTP_201_CREATED)
async def signup(payload: SignupRequest):
    existing = await user_model.find_by_email(payload.email)
    if existing is not None:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Email already registered")

    doc = await user_model.create_user(payload.email, hash_password(payload.password))
    return SignupResponse(user_id=str(doc["_id"]), email=doc["email"])


@router.post("/login", response_model=TokenResponse)
async def login(payload: LoginRequest):
    doc = await user_model.find_by_email(payload.email)
    if doc is None or not verify_password(payload.password, doc["hashed_password"]):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid email or password")

    token = create_access_token(subject=doc["email"])
    return TokenResponse(access_token=token)


@router.post("/logout", response_model=MessageResponse)
async def logout(_email: str = Depends(get_current_user_email)):
    return MessageResponse(message="logged out")
