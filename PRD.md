FULL FRONTEND PRD — "EMBER"
Interactive Birthday Website / Digital Love Story
1. PRODUCT NAME
EMBER

Subtitle:

A little piece of us, made for you. ❤️

EMBER is a highly personalized, interactive birthday website created as a digital birthday gift for my girlfriend.

This is not a generic birthday landing page.

The website should feel like a combination of:

A digital scrapbook
An interactive love letter
A relationship timeline
A photo album
A playful game
A birthday card
A tiny interactive world built specifically for one person
The experience should make the recipient feel:

"He actually made an entire little world for me."

2. PRIMARY OBJECTIVE
Create an emotionally engaging website that takes the girlfriend through a journey:

OPEN
 ↓
SURPRISE
 ↓
LAUGH
 ↓
REMEMBER
 ↓
FEEL LOVED
 ↓
ONE LAST SURPRISE
 ↓
HAPPY BIRTHDAY
The website should progressively transition from playful/funny → nostalgic → romantic → heartfelt → celebratory.

3. TARGET EXPERIENCE
The website should take approximately:

5–10 minutes

to fully explore.

The user should not simply scroll through static sections.

There should be things to:

Click
Hover
Open
Reveal
Explore
Laugh at
Interact with
Discover
Include several small surprises and easter eggs.

4. DESIGN PHILOSOPHY
The visual direction should be:

Romantic
Warm, intimate, personal.

Playful
Cute without being childish.

Funny
Occasional dad jokes, bad puns, sarcastic microcopy.

Cinematic
Smooth transitions and carefully timed animations.

Premium
The design should look intentionally crafted rather than AI-generated.

Personal
Photos, notes, memories, and inside jokes should be the centerpiece.

5. VISUAL IDENTITY
Color Palette
Use a warm romantic palette.

Primary:

Warm cream
Soft ivory
Blush pink
Dusty rose
Warm red
Peach
Muted lavender
Secondary:

Deep burgundy
Dark chocolate
Warm charcoal
Avoid:

Neon pink
Pure saturated red
Generic Valentine's gradients
Excessive purple
Excessive hearts
The site should feel warm rather than aggressively pink.

6. TYPOGRAPHY
Use two complementary font styles.

Headings
Elegant serif or romantic display font.

Examples of the visual direction:

Editorial serif
Soft high-contrast serif
Elegant handwritten accent
Body
Clean modern sans-serif.

Use typography hierarchy heavily.

Large headings should feel cinematic.

Small handwritten notes should feel personal.

7. GLOBAL UI STYLE
Use:

Large rounded cards
Soft shadows
Thin borders
Glass-like overlays where appropriate
Subtle paper textures
Polaroid photography
Organic shapes
Layered cards
Soft gradients
Large whitespace
Avoid excessive rounded rectangles everywhere.

Mix:

Organic shapes
Sharp editorial layouts
Cards
Full-width sections
to keep the design sophisticated.

8. RESPONSIVENESS
Mobile-first.

The website must look excellent on:

iPhone
Android
Tablet
Laptop
Desktop
Mobile should not feel like a reduced desktop version.

Build mobile-specific layouts where appropriate.

Important:

The photo gallery, timeline, navigation, buttons, and animations must all work comfortably with touch.

9. APPLICATION STRUCTURE
The website should be a single-page experience.

Suggested sections:

01 — Opening
02 — Birthday Dashboard
03 — The Evidence
04 — Our Story
05 — Things I Love About You
06 — Notes
07 — Dad Joke Department
08 — Relationship Statistics
09 — Interactive Question
10 — Greatest Hits
11 — Easter Eggs
12 — The Letter
13 — Final Surprise
14 — Footer
10. INITIAL LOADING EXPERIENCE
When the website first loads, do not immediately display the entire page.

Show a minimal loading experience.

Center:

"Preparing something for you..."

Below:

"Please wait. This is important."

A small animated ember/spark should appear.

After approximately 1–2 seconds:

The ember grows slightly and transitions into the main hero.

Do not make the loading screen annoying.

Allow the user to skip it if loading takes too long.

11. HERO — "THIS IS FOR YOU"
Full viewport.

Background:

Warm cream with subtle moving gradient blobs.

Center content:

Small text:

"A very important announcement..."

Large title:

"Happy Birthday, [HER NAME] ❤️"

Subtitle:

"I made you something."

Small text:

"It's probably a little excessive."

Primary CTA:

"Open Your Present 🎁"

Secondary subtle text:

"Trust me."

12. HERO MOTION
On load:

Background fades in.
Decorative particles appear.
Small eyebrow text fades upward.
Birthday heading appears.
Her name gets a subtle scale animation.
Subtitle appears.
Button springs into place.
Use staggered Motion/Framer Motion animations.

Do not have everything animate simultaneously.

13. GIFT OPENING
When:

"Open Your Present 🎁"

is clicked:

The button should transform into an animated gift.

Sequence:

Button press
 ↓
Gift wiggles
 ↓
Gift opens
 ↓
Small hearts escape
 ↓
Confetti burst
 ↓
Page transitions
Then smoothly scroll into section 2.

14. BIRTHDAY DASHBOARD
Heading:

"Welcome to your birthday headquarters."

Subheading:

"Your mission: enjoy this website and pretend my jokes are funny."

Create a grid of playful statistics.

STATISTIC CARD 01
Cuteness
1000000/10

Caption:

"Scientists are concerned."

STATISTIC CARD 02
Ability to steal my attention
100%

Caption:

"Extremely effective."

STATISTIC CARD 03
Ability to annoy me
97%

Caption:

"Respectfully impressive."

STATISTIC CARD 04
Ability to make me happy
∞

Caption:

"No known upper limit."

STATISTIC CARD 05
Relationship status
Still us ❤️

15. STATISTIC ANIMATIONS
When cards enter viewport:

Fade in
Slide upward
Numbers count upward
For infinity:

Animate:

∞
with a subtle rotation.

Cards should have small hover/tap interactions.

16. SECTION — "THE EVIDENCE"
Heading:

"Exhibit A: Evidence That We Look Good Together"

Subtitle:

"I've conducted extensive research."

Small disclaimer:

"Results may be biased."

17. PHOTO GALLERY
Create a visually rich scrapbook-style gallery.

Use supplied personal photos.

Photos should appear as:

Polaroids
Printed photographs
Slightly overlapping cards
Scrapbook memories
Each photo supports:

Image
Date
Title
Caption
Example:

"That One Day"

"You looked way too cute here."

18. PHOTO DATA STRUCTURE
Create a centralized data file.

Example:

const memories = [
  {
    id: 1,
    image: "/photos/photo-01.jpg",
    title: "Our First Adventure",
    date: "12 March 2025",
    caption: "One of those days I'll always remember."
  }
];
Do not hardcode photo content inside UI components.

19. PHOTO MOTION
When gallery enters viewport:

Photos should:

Fade in
Slide upward
Rotate into position
Stagger
Example:

Photo 1 → 0ms
Photo 2 → 120ms
Photo 3 → 240ms
Photo 4 → 360ms
On hover:

Slightly increase scale
Rotate toward 0°
Lift card
Increase shadow
20. PHOTO LIGHTBOX
Clicking a photo opens a fullscreen viewer.

Animation:

Thumbnail
 ↓
Scale + expand
 ↓
Center screen
 ↓
Background darkens
 ↓
Caption fades in
Controls:

Close
Previous
Next
Support swipe gestures on mobile.

21. SECTION — OUR STORY
Heading:

"Previously, in the story of us..."

Subheading:

"Somehow, all of these moments led here."

Create an interactive vertical timeline.

22. RELATIONSHIP TIMELINE
Each timeline item:

Date
Title
Description
Photo
Optional joke
Example:

Chapter 01
The Beginning

"Two people. Zero idea what they were getting themselves into."

Chapter 02
That Memory

"[CUSTOM MEMORY]"

Chapter 03
The Random Adventure

"[CUSTOM MEMORY]"

Chapter 04
Today

"Still choosing each other."

23. TIMELINE ANIMATION
As the user scrolls:

Timeline line progressively fills.
Nodes activate.
Cards reveal.
Photos slide into place.
Active node should briefly glow.

Use smooth spring animations.

24. SECTION — THINGS I LOVE ABOUT YOU
Heading:

"A Completely Objective List of Things I Love About You"

Subheading:

"This research has been conducted by a highly qualified professional (me)."

Create interactive cards.

Examples:

Your Smile
"It has an unfair ability to make bad days better."

Your Laugh
"One of my favorite sounds."

Your Weirdness
"Please never become normal."

Your Kindness
"One of the things I admire most about you."

Your Patience
"Especially impressive considering you have to deal with me."

You
"Honestly, just you."

25. INTERACTIVE LOVE CARDS
Cards initially display only the title.

Tap/click:

Card expands.

Reveal:

Longer message
Small heart
Optional photo
Animate expansion with spring physics.

26. SECTION — "THINGS I NEVER SAY ENOUGH"
Create handwritten note cards.

Heading:

"Things I probably don't say enough."

Each note should look handwritten.

Example:

"I'm really grateful that you're in my life."

"You make ordinary days feel special."

"I hope you know how loved you are."

"I love the life we are building together."

Allow unlimited notes through data configuration.

27. NOTE ANIMATION
Cards should feel physical.

On viewport:

Slide upward
Rotate slightly
Fade in
On click:

Lift
Expand
Straighten
Reveal full message
Add subtle paper texture.

28. SECTION — DAD JOKE DEPARTMENT
Make this intentionally ridiculous.

Heading:

"The Official Dad Joke Department"

Subtitle:

"I'm sorry in advance."

29. JOKE MACHINE
Display one joke at a time.

Example:

Why did I fall for you?

Because apparently I have excellent taste.

Button:

"Give me another"

Second button:

"That was terrible"

Clicking "Give me another":

Animate current joke away.

New joke enters.

30. TERRIBLE JOKE REACTION
If user clicks:

"That was terrible"

Show:

"Correct."

Then:

"But you're still here."

Another:

"I can do worse."

Button:

"Please don't."

Click:

"Too late."

31. JOKE DATA
Keep jokes centralized.

const jokes = [
  {
    setup: "Why did I fall for you?",
    punchline: "Because apparently I have excellent taste."
  },
  {
    setup: "Are you Wi-Fi?",
    punchline: "Because I'm feeling a connection."
  }
];
Allow easy replacement with real inside jokes.

32. SECTION — RELATIONSHIP STATISTICS
Create an intentionally fake scientific report.

Heading:

"Our Relationship: A Scientific Analysis"

Metrics:

Times you've made me laugh
∞

Times I've been right
[QUESTIONABLE]

Times you've been right
[UNFORTUNATELY MANY]

Amount I love you
Cannot be measured

Probability of me annoying you
Very high
Animate numbers when visible.

33. SECTION — IMPORTANT QUESTION
Create a large centered section.

Heading:

"One final scientific question."

Question:

"Do you love me?"

Two buttons:

YES ❤️
NO
34. NO BUTTON INTERACTION
The NO button must be playful.

When hovered:

Move it.

Text changes:

"No"
→
"Are you sure?"
→
"Really?"
→
"Nice try."
→
"That option is unavailable."
On mobile:

Do not require hover.

Instead, when tapped:

Move the button to a random safe position.

Ensure it never moves off-screen.

35. YES BUTTON
YES should remain accessible.

On hover:

Slight scale
Heart pulse
On click:

Button expands
 ↓
Heart burst
 ↓
Confetti
 ↓
"I KNEW IT ❤️"
Then:

"Good. You're stuck with me."

36. SECTION — OUR GREATEST HITS
Create horizontally scrollable memory cards.

Each card:

Photo
Title
Date
Caption
Examples:

"The Random Adventure"

"The Day We Couldn't Stop Laughing"

"Our Most Questionable Decision"

"That Dinner"

"A Completely Normal Day That Became One of My Favorites"

37. HORIZONTAL SCROLL MOTION
Desktop:

Use drag interaction.

Mobile:

Native horizontal swipe.

Cards should slightly rotate/scale depending on position.

The active card should be slightly larger.

38. EASTER EGGS
Include at least 4.

Easter Egg 01
Small heart somewhere in the page.

Click 5 times.

Show:

"You found the secret heart."

Then:

"I love you. Obviously."

Easter Egg 02
Footer:

"Definitely don't click this."

Click:

"I literally warned you."

Easter Egg 03
Tiny sparkle.

Click:

"This sparkle is sponsored by my inability to stop being cheesy."

Easter Egg 04
Secret message:

"One more thing I love about you..."

Reveal custom message.

39. EMOTIONAL TRANSITION
After all the jokes, intentionally slow the website down.

Reduce:

Floating particles
Large animations
Decorative motion
Increase:

Whitespace
Typography size
Calm transitions
Heading:

"Okay, jokes aside..."

Then:

"There's something I really want you to know."

40. FINAL LOVE LETTER
Create a beautiful editorial-style section.

Large heading:

"For You."

Then a personalized letter.

Use placeholder:

"[WRITE YOUR PERSONAL BIRTHDAY LETTER HERE]"

Support multiple paragraphs.

The letter should have:

Large opening sentence
Paragraph spacing
Optional photo
Signature
Example ending:

"Happy birthday, my love.

I hope this year is kind to you.

And whatever happens next, I hope we keep making memories worth remembering.

I love you.

— [YOUR NAME]"

Do not force the example text.

41. LETTER ANIMATION
Reveal the letter gradually.

