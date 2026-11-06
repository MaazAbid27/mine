from fastapi import APIRouter

from app.core.db import ping_db

router = APIRouter()


@router.get("/healthz")
async def healthz():
    connected = await ping_db()
    return {"status": "ok", "db": "connected" if connected else "disconnected"}
