# Healing Souls self-help and resources overhaul PRD

## Audit of the current experience

I could not retrieve the attached feature file from this chat, so this audit is based on the live pages at urlHealing Souls hometurn0view0, urlSelf-helpturn0view1, and urlResourcesturn0view2. The current structure is directionally right: the homepage already frames the brand as “counselling-informed sessions, gentle self-help tools, and thoughtful resources,” the self-help index already names five useful tool types, and the site already states that tools should feel “practical and emotionally safe, not like quizzes or diagnosis engines.” That foundation is strong. The problem is that most of the tools are still copy-first placeholders rather than interactive experiences, and the resources area is still a stub rather than a library people will actually browse and return to. citeturn0view0turn0view1turn0view2

Right now the self-help pages are very thin. The breathing page is essentially a single orb concept and explicitly says timed mode can be added later; the grounding page is a plain five-step list; the mood check-in only routes to three links; the journal page says local save/export/delete is still planned; and rituals are four lines of text instead of a usable builder. The resources page has only three topic tiles, while the homepage’s featured articles still point to “Read soon” placeholders for “When your mind will not slow down,” “A reset for heavy days,” and “Boundaries without harshness.” In other words: the information architecture is correct, but the experience layer is not there yet. citeturn1view0turn1view1turn1view2turn1view3turn1view4turn0view0turn0view2

One thing that should absolutely stay is the safety posture. The site consistently says the tools are educational and reflective, not diagnosis or crisis support, and it already includes the India crisis notice and helpline routing. Keep that on every tool and resource page, with the crisis block visible before any interaction starts and again at the end of long-form content. Keep the callout to entity["organization","Tele-MANAS","india mental health helpline"] prominent, since the official service offers free 24/7 support in India via 14416. citeturn0view1turn10search0

## Research principles that should shape the redesign

The most useful pattern from digital mental-health research is not “more features,” it is “better engagement design.” A 2021 scoping review found that personalization, reminders, gamification, flexibility, and ease of use tend to improve engagement with digital mental-health interventions, and it also notes that aesthetic design and the right message tone matter. That is exactly the direction this site should take: each tool should adapt to the user’s present state, feel easy within seconds, and reward continued use softly rather than with streak pressure. citeturn17view3

The best product references consistently follow that model. urlEvery Mind Mattersturn6search1 leads users into a simple five-question Mind Plan and personalised actions. urlCalmturn2search1 highlights in-the-moment support like Panic SOS, body scan, and breathing. urlHeadspaceturn2search0 uses grounding and visualisation to settle racing thoughts. urlHow We Feelturn16view0 uses a visually rich, colour-coded emotion matrix with tags, strategies, and pattern awareness. urlDaylioturn5search1 reduces logging friction to a couple of taps, then turns entries into charts, correlations, and reusable insights. urlFinchturn6search2 makes self-care feel lighter by using a soft companion, quick check-ins, rewards, breathing, journaling, goals, and mood trends. Healing Souls should not clone any one of these, but it should borrow their strongest habits: immediate use, emotional clarity, visual delight, and repeat-friendly structure. citeturn11view3turn11view0turn11view6turn11view4turn20view0turn21view0

The evidence base also supports the feature mix you already started. Breathwork has promising evidence for improving stress and mental-health outcomes, but the stronger results come from slower, guided practices rather than intense novelty breathing. A 2023 meta-analysis found breathwork may improve stress and mental health, and a 2023 review specifically noted that effective breath practices avoided fast-only patterns and very short sessions while benefiting from guided training and repeated use. Journaling also has a modest but real signal: one review found an average statistically significant reduction in symptom scores, and positive affect journaling has shown small-to-moderate wellbeing benefits in some contexts. So the goal here is not gimmicks; it is to make breathing, check-ins, journaling, and rituals feel usable enough that people actually do them. citeturn4search11turn4search0turn3search1turn3search25