Do NOT type every character automatically.

Instead:

Heading fades in
First paragraph appears
Second paragraph appears
Photo fades in
Signature appears last
Slow, elegant transitions.

42. FINAL PRESENT
At the bottom:

Small text:

"But wait..."

Then:

"I have one more thing."

Button:

"Open it 🎁"

43. FINAL SURPRISE ANIMATION
This should be the biggest animation sequence.

Sequence:

Step 1
Button presses down.

Step 2
Screen subtly darkens.

Step 3
Gift appears.

Step 4
Gift opens.

Step 5
Massive heart/sparkle burst.

Step 6
Confetti.

Step 7
Large heading:

"HAPPY BIRTHDAY, [HER NAME] ❤️"

Step 8
Subtitle:

"I love you."

Step 9
Small joke:

"Now go eat cake."

Step 10
Final:

"And yes, I expect a slice."

44. MOTION SYSTEM
Use Motion / Framer Motion throughout the website.

Create reusable animation variants.

For example:

fadeUp
fadeIn
scaleIn
slideLeft
slideRight
staggerChildren
springIn
Do not manually duplicate animation logic across components.

45. MOTION PRINCIPLES
Use three motion personalities.

Playful
Fast spring animations.

Used for:

Buttons
Jokes
Easter eggs
YES/NO interaction
Nostalgic
Smooth slower animations.

Used for:

Photos
Timeline
Memories
Romantic
Slow, soft animations.

Used for:

Love notes
Final letter
Final birthday message
46. AMBIENT BACKGROUND MOTION
Throughout the site:

Use subtle animated:

Blobs
Gradient shapes
Sparkles
Stars
Hearts
They should move slowly.

Never distract from content.

47. MICRO-INTERACTIONS
Every interactive element should respond.

Buttons:

Hover scale
Press scale
Spring back
Cards:

Lift
Shadow
Rotation
Images:

Zoom
Lightbox
Links:

Underline animation
Hearts:

Pulse
48. ACCESSIBILITY
Support:

Keyboard navigation
Screen readers
Alt text
High contrast
Focus states
Touch targets
Reduced motion
Respect:

prefers-reduced-motion
When enabled:

Disable parallax
Reduce floating elements
Replace complex transitions with fades
Keep all content accessible
49. PERFORMANCE
Optimize for mobile.

Requirements:

Lazy-load images
Compress images
Avoid unnecessary re-renders
Use transform/opacity for animations
Avoid hundreds of simultaneous particles
Avoid excessive JavaScript scroll listeners
Use viewport detection
Keep bundle size reasonable
Target:

Smooth 60fps animations on modern phones.

50. CONTENT ARCHITECTURE
All personal information should live in one configuration/data layer.

Example:

export const birthdayData = {
  girlfriendName: "[HER NAME]",

  girlfriendNickname: "[NICKNAME]",

  boyfriendName: "[YOUR NAME]",

  birthday: "[DATE]",

  age: "[AGE]",

  relationshipStart: "[DATE]",

  heroMessage: "I made you something.",

  loveNotes: [],

  memories: [],

  jokes: [],

  favoriteThings: [],

  timeline: [],

  finalLetter: "[LETTER]",

  music: "/music/song.mp3"
};
The UI should consume this data.

Do not mix personal content with component logic.

51. FILE STRUCTURE
Use a clean structure similar to:

src/
  components/
    Hero.tsx
    GiftOpening.tsx
    BirthdayStats.tsx
    PhotoGallery.tsx
    PhotoLightbox.tsx
    Timeline.tsx
    LoveCards.tsx
    LoveNotes.tsx
    JokeMachine.tsx
    RelationshipStats.tsx
    LoveQuestion.tsx
    GreatestHits.tsx
    EasterEggs.tsx
    LoveLetter.tsx
    FinalSurprise.tsx
    Footer.tsx

  data/
    birthdayData.ts
    memories.ts
    jokes.ts
    notes.ts

  animations/
    variants.ts

  styles/
    globals.css

public/
  photos/
  music/
  textures/
52. COMPONENT REUSABILITY
Components should be reusable.

For example:

<MemoryCard
  image="/photos/photo1.jpg"
  title="Our Adventure"
  date="2025"
  caption="..."
/>
And:

<LoveNote
  title="Something I Love"
  message="..."
/>
Avoid giant monolithic components.

53. NAVIGATION
Create a minimal floating navigation.

Desktop:

Small floating pill near the top.

Sections:

Home
Memories
Us
Notes
Jokes
Letter
Mobile:

Use a compact bottom navigation or hamburger.

