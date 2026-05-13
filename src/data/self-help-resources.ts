import { sitePath } from "./site-path";

export const selfHelpTools = [
  {
    title: "Breathing orb",
    intent: "Calm now",
    text: "A guided breathing pause with soft reset, longer exhale, box, and sleep wind-down modes.",
    href: sitePath("/self-help/breathe"),
    cta: "Start breathing",
    tags: ["overwhelm", "sleep", "restless"],
  },
  {
    title: "Grounding room",
    intent: "Calm now",
    text: "A paced 5-4-3-2-1 sensory sequence with example chips and skip controls.",
    href: sitePath("/self-help/ground"),
    cta: "Start grounding",
    tags: ["scattered", "overthinking", "overwhelm"],
  },
  {
    title: "Mood check-in",
    intent: "Understand what I am feeling",
    text: "A non-diagnostic feelings map that routes you to one tool, one article, and one next action.",
    href: sitePath("/self-help/check-in"),
    cta: "Check in",
    tags: ["patterns", "feelings", "support-router"],
  },
  {
    title: "Private journal",
    intent: "Reflect privately",
    text: "Prompt packs, saved notes, export, and clear controls for private reflection.",
    href: sitePath("/self-help/journal"),
    cta: "Open journal",
    tags: ["journal", "self-worth", "overthinking"],
  },
  {
    title: "Short rituals",
    intent: "Calm now",
    text: "Generate a 1, 3, 5, or 10 minute routine based on your current state and context.",
    href: sitePath("/self-help/rituals"),
    cta: "Build a ritual",
    tags: ["burnout", "sleep", "heavy-days"],
  },
] as const;

