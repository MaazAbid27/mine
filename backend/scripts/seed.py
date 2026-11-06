"""Seed MongoDB Atlas with initial birthday content.

Run with: uv run python scripts/seed.py
Safe to re-run: clears and re-inserts each content collection.
"""

import asyncio

from app.core.db import close_db, get_db

CONFIG = {
    "girlfriendName": "Mau",
    "girlfriendNickname": "Beb",
    "boyfriendName": "Moss",
    "birthday": "October 15",
    "age": "25",
    "relationshipStart": "2021-05-20",
    "heroMessage": "I made you something.",
    "music": "/music/birthday-song.mp3",
    "finalLetter": (
        "I hope you’re doing good and that toe mf chichi unglue feels better now. "
        "Now that you’re one step closer to the aunty age, 23, life’s gonna get so "
        "much different than it used to be. Well it already is hella different now. "
        "The roller coaster ride of a year it’s been. You went through so much of "
        "character development, became a 10/10 crop baddie….TWICE, GOT GRADUATED "
        "CONGRATULATIONS YAYYY, made new friends, ditched them snakes(proud of you), "
        "got back together with your one hell of an ex(we don’t like him dw) and "
        "SOOO MUCH MOREEE. For all the reasons, I am so proud of you and you do make "
        "me proud more than anything else. Kinda excited to start the new journey of "
        "life with you in it INSHAALLAH!\n\n"
        "Although I know it’s also been a year where you have went through a "
        "tremendous loss too, one which you felt deeply and personally than anything "
        "else. I might not have been able to meet him but from what I know, he’s soo "
        "proud and happy to see the woman you have become, from fighting for your "
        "life 5 minutes before the deadline of an ass to going home in an uber "
        "sleeping in the back/injured. Whatever the scenario, Nissan sahab ki nawaasi "
        "has made him proud than anything ever could and for all the right reasons "
        "baddie jee. You’re lucky to be from his blood and generation. May Allah make "
        "the afterlfe easy for him and this life for you because you have a long and "
        "prosperous way to go ahead.\n\n"
        "Maha, seeing you from roaming around the highway to working on your own "
        "desk, gossiping in cafe while having cardamom tea to having weekly corpo "
        "gossip session, making the deadlines meet to…..well making the deadlines "
        "meet in corporate. I can say it is nothing less than a privilege to witness "
        "you going through that while being besides you. One of the most resilient, "
        "hardworking, compassionate, thori is kaleshi but GREAT woman I know in my "
        "life and I’m so glad you’ve come this long way and SLAYYYY while doing so "
        "but this is just the start, keep working hard for yourself so that I can "
        "also have the privilege of seeing you successful af in your life at a top "
        "firm CEO IA..bas don’t forget a bhondu like me while doing so… :(\n\n"
        "I want a future with you I really really do. Been praying for times like "
        "these. I get all your concerns that you share with me and I promise I do "
        "try to better for you, for myself, for us, for our future. Hardships come "
        "at a place where there is a test and there’s no test for something that’s "
        "not meant to be. It’s been a longggg time since we’ve met and trust me all "
        "the things, the negative energies that are there, will absolutely go away "
        "when we meet. There are a lot of things that we still need to work on for "
        "our life together, but as long as we have each other’s support, I don’t "
        "think anything can stand between us and I pray for a day to wake up next to "
        "you in our own home that’s had been made a home by you.\n\n"
        "I love you a hundred million billion trillion my heart. Please never "
        "change or become normal(apart from the thori is kaleshiness hehehe ly2 🤪). "
        "HAPPY BIRTHDAY!!"
    ),
}

MEMORIES = [
    {
        "image": "/photos/memory-1-our-first-adventure.jpeg",
        "title": "Our First Adventure",
        "date": "Jan 2024",
        "caption": "One of those days I'll always remember.",
        "is_greatest_hit": False,
    },
    {
        "image": "/photos/memory-2-that-one-day.jpeg",
        "title": "That One Day",
        "date": "Spring 2024",
        "caption": "You looked way too cute here.",
        "is_greatest_hit": False,
    },
    {
        "image": "/photos/memory-3-coffee-dates.jpeg",
        "title": "Coffee Dates",
        "date": "Spring 2024",
        "caption": "My favorite person to do nothing with.",
        "is_greatest_hit": False,
    },
    {
        "image": "/photos/memory-4-the-random-trip.jpeg",
        "title": "The Random Trip",
        "date": "Spring 2024",
        "caption": "10/10 would do this again.",
        "is_greatest_hit": False,
    },
]