Navigation should smoothly scroll.

54. SCROLL EXPERIENCE
Scrolling should feel cinematic.

Do not snap aggressively between sections.

Allow natural scrolling.

Use section spacing generously.

The website should breathe.

55. DECORATIVE DETAILS
Use subtle:

Grain
Paper texture
Tiny stars
Sparkles
Hand-drawn hearts
Tape effects on photos
Scribbles
Small handwritten annotations
Example annotation:

"one of my favorites ❤️"

Another:

"look at us being cute"

Another:

"10/10 would do this again"

56. FUNNY MICROCOPY
Sprinkle humor across the website.

Examples:

Loading:

"Gathering evidence..."

Gallery:

"Proof that I have excellent taste."

Timeline:

"And then things got interesting."

Love section:

"Objectively speaking."

Jokes:

"This section may damage your opinion of me."

Letter:

"Okay. I'll be serious now."

Footer:

"Made with love, caffeine, and questionable amounts of CSS."

57. MUSIC
Music must NOT autoplay immediately.

After the first user interaction, show a small music control.

UI:

♫
Click:

Music starts.

Click again:

Music pauses.

Use a local file:

/public/music/birthday-song.mp3
If no music file exists, the site must work normally.

Add subtle animated equalizer bars while playing.

58. PHOTO FALLBACK
If a photo is missing:

Do not break the layout.

Display a beautiful placeholder:

"A memory is loading..."

But make it easy to replace.

59. EMPTY DATA HANDLING
If there are no memories, notes, jokes, etc.:

Do not render broken sections.

However, during development, populate them with placeholder examples so the UI can be evaluated.

Clearly mark placeholders in the data file.

60. SEO / META
Set:

Page title:

"Happy Birthday, [HER NAME] ❤️"

Description:

"A little birthday surprise made just for you."

Use appropriate Open Graph metadata.

61. FAVICON
Create/use a simple favicon:

❤️

or

🔥

Prefer a small minimal ember/heart symbol.

62. FINAL UX REQUIREMENT
The recipient should never feel like they are navigating a conventional website.

The experience should feel like a story.

Every section should naturally lead to the next.

The emotional progression must be:

CURIOUS
   ↓
SURPRISED
   ↓
AMUSED
   ↓
NOSTALGIC
   ↓
LOVED
   ↓
EMOTIONAL
   ↓
CELEBRATING
63. MOST IMPORTANT REQUIREMENT
Do not make this look like an AI-generated birthday template.

Avoid:

Generic stock photos
Generic romantic quotes
Excessive hearts
Generic Valentine's copy
Huge gradient text
Excessive glassmorphism
Random animations
Generic "Love is..." sections
The actual photos, memories, jokes, notes, and personal writing should be the soul of the website.

The design should simply make those things feel special.

64. DEFINITION OF DONE
The frontend is complete when:

The entire experience is responsive.
The hero works.
Gift opening animation works.
Photo gallery works.
Photo lightbox works.
Timeline works.
Love cards expand.
Notes animate.
Joke machine works.
Relationship statistics animate.
YES/NO interaction works.
Greatest Hits carousel works.
Easter eggs work.
Final letter works.
Final surprise works.
Confetti works.
Music toggle works.
Reduced-motion support works.
Missing photos don't break the UI.
Personal content can be changed from data files.
All animations are smooth.
Mobile experience feels intentional.
No section feels like a generic template.
65. FINAL DESIGN STATEMENT
The finished website should feel like:

"Someone took their relationship, memories, jokes, photos, and feelings and turned them into a tiny interactive universe."

It should start with:

"Wait... what is this?"

Become:

"Okay this is cute."

Then:

"HAHA."

Then:

"Aww."

Then:

"🥹"

And finally:

"I love you." -- Additional Requirements & Clarifications: Q: How do you want to handle the personal assets (photos, music) during development? A: I have a mongodb atlas connection string. if it's not usable guide me through the process of how i can

Q: Regarding the playful "NO" button interaction on mobile: to prevent it from causing layout issues or becoming frustrating, should it jump within a specific bounded container, and should it eventually disappear or change to "YES" after a certain number of taps? A: change to yes too and jump in a specific container

Q: For the background music, modern browsers block autoplay. You mentioned showing a music control after the first interaction. Should the music automatically start playing when she clicks the initial "Open Your Present 🎁" button, or should she have to explicitly click the music icon to start the audio? A: automatically play the music and it should be Yellow by coldplay

Q: Since this is a surprise gift, how do you plan to host or share this with her (e.g., a custom domain, Vercel, Netlify)? A: i'll host it on render