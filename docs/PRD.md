# Healing Souls 2.0 PRD

## Product intent and positioning

Healing Souls 2.0 should be built as a premium, emotionally safe, content-first wellness website whose job is to do three things really well: create trust fast, create a memorable aesthetic experience, and route users to the right off-site action. The website itself should not process payments. Every commercial CTA should send users to urlTopmateturn6search0, while “Get in touch” should route cleanly to urlInstagramhttps://www.instagram.com, urlWhatsApphttps://www.whatsapp.com, and email. That fits the hosting choice perfectly because urlGitHub Pagesturn0search16 is a static-site hosting service for HTML, CSS, and JavaScript, and it supports publishing through a branch or a custom workflow. citeturn20view0turn20view1turn20view8turn23view0turn5search4

This brief is strongest when the site behaves less like a “digital brochure” and more like a “digital healing space” with three layers: quick emotional relief, deeper self-reflection, and premium conversion into sessions. Public search already shows multiple unrelated “Healing Souls” presences online, so the brand system should be made more ownable through a custom domain, metadata, and hero copy that also includes the practitioner’s name or a sharper descriptor. If a custom domain is used on urlGitHub Pages custom domainsturn29view0, the `www` version is the safer default because GitHub explicitly recommends it as the most stable setup. citeturn16search0turn16search2turn16search5turn29view0

Because this sits in the mental-wellbeing zone, trust surfaces matter a lot. The site should use exact credential language, a clear scope-of-practice note, and a visible crisis disclaimer. In entity["country","India","South Asian country"], the official entity["organization","Tele-MANAS","India 24x7 tele-mental health service"] service offers free, 24/7 support at 14416, so that number should appear in the footer, FAQ, and contact area with copy that clearly says the website is not meant for emergencies. citeturn5search0turn5search5

## Experience principles and visual direction

The visual benchmark should not be “generic spiritual website with pastel gradients.” It should be a hybrid of the clarity and habit-framing of urlHeadspaceturn4search0, the calm content richness of urlCalmturn4search1, the sensual and premium feel of urlOpenturn4search10, and the editorial depth of urlMindfulturn4search6, filtered through layout references from urlAwwwards Clean inspirationturn1search0 and urlAwwwards Luxury inspirationturn1search10. That combination is the sweet spot for “rich, premium, high quality” without becoming cold, flashy, or over-designed. citeturn25view0turn25view1turn25view2turn25view3turn25view4turn25view5

The art direction should feel expensive but soft: deep ink or midnight backgrounds, warm ivory surfaces, muted sage, dusty rose, cocoa, blurred glow accents, tactile paper textures, and very controlled gold highlights. Typography should do a lot of the luxury work. The best pairings here are editorial serif + readable sans. A safe premium pair is urlFrauncesturn15search1 with urlManropeturn15search0. A more readability-first pair is urlFrauncesturn15search1 with urlLexendturn15search2. Use variable fonts carefully because font strategy directly affects render timing, First Contentful Paint, Largest Contentful Paint, and layout shift. citeturn15search0turn15search1turn15search2turn20view10turn8search8

Motion should feel like breath, not like a product demo reel. Use small, soft transitions and tactile hover states because microinteractions help communicate system status, support error prevention, and shape brand perception. Use progressive disclosure so first-time visitors are not hit with too much depth too early. And implement reduced-motion support from day one so non-essential movement disappears cleanly for people who opt out. citeturn35view2turn35view1turn35view0turn20view7turn20view6

Support both dark and light themes, but make dark mode the prestige default if it suits the brand photography. Use `color-scheme` and `theme-color` metadata so the browser chrome, form controls, and surrounding UI feel intentional across mobile and desktop instead of patched together. citeturn34view0turn34view1turn34view2

The writing style should be calm, factual, and lightly poetic. Users scan web pages, and objective, concise writing consistently outperforms hype-heavy text. For a healing brand, that matters even more because “marketese” weakens credibility. Every page should feel emotionally warm but structurally tight: short sections, strong subheads, generous whitespace, clear labels, no mystical over-claiming. citeturn35view3turn20view11

**Example hero direction**

