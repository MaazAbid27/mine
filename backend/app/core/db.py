from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase

from app.core.config import settings

_client: AsyncIOMotorClient | None = None


def get_client() -> AsyncIOMotorClient:
    global _client
    if _client is None:
        _client = AsyncIOMotorClient(settings.mongodb_uri)
    return _client


def get_db() -> AsyncIOMotorDatabase:
    return get_client()[settings.mongodb_db_name]


async def ping_db() -> bool:
    try:
        await get_client().admin.command("ping")
        return True
    except Exception:
        return False


async def close_db() -> None:
    global _client
    if _client is not None:
        _client.close()
        _client = None