export const resourceArticles = [
  {
    slug: "when-your-mind-will-not-slow-down",
    title: "When your mind will not slow down",
    description: "A gentle guide for overthinking and mental noise.",
    blurb:
      "Some days the mind keeps circling even when the body is exhausted. This guide names overthinking gently and offers a few ways to return to the next quiet minute instead of trying to solve your whole life at midnight.",
    tags: ["Overthinking", "Restless", "Rest"],
    stateTags: ["scattered", "restless"],
    readingTime: "6 min",
    featured: true,
    toolHref: sitePath("/self-help/ground"),
    toolLabel: "Try grounding",
  },
  {
    slug: "a-reset-for-heavy-days",
    title: "A reset for heavy days",
    description: "A simple practice for returning to the next small step.",
    blurb:
      "For the days when simple tasks feel heavier than they should. The reset lowers the standard, returns to basics, and helps you choose one next step without turning care into performance.",
    tags: ["Burnout", "Heavy days", "Routines"],
    stateTags: ["heavy", "drained"],
    readingTime: "5 min",
    featured: true,
    toolHref: sitePath("/self-help/rituals"),
    toolLabel: "Build a ritual",
  },
  {
    slug: "boundaries-without-harshness",
    title: "Boundaries without harshness",
    description: "Supportive framing for clearer communication.",
    blurb:
      "Boundaries do not have to sound cold to be real. This piece frames limits as clarity rather than punishment, with scripts that protect energy without abandoning warmth.",
    tags: ["Boundaries", "Communication", "Self-worth"],
    stateTags: ["stretched", "unsure"],
    readingTime: "7 min",
    featured: true,
    toolHref: sitePath("/self-help/journal"),
    toolLabel: "Journal a script",
  },
  {
    slug: "burnout-is-not-laziness",
    title: "Burnout is not laziness",
    description: "A softer way to separate depletion from shame.",
    blurb:
      "Burnout can look like numbness, irritability, checking out, or resentment. This guide helps separate exhaustion from shame and makes recovery feel less like another high-performance project.",
    tags: ["Burnout", "Rest", "Shame"],
    stateTags: ["drained", "numb"],
    readingTime: "6 min",
    featured: false,
    toolHref: sitePath("/self-help/rituals"),
    toolLabel: "Try a reset",
  },
  {
    slug: "rest-without-guilt",
    title: "Rest without guilt",
    description: "For the part of you that feels pressure to earn rest.",
    blurb:
      "If lying down makes your mind list everything unfinished, this guide offers a more believable reframe: rest is not a reward for finishing everything; sometimes it is what makes finishing anything possible.",
    tags: ["Rest", "Burnout", "Self-worth"],
    stateTags: ["tired", "drained"],
    readingTime: "5 min",
    featured: false,
    toolHref: sitePath("/self-help/breathe"),
    toolLabel: "Wind down",
  },
  {
    slug: "the-loneliness-hidden-in-busy-lives",
    title: "The loneliness hidden in busy lives",
    description: "For emotional disconnection inside full calendars.",
    blurb:
      "A reflection on the kind of loneliness that can exist even with constant messaging, work, and plans. It points toward small ways to feel more sincerely connected.",
    tags: ["Loneliness", "Connection", "Reflection"],
    stateTags: ["lonely", "numb"],
    readingTime: "6 min",
    featured: false,
    toolHref: sitePath("/self-help/journal"),
    toolLabel: "Reflect privately",
  },
  {
    slug: "heartbreak-after-hope",
    title: "Heartbreak after hope",
    description: "For grieving the future you had started imagining.",
    blurb:
      "A slow piece for anger, longing, confusion, and tenderness after hope breaks. It makes room for grief before asking for closure.",
    tags: ["Heartbreak", "Grief", "Tenderness"],
    stateTags: ["heavy", "lonely"],
    readingTime: "7 min",
    featured: false,
    toolHref: sitePath("/self-help/journal"),
    toolLabel: "Write an unsent letter",
  },
  {
    slug: "what-self-worth-sounds-like-on-a-bad-day",
    title: "What self-worth sounds like on a bad day",
    description: "A grounded voice for moments when everything feels personal.",
    blurb:
      "Instead of forcing positivity, this guide helps you notice the private voice that appears when confidence drops and build a steadier way of speaking to yourself.",
    tags: ["Self-worth", "Inner voice", "Bad days"],
    stateTags: ["unsure", "heavy"],
    readingTime: "6 min",
    featured: false,
    toolHref: sitePath("/self-help/check-in"),
    toolLabel: "Check in",
  },
  {
    slug: "when-sleep-feels-far-away",
    title: "When sleep feels far away",
    description: "A night-time companion for feeling tired but wired.",
    blurb:
      "For the pressure to fall asleep quickly, looping thoughts, and overstimulation. This piece offers slower rituals that make bed feel safer instead of more frustrating.",
    tags: ["Sleep", "Overthinking", "Rituals"],
    stateTags: ["restless", "tired"],
    readingTime: "5 min",
    featured: false,
    toolHref: sitePath("/self-help/breathe"),
    toolLabel: "Use sleep breathing",
  },
  {
    slug: "how-to-start-journaling-when-your-mind-is-noisy",
    title: "How to start journaling when your mind is noisy",
    description: "A small, private way to write without performing depth.",
    blurb:
      "Journaling can be a few honest lines, a list, or a half-finished thought. This guide makes writing feel like release, not performance.",
    tags: ["Journaling", "Overthinking", "Reflection"],
    stateTags: ["scattered", "restless"],
    readingTime: "5 min",
    featured: false,
    toolHref: sitePath("/self-help/journal"),
    toolLabel: "Open journal",
  },
] as const;

export const feelingStates = [
  { label: "Scattered", value: "scattered", href: sitePath("/self-help/ground") },
  { label: "Heavy", value: "heavy", href: sitePath("/self-help/rituals") },
  { label: "Restless", value: "restless", href: sitePath("/self-help/breathe") },
  { label: "Numb", value: "numb", href: sitePath("/self-help/check-in") },
  { label: "Drained", value: "drained", href: sitePath("/self-help/rituals") },
  { label: "Unsure", value: "unsure", href: sitePath("/self-help/journal") },
] as const;

export const practicalExtras = [
  {
    title: "Boundary phrases studio",
    text: "Choose a situation and borrow softer, direct, or warm-but-firm language.",
    href: `${sitePath("/resources")}#boundary-phrases`,
  },
  {
    title: "Heavy day reset deck",
    text: "Tiny cards for water, shoulders, next task, honest messages, and softer standards.",
    href: `${sitePath("/resources")}#heavy-day-reset`,
  },
  {
    title: "Save to journal prompts",
    text: "Prompts that make it easier to begin when the page feels too blank.",
    href: sitePath("/self-help/journal"),
  },
] as const;

export const resourceArticlePath = (slug: string) => {
  return sitePath(`/resources/${slug}`);
};