> **Headline:** A softer place to pause, reflect, and begin again.  
> **Subhead:** Healing sessions, grounded self-help tools, and thoughtful writing for people moving through overwhelm, burnout, heartbreak, and inner noise.  
> **Primary CTA:** Book on Topmate  
> **Secondary CTA:** Explore self-help  
> **Tertiary CTA:** Get in touch

## Information architecture and planned content exposition

The information architecture should combine one strong conversion path with one strong content path and one strong self-help path. The public leaders in this category do not stop at “about + services + contact”; they layer guided tools, practices, articles, courses, and resource hubs because repeat visits come from usefulness, not just brand beauty. Research on engagement in digital mental-health promotion also points to personalization, feedback, ease of use, reminders, and human support as meaningful drivers of continued use. citeturn25view2turn25view3turn25view4turn25view5turn31view4

The recommended route map is:

- `/` — Home  
- `/about` — practitioner story, philosophy, credentials, who this is for / not for  
- `/work-with-me` — services, formats, pricing notes if needed, all booking routed to Topmate  
- `/self-help` — hub page for all interactive tools and guides  
- `/self-help/breathe` — breathing tool  
- `/self-help/ground` — grounding tool  
- `/self-help/journal` — private local journal  
- `/self-help/rituals` — short guided routines  
- `/blog` — all writing  
- `/blog/[slug]` — article pages  
- `/resources` — curated books, podcasts, practices, helplines, worksheets  
- `/faq` — trust and expectation-setting  
- `/contact` — redirect cards only, no heavy form  
- `/privacy`, `/disclaimer`, `/terms`, `/404`

The home page should be designed like a slow reveal. The top fold should establish emotional tone and action in one glance: strong visual, one-line promise, one-line qualifier, one premium CTA to book, and one quieter CTA to explore self-help. Right after that, add a slim trust band with credentials, session format, and “payments handled on Topmate.” Then move into a “Choose your path” block with three large cards: **Book a session**, **Use a self-help tool**, **Read something grounding**. This is a much better UX than mixing all detail into the hero because it gives visitors autonomy without overload. citeturn35view0turn35view5turn35view3

After the path chooser, the home page should unfold in this order: signature approach or modalities, one interactive preview tool, one featured article rail, one testimonial or trust section, one FAQ slice, and one final CTA cluster that repeats the external destinations. The big idea is that the homepage should convert even if the user does not scroll far, but it should reward deeper scrolling with more softness, more trust, and more utility. citeturn35view1turn35view2turn25view4

The self-help hub should feel like a library mixed with a ritual room. Keep it very legible. Group tools by emotional intent, not by technical type. A better IA is **Calm now**, **Understand what I’m feeling**, **Reflect privately**, and **Read deeper**, instead of labels like “widgets” or “features.” This aligns better with how wellness users actually arrive: they are more likely to think “I feel scattered” than “I want a breathing interface.” citeturn31view4turn35view3

The blog should not feel bolted on. It should be a proper editorial surface with categories such as burnout, self-worth, boundaries, heartbreak, nervous-system settling, journaling prompts, gentle routines, and healing reflections. Keep it searchable, taggable, and easy to skim. For article pages, show: title, short dek, read time, last updated, author name, key takeaways, body, soft inline CTA, related posts, and a final booking/contact block. Google’s current guidance strongly favours people-first content, and Article structured data remains useful for helping search engines understand blog pages. citeturn20view11turn27view0turn27view2

The FAQ page should exist for users, but not be treated as an SEO gimmick. As of May 7, 2026, Google says FAQ rich results are no longer appearing in Search and support is being removed, so the FAQ should be built for trust and clarity first, not for rich-result chasing. citeturn27view1

## Feature specification

The best feature mix for this brief is not “more widgets.” It is a calm stack of reflective tools that feel useful in the moment and premium in the hand. Research on digital mental-health engagement points toward personalization, reminders, feedback, ease of use, human or social support, and careful gamification as the things that improve engagement, not random novelty for novelty’s sake. citeturn31view4turn32search0turn11search3

The recommended feature set is:

- **Breathing orb** — a full-screen or card-sized breathing guide with simple modes like `4-4-4-4`, `4-6`, and `inhale-exhale only`, plus haptic-feel animation cues, reduced-motion fallback, and optional local saving of the preferred pace. Box breathing is especially strong here because it is simple, can be done anywhere, and is commonly used to reduce stress and calm the mind. citeturn31view1turn20view7

- **Grounding room** — a guided `5-4-3-2-1` grounding experience presented as cards or soft taps, not as a score game. This is a good “I need help right now” tool because it is fast, sensory, and practical. citeturn31view3

- **Private journal** — a local-only journal with prompts, mood tags, optional export, and zero cloud sync in MVP. Journaling is repeatedly described in the literature as a low-cost adjunctive practice that can help with common mental-health symptoms and emotional self-reflection. citeturn7search2turn7search5

- **Mood check / choose-your-path card** — not a diagnosis, not a quiz result engine. Just a clean branching interaction where users choose what feels closest to their present state, and the site routes them to the right practice, reflection, or article. Personalization is commonly discussed as a way to improve adherence and outcomes in digital mental-health interventions. citeturn32search0turn31view4

- **Affirmation / reflection deck** — a tactile card draw with short copy, tiny ritual prompts, and optional “save this card” in local storage. This keeps the site feeling alive without forcing heavy interactivity. citeturn35view2turn31view4

- **Micro-ritual builder** — let users assemble a 1-minute, 3-minute, or 10-minute routine from breathing, grounding, journaling, movement, or reading. This adds gentle personalization and repeat value. citeturn31view4turn32search0

- **Editorial hub with static search** — blog, guides, and self-help pages should all be searchable with build-time indexing so the site feels deep without needing a backend. citeturn20view3

- **Curated resources page** — books, podcasts, guided practices, helplines, and downloadable worksheets. This adds depth and trust, especially for users who are not ready to book yet. citeturn25view5turn20view11

- **Soft return states** — “continue your ritual,” “read another gentle piece,” or “message me if you’re ready.” This is better than pushy conversion because it keeps the emotional tone intact. citeturn31view4turn35view1

Games should be present, but they should behave like **ritual toys**, not like dopamine traps. Avoid streaks, leaderboards, guilt copy, scarcity timers, artificial loss aversion, or anything that makes the user feel scored. Gamification can improve engagement, but both UX research and newer reviews around mental-health products stress that it needs careful planning and ethical handling. For this brand, the right pattern is playful calm, not manipulative retention. citeturn11search1turn11search4turn11search6turn11search3

The explicit MVP exclusions should be: no on-site checkout, no logins, no chat-based “therapy bot,” no live community feed, no intrusive newsletter pop-up, no autoplay audio, and no diagnosis-like assessments. That keeps the first version premium, focused, and safe.

## Technical architecture and implementation plan

The strongest implementation choice for this brief is **content-first static architecture**. The recommended stack is urlAstroturn0search1 + TypeScript + Tailwind CSS + MDX + a small number of React-powered islands only where interactivity is essential. If your agent is already standardised on urlNext.js static exportturn0search2, that is still workable because Next can output static files with `output: 'export'`, but Astro is the cleaner fit for a content-heavy, multi-page, static experience like this. Add urlPagefindturn12search0 after build for static search. citeturn20view2turn38view0turn20view3

A clean project structure looks like this:

```text
src/
  components/
  layouts/
  pages/
    index.astro
    about.astro
    work-with-me.astro
    self-help/
      index.astro
      breathe.astro
      ground.astro
      journal.astro
      rituals.astro
    blog/
      [slug].astro
    resources.astro
    faq.astro
    contact.astro
  content/
    blog/
    resources/
    testimonials/
  data/
    site.ts
    navigation.ts
    ctas.ts
public/
  images/
  icons/
  audio/
  og/
```

This structure maps well to static deployment, content collections, and update-via-commit workflows. Astro’s content collections are built for Markdown, MDX, YAML, TOML, and JSON, which is exactly what you want for a site where content should be editable without touching UI components. citeturn20view2turn20view0