The other major lesson is privacy. Mood and reflection tools work better when people feel safe being honest. urlHow We Feelturn16view0 explicitly says data stays on-device unless users opt in to anonymised research sharing, and urlDaylioturn5search1 heavily markets private storage, local access, and export. Because Healing Souls is a static site on GitHub Pages, that same local-first approach is not just good UX, it is the cleanest technical fit: journal entries, preferences, favourites, ritual history, and mood logs should remain in-browser by default, with explicit export/delete controls. citeturn20view3turn5search1turn18view0turn18view1

## Self-help feature redesign

All self-help tools should share one implementation shell so your AI agents can move fast and stay consistent. The reusable pattern should be: **ToolShell → calming intro copy → crisis/scope note → controls bar → interactive body → completion reflection → related blog cards → “book / reach out / explore more” rail**. Motion and sound should always be optional, and all settings should restore from browser storage. The shared shell also needs a visible “Leave tool” action, keyboard-first focus order, and strong reduced-motion behaviour because WCAG 2.2 and `prefers-reduced-motion` explicitly call for minimizing non-essential motion and letting users disable it. citeturn0view1turn18view4turn23view0turn23view1turn18view0

**Breathing orb.** Keep this as the fastest “Calm myself now” entry point, but rebuild it as a real guided exercise rather than a decorative orb. Add preset chips for **Soft Reset**, **Longer Exhale**, **Box**, and **Sleep Wind-down**; duration chips for **1 min**, **3 min**, and **5 min**; optional sound cues; a visible progress ring; and a gentle completion card that asks what shifted, if anything. The default should be the least demanding preset, while any hold-based pattern stays optional. Under reduced motion, switch from pulse/scale animation to a static ring, progress bar, and text cues like “inhale” and “exhale.” This tracks well with the in-the-moment exercise design used by urlCalmturn2search1 and the guided grounding tone of urlHeadspaceturn2search0, while staying aligned with the current Healing Souls intent and the broader breathwork evidence. citeturn1view0turn11view0turn11view5turn4search0turn4search11turn23view0

**Grounding room.** The current 5-4-3-2-1 page already has the right technique, but it needs structure, pacing, and delight. Turn it into a full-screen guided sequence with one sensory prompt per step, a visible progress header, optional example chips if users get stuck, and a “skip this sense” control for smell/taste because those prompts are not always practical. Make the interaction tactile and premium: each step should reveal a softly lit card, let users tap to add brief entries or choose from prompt chips, and end with a “What feels a little more real right now?” reflection. You can also add alternate grounding modes like **Object focus**, **Name the room**, and **Feet on the floor** so this page feels like a toolkit rather than a single script. That respects the current grounding technique, mirrors how urlHeadspaceturn2search0 treats grounding as sensory reconnection, and aligns with the 5-4-3-2-1 guidance surfaced by urlMindturn2search3. citeturn1view1turn2search18turn11view6turn2search3

**Mood check-in.** This is where the site can become genuinely memorable. Replace the current three-branch router with a two-step emotional reflection flow: first a **visual feelings map** or **interactive feeling wheel** with broad emotion families; then a **refine screen** where the user tags energy level, body sensations, likely trigger, and what they need most right now. After that, show one recommended tool, one recommended article, and one gentle next action. Save the check-in locally so users can see a 7-day and 30-day pattern view later. The strongest reference here is the entity["organization","Yale Center for Emotional Intelligence","emotion research center"]-inspired design direction behind urlHow We Feelturn16view0, which uses a colour-coded matrix, emotion tagging, and regulation strategies, plus the low-friction mood-plus-activity pattern used by urlDaylioturn5search1. The key constraint is that this must never look diagnostic; it should route to support, not generate a “result.” citeturn1view2turn11view4turn20view3turn20view0turn3search6

