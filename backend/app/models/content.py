from app.core.db import get_db

CONFIG_COLLECTION = "birthday_config"
MEMORIES_COLLECTION = "memories"
TIMELINE_COLLECTION = "timeline"
FAVORITES_COLLECTION = "favorite_things"
NOTES_COLLECTION = "notes"
JOKES_COLLECTION = "jokes"


async def get_config() -> dict | None:
    return await get_db()[CONFIG_COLLECTION].find_one({}, sort=[("_id", 1)])


async def list_memories(is_greatest_hit: bool = False) -> list[dict]:
    cursor = get_db()[MEMORIES_COLLECTION].find({"is_greatest_hit": is_greatest_hit})
    return await cursor.to_list(length=None)


async def list_timeline() -> list[dict]:
    cursor = get_db()[TIMELINE_COLLECTION].find({})
    return await cursor.to_list(length=None)


async def list_favorites() -> list[dict]:
    cursor = get_db()[FAVORITES_COLLECTION].find({})
    return await cursor.to_list(length=None)


async def list_notes() -> list[dict]:
    cursor = get_db()[NOTES_COLLECTION].find({})
    return await cursor.to_list(length=None)


async def list_jokes() -> list[dict]:
    cursor = get_db()[JOKES_COLLECTION].find({})
    return await cursor.to_list(length=None)