All destination links should live in one central config file so non-technical updates are easy even in a Git-based workflow. For example:

```ts
export const ctas = {
  topmate: "https://topmate.io/your-handle",
  instagram: "https://instagram.com/your-handle",
  whatsapp: "https://wa.me/91XXXXXXXXXX?text=Hi%20I%20found%20Healing%20Souls",
  email: "mailto:hello@example.com?subject=Healing%20Souls%20enquiry",
};
```

These should be rendered as real links, not fake buttons. For navigation semantics and accessibility, links should stay links. `mailto:` is the right pattern for email links, and WhatsApp’s click-to-chat flow should be used for WhatsApp. If any external link opens in a new tab, label it visually and for screen readers so the behaviour is not surprising. citeturn23view0turn5search4

Deployment should be fully static and deterministic. Use a custom publishing workflow on urlGitHub Pagesturn0search16, attach the custom domain, keep a custom `404.html`, and make all content updates happen through pull requests and merges. GitHub Pages explicitly supports custom workflows, custom domains, and custom 404 pages, so there is no need to add a server just to ship this product. citeturn20view1turn28view0turn29view0

Performance needs to be treated as part of the luxury feel, not as a post-launch cleanup task. Set these non-negotiable quality targets: LCP at or under 2.5s, INP under 200ms, CLS at or under 0.1. Eager-load the hero/LCP image, use browser-native lazy loading for off-screen images, and do **not** lazy-load the first-viewport hero asset because web.dev explicitly warns that overusing lazy loading can hurt performance. citeturn33search0turn33search1turn37view0turn37view1

Accessibility should be one of the brand strengths. Build mobile-first responsive layouts because responsive design improves multi-device UX and also benefits accessibility. Add a skip link, visible focus states, touch-friendly controls, semantic headings, text alternatives, keyboard support, no drag-only interactions, reduced-motion support, and touch targets around 44×44 CSS pixels or larger. WCAG 2.2 also explicitly adds stronger requirements around focus appearance, target size, and dragging alternatives. citeturn20view4turn20view5turn23view0turn24view0turn20view7

For SEO and discoverability, implement Article JSON-LD on blog posts and keep content people-first. Add clear page titles, meta descriptions, canonical URLs, Open Graph images, and good internal linking between tools and articles. Do not spend early effort on FAQ rich-result optimisation because Google has already announced that FAQ rich results are disappearing. citeturn27view0turn27view1turn27view2turn20view11

A PWA layer is a good phase-two enhancement, not an MVP dependency. An installable PWA can make the experience feel more app-like and accessible from the home screen, but it should be treated as progressive enhancement because browser support and install UX still vary. The website should be excellent in the browser before it becomes installable. citeturn26view1turn26view2

## Design resources and production assets

Do not start by making screens. Start by making three mood boards. Mood boards are one of the fastest ways to align on feeling, colour, photography, tone, and interaction style before the team burns time on polished UI that is pointed in the wrong direction. citeturn35view4

For photos, use one source and one colour-grading language consistently. urlUnsplashturn13search12 and urlPexelsturn13search17 are both usable for free commercial work under their published licence terms. The visual direction should favour real textures, warm interiors, hands, notebooks, tea, slow movement, windows, sunrise/sunset light, and abstract nature details over cliché “person meditating on a mountain” stock. citeturn13search0turn13search1

For illustrations, use them sparingly. urlunDrawturn13search6 is clean and commercially usable without attribution under its licence, while urlStorysetturn13search3 is excellent for editable and animated illustration scenes but its terms require attribution unless a premium subscription is used. That makes unDraw safer for MVP and Storyset good only if you are okay with attribution or already paying for premium. citeturn13search2turn13search15

For icons, use one family only. urlLucideturn14search4 is a very strong default because it is lightweight, consistent, and tree-shakable. urlHeroiconsturn14search2 is another good choice if you want more familiar marketing-site energy. Do not mix icon families. citeturn14search4turn14search2