**Private journal.** The current page openly says local save/export/delete still needs to be implemented, so this is a high-priority fix. Build a local-only journal with autosave, guided prompts, free-write mode, and explicit **Export** and **Delete all** actions. Use small data in browser storage and the actual journal body in IndexedDB; that stack is well supported and is the right fit for a static site. Support `.txt` and `.md` export first, because they are simple, durable, and work without adding a server. Also add reusable prompt packs such as **Untangle a thought**, **Talk to the feeling**, **What do I need?**, **Unsent letter**, and **Three things I want to remember today**. The best references here are the current local-only intention of the site, the browser storage model from urlMDN localStorage docsturn13search0 and urlMDN IndexedDB docsturn13search1, and the modest but real journaling evidence base. citeturn1view3turn18view0turn18view1turn18view2turn13search2turn3search1turn3search25

**Short rituals.** This page should become a generator, not a paragraph. Let users choose **time available** (1, 3, 5, 10 minutes), **current state** (scattered, heavy, restless, numb, drained), and **context** (morning, work break, after conflict, before sleep, hard day). Then generate a three-step ritual with subtle timer support, optional checkmarks, and a “save to favourites” action. At the end, offer a tiny reflective note like “What do you want to carry into the next hour?” This is the place to bring in a softer form of gamification: favourites, recently used routines, seasonal ritual decks, and kind reminders are good; streak guilt and “missed your habit” shame are not. That approach matches the engagement literature and borrows the best low-pressure behaviour design from urlCalmturn2search1 and urlFinchturn6search2. citeturn1view4turn17view3turn2search5turn21view0

## New features worth adding

The site should absolutely add more than the current five tools, but only additions that stay static-site friendly and feel genuinely useful. The highest-value additions are these.

A **Mind Plan–style support router** should sit at the top of self-help and optionally on the homepage. Ask 3 to 5 simple questions such as “What feels closest?”, “How much energy do you have?”, and “Do you want quiet, words, or action?” Then route the visitor to one tool, one article, and one contact option. This borrows the strongest pattern from urlEvery Mind Mattersturn6search1 without becoming a quiz result machine. citeturn11view3

A **Boundary phrases studio** would be perfect for the brand. Users choose the situation — saying no, delaying a response, asking for space, naming a need, ending a draining conversation — and the tool reveals 3 tones: soft, direct, and warmer-but-firm. Each line can be copied, saved, or sent into the journal. This is exactly the sort of interactive self-help that feels premium, useful, and blog-connected rather than gimmicky. It also supports one of your existing homepage flagship topics directly. citeturn0view0

A **Heavy day reset deck** should let users shuffle tactile cards like “drink water,” “uncurl shoulders,” “put both feet down,” “send one honest message,” or “choose one next task.” Each card can have a 60-second, 3-minute, and 10-minute version. This gives you some of the “little games” energy the broader site wants, but in a grounded way that still feels emotionally safe. It also pairs beautifully with the “A reset for heavy days” blog feature and with the engagement literature around lightweight rewards and flexibility. citeturn0view0turn17view3

A **Sleep wind-down room** is worth adding because sleep is already part of the intended topics on the site and it is a high-return use case for a night-time visit. This can include dim visual mode, one gentle breathing preset, a “leave the thought here” mini-journal, and a pre-sleep ritual builder. That kind of focused area is closer to how urlEvery Mind Mattersturn6search1 and urlCalmturn2search1 organise practical help around specific states like sleep and anxiety. citeturn11view3turn11view0turn0view2

A **local insights page** should summarise what the visitor has already done: favourite rituals, most picked emotional tags, articles saved for later, and gentle “you often choose grounding when you feel scattered” style observations. Keep it local-only and avoid anything that sounds clinical. This is where the repeat-use value appears, and it draws on the pattern and trend surfaces seen in urlDaylioturn5search1 and urlHow We Feelturn16view0. citeturn20view0turn20view3

## Resources and blog system

The resource area should stop being a placeholder page and become an editorial library. The current site already signals the right themes — overthinking, burnout, boundaries, self-worth, heartbreak, stress, sleep, journaling, and gentle routines — but those themes need to become actual browsable content types with featured posts, filters, search, and links back into self-help tools. The homepage’s three featured placeholders should become real articles and stay pinned on the home page until the library gets deeper. citeturn0view0turn0view2

