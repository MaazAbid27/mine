from fastapi import APIRouter

from app.api.v1.routes import auth, content, health

api_router = APIRouter()
api_router.include_router(health.router, tags=["health"])
api_router.include_router(auth.router, tags=["auth"])
api_router.include_router(content.router, tags=["content"])
