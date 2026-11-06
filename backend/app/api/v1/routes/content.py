from fastapi import APIRouter, HTTPException, status

from app.models import content as content_model
from app.schemas.content import ConfigResponse, FavoriteItem, JokeItem, MemoryItem, TimelineItem

router = APIRouter(prefix="/content")


@router.get("/config", response_model=ConfigResponse)
async def get_config():
    doc = await content_model.get_config()
    if doc is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Birthday config not found")
    return ConfigResponse(**doc)


@router.get("/memories", response_model=list[MemoryItem])
async def get_memories():
    docs = await content_model.list_memories(is_greatest_hit=False)
    return [MemoryItem(id=str(d["_id"]), **{k: d[k] for k in ("image", "title", "date", "caption")}) for d in docs]


@router.get("/timeline", response_model=list[TimelineItem])
async def get_timeline():
    docs = await content_model.list_timeline()
    return [
        TimelineItem(id=str(d["_id"]), **{k: d[k] for k in ("date", "title", "description", "image")})
        for d in docs
    ]


@router.get("/favorites", response_model=list[FavoriteItem])
async def get_favorites():
    docs = await content_model.list_favorites()
    return [FavoriteItem(title=d["title"], description=d["description"]) for d in docs]


@router.get("/notes", response_model=list[str])
async def get_notes():
    docs = await content_model.list_notes()
    return [d["message"] for d in docs]


@router.get("/jokes", response_model=list[JokeItem])
async def get_jokes():
    docs = await content_model.list_jokes()
    return [JokeItem(setup=d["setup"], punchline=d["punchline"]) for d in docs]


@router.get("/greatest-hits", response_model=list[MemoryItem])
async def get_greatest_hits():
    docs = await content_model.list_memories(is_greatest_hit=True)
    return [MemoryItem(id=str(d["_id"]), **{k: d[k] for k in ("image", "title", "date", "caption")}) for d in docs]