The resources architecture should be: **featured articles**, **browse by feeling/state**, **browse by topic**, **search**, and **practical extras**. Practical extras can include boundary scripts, printable reflection sheets, short guided exercises, and “save to journal” cards that open a prompt in the journal tool. For article pages, use one repeatable pattern: short promise, who this is for, the main reflective body, one practical exercise, one journaling prompt, one related self-help tool, one related article, and one final support CTA. That article shape feels rich without becoming overdesigned. It also gives the AI agent a stable content primitive to implement once and reuse everywhere. citeturn0view2turn17view5turn17view4

For content implementation, I would use compile-time generation with urlAstro content collectionsturn7search0 and either Markdown or urlAstro MDXturn15search2. Plain Markdown is enough for simple posts, but MDX is the better long-term bet because it lets you embed reusable components directly inside articles, such as “Open the breathing tool,” “Copy this script,” or “Add this prompt to journal.” For search, use urlPagefindturn15search0 because it is fully static, works after build, supports metadata and filtering, and avoids any hosted search backend. citeturn17view4turn17view5turn7search0

Use this content structure:

```txt
src/
  content/
    blog/
      when-your-mind-will-not-slow-down.mdx
      a-reset-for-heavy-days.mdx
      boundaries-without-harshness.mdx
      burnout-is-not-laziness.mdx
      rest-without-guilt.mdx
      the-loneliness-hidden-in-busy-lives.mdx
      heartbreak-after-hope.mdx
      what-self-worth-sounds-like-on-a-bad-day.mdx
      when-sleep-feels-far-away.mdx
      how-to-start-journaling-when-your-mind-is-noisy.mdx
  components/
    article/
    self-help/
    shared/
  data/
    rituals.json
    feelings.json
    scripts.json
```

Use frontmatter like this:

```md
---
title: "When your mind will not slow down"
slug: "when-your-mind-will-not-slow-down"
description: "A gentle guide for overthinking and mental noise."
featured: true
homepageOrder: 1
tags:
  - overthinking
  - anxiety
  - rest
stateTags:
  - scattered
  - restless
readingTime: 6
relatedTools:
  - breathe
  - grounding-room
coverStyle: "ambient-gradient"
---
```

These are the 10 placeholder article blurbs I would ship immediately, with the first three featured on the homepage.

- **When your mind will not slow down**  
  Some days the mind keeps circling even when the body is exhausted. This piece should feel like a hand on the shoulder, not a lecture — naming overthinking gently, making room for racing thoughts, and offering a few ways to come back to the next quiet minute instead of trying to solve your whole life at midnight.

- **A reset for heavy days**  
  This piece should speak to the days when everything feels heavier than it should, even simple tasks. The tone should be kind and practical, guiding the reader away from performance and toward basics: soften the day, lower the standard, choose one next step, and let that be enough for now.

- **Boundaries without harshness**  
  This article should reassure readers that boundaries do not have to sound cold to be real. It can frame boundaries as clarity rather than punishment, showing how to communicate limits in a way that protects energy without abandoning warmth, honesty, or care.

- **Burnout is not laziness**  
  This piece should help readers separate exhaustion from shame. Instead of pushing productivity language, it should explore what depletion looks like in real life — numbness, irritability, checking out, resentment — and gently invite recovery without turning healing into another high-performance project.

- **Rest without guilt**  
  This article should be for people who can lie down but cannot switch off the internal pressure to “earn” rest. It should offer a softer reframe: rest is not a reward for finishing everything; sometimes rest is what makes finishing anything possible at all.

- **The loneliness hidden in busy lives**  
  This piece should hold the strange kind of loneliness that can exist even inside packed calendars and constant messaging. The article can explore emotional disconnection, missed tenderness, and the quiet ache of not feeling fully met, while pointing toward small ways to feel more sincerely connected.

- **Heartbreak after hope**  
  This article should be about the grief that follows not just a person, but a future you had started imagining. It should move slowly, making room for anger, longing, confusion, and tenderness, while reminding the reader that healing often begins long before closure arrives.

