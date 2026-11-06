from datetime import datetime, timezone

from app.core.db import get_db

COLLECTION = "users"


async def find_by_email(email: str) -> dict | None:
    return await get_db()[COLLECTION].find_one({"email": email})


async def create_user(email: str, hashed_password: str) -> dict:
    doc = {
        "email": email,
        "hashed_password": hashed_password,
        "created_at": datetime.now(timezone.utc),
    }
    result = await get_db()[COLLECTION].insert_one(doc)
    doc["_id"] = result.inserted_id
    return doc