For motion and visual richness, pick a hierarchy instead of throwing everything in. Use urlMotionturn2search6 for regular UI gestures and in-view reveals. Use urlGSAP ScrollTriggerturn2search0 only for one or two hero-grade scroll-linked moments. Use urlLenisturn3search4 only if it still passes accessibility and performance QA, because even Lenis itself frames accessibility as a central concern. Use urlLottieFilesturn2search17 for very lightweight looped animations, urlRiveturn2search3 for truly interactive state-based scenes, and urlSplineturn3search7 for small 3D accents only, especially because Spline’s library includes free commercial 3D models. citeturn30view0turn30view1turn30view3turn30view4turn30view5turn30view6

For type, source from urlGoogle Fontsturn15search7 or self-host the chosen files, subset them, and keep the loading strategy tight. This is one of the easiest places to accidentally lose the premium feel through CLS or font-flash issues. citeturn15search15turn20view10

A very practical asset plan is:

- **Hero media:** one cinematic still image or extremely subtle loop.  
- **Section accents:** one illustration system or one photography system, not both fighting each other.  
- **Tool visuals:** simple vector shapes, glows, rings, cards, tactile shadows.  
- **Blog OG images:** reusable branded template with title + muted visual background.  
- **Contact icons:** Instagram, WhatsApp, email, Topmate, all in one icon set.

## Delivery sequence and acceptance criteria

The development sequence should be ruthless about order. Brand clarity first, structure second, polish later. Teams usually lose time on wellness sites by polishing a beautiful homepage before locking content architecture and trust strategy. Mood-board alignment, copy direction, and route architecture should come before micro-polish. citeturn35view4turn35view0

The implementation plan should run in this order:

- **Foundation pass** — set up stack, content collections, routing, central CTA config, design tokens, theme system, and placeholder content.
- **Core page pass** — build Home, About, Work With Me, Self-Help hub, Blog index, Blog template, Contact, FAQ, Disclaimer, Privacy, and 404.
- **Feature pass** — breathing orb, grounding tool, journal, reflection deck, ritual builder, and static search.
- **Editorial pass** — load at least 8 to 12 high-quality starter pieces so the site feels lived in on day one.
- **Quality pass** — performance, responsiveness, accessibility, broken-link audit, structured-data validation, image optimisation, reduced-motion audit.
- **Launch pass** — custom domain, favicons, OG assets, final redirects, final legal copy, final crisis-note placement.

The launch acceptance criteria should be:

- The site is fully usable on mobile, tablet, laptop, and large screens, with layouts that adapt cleanly instead of merely shrinking. citeturn20view4turn20view5
- All major CTAs route correctly to urlTopmateturn6search0, urlInstagramhttps://www.instagram.com, urlWhatsApphttps://www.whatsapp.com, and email, using real links. citeturn20view8turn23view0turn5search4
- Core Web Vitals targets are treated as pass/fail: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1. citeturn33search0turn33search1
- The hero image is eager-loaded, off-screen images are lazy-loaded, and there is no heavy third-party embed on first paint. citeturn37view0turn37view1
- Keyboard navigation works end to end, there is a skip link, focus is visible, reduced motion is respected, and touch targets are comfortably tappable. citeturn23view0turn24view0turn20view7
- Users can reach a custom 404 page that still offers a path back to Home, Self-Help, and Book on Topmate. citeturn28view0
- Content updates happen by adding or editing content files and merging to main; no page should require JSX edits for ordinary article or resource publishing. citeturn20view2turn20view1
- FAQ exists for trust, Article schema exists for blog posts, and the content is clearly written for humans first. citeturn27view0turn27view1turn20view11

## Open questions and limitations

A few inputs are still missing, so the AI agent should treat these as configurable rather than fixed:

- the exact practitioner name, credentials, modalities, and brand voice;
- the final Instagram handle, Topmate profile URL, WhatsApp number, and email address;
- whether the brand wants a dark-first or light-first visual identity;
- whether there is already approved photography or whether the first release should ship with licensed stock and abstract visuals;
- whether there are testimonials and legal permission to use them;
- whether PWA installability is wanted in the first release or only after launch.

If those inputs are not available on day one, the agent should proceed with a configuration-driven build, placeholder content model, and the route/content plan above, so implementation can start immediately without blocking on final copy.