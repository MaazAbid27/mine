from pydantic import BaseModel


class ConfigResponse(BaseModel):
    girlfriendName: str
    girlfriendNickname: str
    boyfriendName: str
    birthday: str
    age: str
    relationshipStart: str
    heroMessage: str
    music: str
    finalLetter: str


class MemoryItem(BaseModel):
    id: str
    image: str
    title: str
    date: str
    caption: str


class TimelineItem(BaseModel):
    id: str
    date: str
    title: str
    description: str
    image: str


class FavoriteItem(BaseModel):
    title: str
    description: str


class JokeItem(BaseModel):
    setup: str
    punchline: str