GREATEST_HITS = [
    {
        "image": "/photos/hits-1-the-random-adventure.jpeg",
        "title": "The Random Adventure",
        "date": "Summer 2026",
        "caption": "We had no plan and it was perfect.",
        "is_greatest_hit": True,
    },
    {
        "image": "/photos/hits-2-couldnt-stop-laughing.jpeg",
        "title": "The Day We Couldn't Stop Laughing",
        "date": "Summer 2024",
        "caption": "My stomach hurt for two days after this.",
        "is_greatest_hit": True,
    },
    {
        "image": "/photos/hits-3-questionable-decision.jpeg",
        "title": "Our Most Questionable Decision",
        "date": "Fall 2025",
        "caption": "Still not sure how we survived this one.",
        "is_greatest_hit": True,
    },
    {
        "image": "/photos/hits-4-that-dinner.jpeg",
        "title": "That Dinner",
        "date": "Spring 2026",
        "caption": "The food was okay, the company was 10/10.",
        "is_greatest_hit": True,
    },
    {
        "image": "/photos/hits-5-completely-normal-day.jpeg",
        "title": "A Completely Normal Day",
        "date": "Spring 2024",
        "caption": "That became one of my favorites.",
        "is_greatest_hit": True,
    },
]

TIMELINE = [
    {
        "date": "Winter 2023",
        "title": "The Beginning",
        "description": "Two people. Zero idea what they were getting themselves into.",
        "image": "/photos/timeline-1-the-beginning.jpeg",
    },
    {
        "date": "Winter 2026",
        "title": "That Memory",
        "description": "The moment I realized I was completely stuck with you.",
        "image": "/photos/timeline-2-that-memory.jpeg",
    },
    {
        "date": "Spring 2026",
        "title": "The Random Adventure",
        "description": "Getting lost but not really caring because I was with you.",
        "image": "/photos/timeline-3-the-random-adventure.jpeg",
    },
    {
        "date": "Summer 2026",
        "title": "Still Here",
        "description": "Still choosing each other. Every single day.",
        "image": "/photos/timeline-4-still-here.jpeg",
    },
]

FAVORITE_THINGS = [
    {"title": "Your Smile", "description": "It has an unfair ability to make bad days better."},
    {"title": "Your Laugh", "description": "One of my favorite sounds in the entire world."},
    {"title": "Your Weirdness", "description": "Please never become normal. I love how weird we are together."},
    {"title": "Your Kindness", "description": "One of the things I admire most about you."},
    {"title": "Your Patience", "description": "Especially impressive considering you have to deal with me."},
    {"title": "You", "description": "Honestly, just you. Everything about you."},
]

NOTES = [
    "I'm really grateful that you're in my life.",
    "You make ordinary days feel special.",
    "I hope you know how loved you are.",
    "I love the life we are building together.",
    "You are my favorite notification.",
    "I still get butterflies when I see you.",
    "I am so confused how do we have our shit in sync bruh.",
]

JOKES = [
    {"setup": "Why did I fall for you?", "punchline": "Because apparently I have excellent taste."},
    {"setup": "Are you Wi-Fi?", "punchline": "Because I'm feeling a connection."},
    {"setup": "Do you have a map?", "punchline": "Because I keep getting lost in your eyes."},
    {"setup": "Are you a parking ticket?", "punchline": "Because you've got FINE written all over you."},
    {"setup": "Is your name Google?", "punchline": "Because you have everything I've been searching for."},
]


async def main() -> None:
    db = get_db()

    await db["birthday_config"].delete_many({})
    await db["birthday_config"].insert_one(CONFIG)

    await db["memories"].delete_many({})
    await db["memories"].insert_many(MEMORIES + GREATEST_HITS)

    await db["timeline"].delete_many({})
    await db["timeline"].insert_many(TIMELINE)

    await db["favorite_things"].delete_many({})
    await db["favorite_things"].insert_many(FAVORITE_THINGS)

    await db["notes"].delete_many({})
    await db["notes"].insert_many([{"message": m} for m in NOTES])

    await db["jokes"].delete_many({})
    await db["jokes"].insert_many(JOKES)

    print("Seed complete.")
    await close_db()


if __name__ == "__main__":
    asyncio.run(main())