- **What self-worth sounds like on a bad day**  
  This piece should explore the private voice that appears when confidence drops and everything starts to feel personal. Rather than forcing positivity, it should help readers notice that voice, question its authority, and build a more believable, grounded way of speaking to themselves.

- **When sleep feels far away**  
  This article should feel like a night-time companion for readers who are tired but wired. It can gently talk about overstimulation, looping thoughts, and the pressure to fall asleep quickly, then offer slower rituals that make bed feel safer instead of more frustrating.

- **How to start journaling when your mind is noisy**  
  This piece should remove the pressure to be eloquent or deep. It can make journaling feel small, private, and possible — a few honest lines, a list, a half-finished thought, a feeling with no neat ending — and position writing as release, not performance.

## Stack, assets, and rollout

For implementation, the cleanest stack here is urlAstroturn12search0 for static generation, urlAstro content collectionsturn7search0 for structured content, urlAstro MDXturn15search2 for rich article components, urlMotionturn19view0 for selective interaction-heavy pieces, and urlPagefindturn15search0 for local search. That stack fits GitHub Pages well, keeps JS low, and lets interactive tools hydrate only where needed. If you want continuity between article pages and tools, Astro’s built-in view transitions are worth using — but only for subtle fades/slides, never for heavy page choreography. citeturn12search0turn7search0turn17view5turn19view0turn18view5turn17view4

For the visual layer, use a restrained premium kit instead of generic wellness visuals. Typography should rely on one elegant display face and one highly readable text face, ideally from urlGoogle Fonts variable fontsturn8search3 so you can fine-tune weight and optical feel without loading too many files. Background shapes and section art can come from urlHaikeiturn8search2 as exported SVGs. For motion graphics, use only a few light decorative loops from urlLottieFilesturn8search4 or one hero/state-machine interaction from urlRiveturn8search1; do not scatter animated ornaments across every card. The site should feel like calm editorial luxury: soft gradients, deep contrast, generous spacing, tactile cards, and motion that feels “alive” rather than flashy. citeturn8search3turn8search2turn17view6turn17view7

Accessibility and performance need to be treated as part of the premium feel, not as cleanup work. Follow urlW3C WCAG 2.2turn3search7, honour `prefers-reduced-motion`, and provide a site-level motion toggle for non-essential effects. Use accessible patterns for accordions, tabs, and any modal search or save flow. Lazy-load non-critical images with the browser `loading` attribute, preload the few fonts you truly need, use `font-display` sensibly, and consider `content-visibility: auto` for long resource lists or article sections below the fold. Those are straightforward wins from urlMDN reduced motion docsturn9search1, urlWAI accordion patternturn9search2, urlWAI tabs patternturn9search14, urlWAI dialog patternturn9search22, and urlweb.devturn9search0 / urlweb.dev font loadingturn9search8 / urlweb.dev content-visibilityturn12search3. citeturn18view4turn23view0turn23view1turn22view0turn22view1turn22view2turn22view3turn22view4turn22view5

For deployment, use the official urlAstro GitHub Pages guideturn7search1 with GitHub Actions, a `public/CNAME` for the custom domain, and compile-time generation for all article pages. Add a custom 404 page, keep internal routes clean, and ensure every interactive tool degrades gracefully when JavaScript fails. Because the site is static, content updates should happen through Git commits to Markdown/MDX and JSON files, then deploy automatically on merge. citeturn18view6turn9search3turn12search2

The implementation order should be: first ship the shared ToolShell, content schema, and design tokens; then rebuild the five existing tools; then add the support router, boundary scripts, and search-enabled resources hub; then layer in polish like saved favourites, article relationships, view transitions, and selected animation assets. The definition of done is not “all pages exist.” It is: every tool is usable on mobile in under a few taps, every article is actually readable and searchable, everything important works without a server, motion respects accessibility settings, and each self-help interaction gives the user a clear next step instead of ending on a blank wall. citeturn17view3turn18view6turn23view0turn17view4