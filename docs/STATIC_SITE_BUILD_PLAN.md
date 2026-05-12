# The Healing Souls Static Website Build and GitHub Pages Hosting Plan

## 1. Plan purpose

This plan translates the existing product, brand, and implementation documentation into a practical delivery roadmap for building **The Healing Souls** as a static, premium wellness website hosted on **GitHub Pages**. It is designed to guide design, content, engineering, QA, deployment, and post-launch operations without introducing a backend or payment processing layer.

The site should function as a calm, trustworthy digital healing space that:

1. Builds trust quickly through clear credentials, careful scope language, and crisis-support visibility.
2. Presents Vishakha Singh and The Healing Souls as a warm, professional, science-backed counselling psychology brand.
3. Routes commercial actions to Topmate and contact actions to Instagram, WhatsApp, and email.
4. Offers immediate value through self-help tools, grounding resources, articles, and ritual-style content.
5. Remains easy to maintain through static content files, Git-based publishing, and automated GitHub Pages deployment.

## 2. Source documentation summary

### 2.1 Brand and practitioner facts

Use `docs/basic_info.json` as the source of truth for launch copy until the client confirms missing contact details.

- Brand name: **The Healing Souls**.
- Practitioner: **Vishakha Singh**.
- Role/title: **Counselling Psychologist**.
- Credentials include psychology degrees, CBT and REBT certifications, an in-progress guidance and counselling diploma, and elementary education training.
- Modalities include client-centered therapy, CBT, REBT, mindfulness-based techniques, and an eclectic approach.
- Brand voice: warm, gentle, emotionally safe, professional, non-judgmental, science-backed, and hopeful.
- Confirmed external links:
  - Instagram: `https://www.instagram.com/_the_healing_souls`
  - Topmate: `https://topmate.io/vishakha_singh14`
- Missing launch blockers:
  - WhatsApp click-to-chat URL.
  - Public email address.

### 2.2 Product intent from the PRD

The PRD defines the site as a premium, emotionally safe, content-first wellness website. It should avoid generic spiritual-template visuals and instead feel like a rich editorial healing space. It should not process payments directly; all booking and paid actions must leave the site and go to Topmate.

The experience should support three layers:

1. **Quick emotional relief** through tools like breathing, grounding, and check-ins.
2. **Deeper self-reflection** through journaling, resources, and articles.
3. **Premium conversion** into counselling sessions through clear Topmate CTAs.

### 2.3 Implementation blueprint recommendations

The implementation document recommends:

- **Astro** as the primary static site framework.
- **GitHub Pages** as the hosting target.
- **Markdown/MDX content collections** for articles, guides, hubs, FAQs, and legal content.
- **Pagefind** for static site search once the content library is large enough.
- **Vanilla JavaScript and CSS-first interactivity** before adding heavier client-side libraries.
- **Plausible or Umami** as privacy-forward analytics options.
- **GitHub Actions** for CI and production deployment.

## 3. Recommended technical architecture

### 3.1 Stack

| Layer | Decision | Notes |
|---|---|---|
| Site framework | Astro | Best fit for content-first static pages, Markdown collections, image optimization, and partial client-side interactivity. |
| Styling | Plain CSS with design tokens | Keeps the site lightweight, expressive, and framework-independent. |
| Content | Markdown/MDX + JSON/TypeScript data files | Enables non-technical content updates through Git and keeps practitioner/contact data centralized. |
| Search | Pagefind in Phase 2 | Add once the blog/resources library has enough content to justify search. |
| Interactive tools | Vanilla JS modules | Breathing, grounding, journal, and check-in tools should work without a backend. |
| State/storage | LocalStorage only for MVP | Journals, preferences, and tool history must stay local to the visitor's device. |
| Analytics | Optional Plausible/Umami | Track only privacy-safe aggregate events; never send journal text or sensitive self-help responses. |
| Hosting | GitHub Pages | Deploy from GitHub Actions to the Pages environment. |
| Domain | GitHub Pages URL first, custom `www` domain later | Use `public/CNAME` only after the domain is confirmed and DNS is ready. |

### 3.2 Repository structure

```text
.
├─ docs/
│  ├─ PRD.md
│  ├─ Implementation.md
│  ├─ basic_info.json
│  └─ STATIC_SITE_BUILD_PLAN.md
├─ public/
│  ├─ favicon.svg
│  ├─ robots.txt
│  ├─ social/
│  │  └─ og-default.png
│  └─ CNAME                     # only after custom domain confirmation
├─ src/
│  ├─ components/
│  │  ├─ global/
│  │  │  ├─ Header.astro
│  │  │  ├─ Footer.astro
│  │  │  ├─ SafetyNote.astro
│  │  │  ├─ StickyMobileCTA.astro
│  │  │  └─ SkipLink.astro
│  │  ├─ marketing/
│  │  │  ├─ Hero.astro
│  │  │  ├─ TrustBand.astro
│  │  │  ├─ IntentPathCards.astro
│  │  │  ├─ ApproachSection.astro
│  │  │  ├─ FeaturedResources.astro
│  │  │  └─ FinalCTA.astro
│  │  ├─ cards/
│  │  │  ├─ ToolCard.astro
│  │  │  ├─ ArticleCard.astro
│  │  │  ├─ ContactCard.astro
│  │  │  └─ CredentialCard.astro
│  │  └─ tools/
│  │     ├─ BreathingOrb.astro
│  │     ├─ GroundingFlow.astro
│  │     ├─ MoodCheckIn.astro
│  │     └─ LocalJournal.astro
│  ├─ content/
│  │  ├─ blog/
│  │  ├─ guides/
│  │  ├─ hubs/
│  │  ├─ faqs/
│  │  └─ legal/
│  ├─ data/
│  │  ├─ practitioner.ts
│  │  ├─ external-links.ts
│  │  ├─ crisis-support.json
│  │  ├─ prompts.json
│  │  ├─ rituals.json
│  │  └─ tool-paths.json
│  ├─ layouts/
│  │  ├─ BaseLayout.astro
│  │  ├─ MarketingLayout.astro
│  │  ├─ ArticleLayout.astro
│  │  └─ ToolLayout.astro
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ about.astro
│  │  ├─ sessions.astro
│  │  ├─ self-help/
│  │  │  ├─ index.astro
│  │  │  ├─ breathe.astro
│  │  │  ├─ ground.astro
│  │  │  ├─ check-in.astro
│  │  │  ├─ journal.astro
│  │  │  └─ rituals.astro
│  │  ├─ blog/
│  │  │  ├─ index.astro
│  │  │  └─ [slug].astro
│  │  ├─ resources.astro
│  │  ├─ faq.astro
│  │  ├─ contact.astro
│  │  ├─ privacy.astro
│  │  ├─ disclaimer.astro
│  │  ├─ terms.astro
│  │  └─ 404.astro
│  └─ styles/
│     ├─ tokens.css
│     ├─ global.css
│     ├─ themes.css
│     ├─ components.css
│     └─ prose.css
├─ .github/
│  └─ workflows/
│     ├─ ci.yml
│     └─ deploy.yml
├─ astro.config.mjs
├─ package.json
└─ tsconfig.json
```

### 3.3 Content collections

Create Astro content collections for repeatable content types.

| Collection | Purpose | Required frontmatter |
|---|---|---|
| `blog` | Editorial articles and reflections | `title`, `description`, `date`, `updatedDate`, `category`, `tags`, `draft`, `featured`, `readTime`, `seoTitle`, `seoDescription` |
| `guides` | Longer practical resources | `title`, `description`, `intent`, `difficulty`, `estimatedTime`, `tags`, `draft` |
| `hubs` | Intent-led resource pages | `title`, `description`, `intent`, `featuredTools`, `featuredPosts`, `draft` |
| `faqs` | Trust and expectation questions | `question`, `answer`, `group`, `order`, `draft` |
| `legal` | Privacy, disclaimer, and terms content | `title`, `description`, `updatedDate`, `draft` |

## 4. Information architecture and route plan

### 4.1 MVP routes

| Route | Goal | Primary CTA | Secondary CTA |
|---|---|---|---|
| `/` | Establish trust, orient visitors, and route them to booking, tools, or content. | Book on Topmate | Explore self-help |
| `/about` | Tell Vishakha's story, credentials, modalities, and scope. | Book on Topmate | Contact |
| `/sessions` | Explain session fit, format, expectations, and booking flow. | Book on Topmate | Read FAQ |
| `/self-help` | Present calm tools grouped by user intent. | Start a tool | Read a guide |
| `/self-help/breathe` | Provide immediate regulation through a breathing guide. | Start breathing | Save preference locally |
| `/self-help/ground` | Provide a 5-4-3-2-1 style grounding flow. | Start grounding | Read grounding article |
| `/self-help/check-in` | Route users based on how they feel. | Continue path | Book support |
| `/self-help/journal` | Offer local-only reflection prompts. | Write privately | Export/delete local entries |
| `/self-help/rituals` | Offer short morning/evening reset routines. | Start ritual | Save routine locally |
| `/blog` | Browse editorial writing. | Read article | Search/filter content |
| `/blog/[slug]` | Deliver people-first content with trust CTAs. | Related resource | Book/contact |
| `/resources` | Curated help, books, prompts, helplines, worksheets. | Use resource | Contact |
| `/faq` | Set expectations and reduce booking anxiety. | Book on Topmate | Contact |
| `/contact` | Provide external contact paths only. | WhatsApp/email/Instagram | Book on Topmate |
| `/privacy` | Explain static-site privacy and local storage. | Contact | Back home |
| `/disclaimer` | Explain non-emergency, non-diagnostic scope. | See urgent support | Contact |
| `/terms` | Basic website terms. | Contact | Back home |
| `/404` | Recover gracefully. | Go home | Explore self-help |

### 4.2 Future routes

Add these after MVP only if content volume supports them:

- `/search` for Pagefind site search.
- `/resources/hubs/[slug]` for topic hubs such as burnout, overthinking, boundaries, loneliness, sleep, self-worth, and heartbreak.
- `/guides/[slug]` for long-form guided practices.
- `/worksheets/[slug]` for downloadable PDFs or printable self-reflection sheets.

## 5. Page-by-page content and component plan

### 5.1 Home page

**Purpose:** Convert qualified visitors quickly while still feeling soft and useful.

Recommended section order:

1. **Hero**
   - Headline: “A softer place to pause, reflect, and begin again.”
   - Subhead: “Counselling-informed sessions, gentle self-help tools, and thoughtful resources for overwhelm, burnout, heartbreak, and inner noise.”
   - Primary CTA: “Book on Topmate”.
   - Secondary CTA: “Explore self-help”.
   - Tertiary text link: “Get in touch”.
2. **Safety and scope strip**
   - State that the site is not emergency support.
   - Include urgent support guidance and relevant helpline information.
3. **Trust band**
   - Counselling Psychologist.
   - CBT and REBT certified.
   - Payments handled securely off-site through Topmate.
4. **Choose your path**
   - Book a session.
   - Calm myself now.
   - Read something grounding.
5. **Approach section**
   - Client-centered, CBT, REBT, mindfulness-based, eclectic approach.
6. **Featured tool preview**
   - Breathing orb or grounding card.
7. **Featured writing/resources**
   - Three cards: overthinking, burnout, boundaries.
8. **About preview**
   - Practitioner snapshot and credentials teaser.
9. **FAQ preview**
   - Three booking and safety questions.
10. **Final CTA cluster**
   - Book on Topmate.
   - Instagram.
   - WhatsApp.
   - Email.

**Acceptance criteria:**

- Primary booking CTA is visible above the fold on desktop and mobile.
- Self-help option is available without forcing conversion.
- Safety note is visible before users reach tools or articles.
- External links are centralized and reusable.

### 5.2 About page

**Purpose:** Build credibility and emotional safety.

Sections:

1. Practitioner introduction.
2. Philosophy and tone of care.
3. Credentials list.
4. Modalities and what they mean in plain language.
5. Who this space is for.
6. Who this space is not for, including crisis/emergency care.
7. CTA to Topmate and contact options.

**Acceptance criteria:**

- All credentials match `docs/basic_info.json` exactly unless updated by client.
- Claims remain factual and avoid guarantees.
- Scope-of-practice language is visible and plain.

### 5.3 Sessions page

**Purpose:** Reduce uncertainty before booking.

Sections:

1. Session promise and fit.
2. What sessions can support: overwhelm, stress, overthinking, boundaries, self-worth, heartbreak, burnout, routine building.
3. What to expect before, during, and after booking.
4. Modalities and session style.
5. Booking flow: website → Topmate → payment/scheduling on Topmate.
6. FAQ slice.
7. Crisis disclaimer.
8. CTA cluster.

**Acceptance criteria:**

- No payment UI is implemented on the static site.
- Every booking CTA opens Topmate.
- Pricing is shown only if confirmed and kept consistent with Topmate.

### 5.4 Self-help hub

**Purpose:** Make tools feel like a calm library rather than a list of widgets.

Group tools by emotional intent:

1. **Calm now**
   - Breathing orb.
   - Grounding flow.
   - Short ritual.
2. **Understand what I am feeling**
   - Mood check-in.
   - Intent path cards.
3. **Reflect privately**
   - Local journal.
   - Prompt deck.
4. **Read deeper**
   - Related articles and guides.

**Acceptance criteria:**

- Tool cards describe benefits without medical promises.
- Visitors can start at least one tool in one tap from mobile.
- Crisis support remains visible in the layout/footer.

### 5.5 Tool pages

Common structure for all tools:

1. Tool title and emotional use case.
2. Short safety note.
3. Interactive area.
4. Reduced-motion or text-only fallback.
5. Local preference/storage explanation if storage is used.
6. Related articles/resources.
7. Booking/contact CTA.

Specific notes:

- **Breathing orb:** Include several breathing modes, keyboard controls, pause/resume, reduced-motion fallback, and optional local preference saving.
- **Grounding flow:** Use sensory prompts with clear step progress and a reset option.
- **Check-in:** Avoid diagnostic results. Route users to tools/resources based on chosen feelings.
- **Journal:** Store entries locally only. Add export and delete-all controls. Never send text to analytics.
- **Rituals:** Provide short morning, midday, evening, and hard-day routines.

### 5.6 Blog and resources

**Purpose:** Create long-term trust and repeat visits.

Editorial categories:

- Overthinking.
- Burnout.
- Boundaries.
- Self-worth.
- Heartbreak.
- Stress and overwhelm.
- Sleep and rest.
- Journaling prompts.
- Gentle routines.

Article template:

1. Title.
2. Description/dek.
3. Author name.
4. Published and updated dates.
5. Read time.
6. Key takeaways.
7. Body.
8. Inline soft CTA.
9. Related articles.
10. Final CTA and crisis reminder.

MVP starter content:

- “What to do when your mind will not slow down”.
- “A gentle reset for days that feel heavy”.
- “How to start setting boundaries without sounding harsh”.
- “Journaling prompts for emotional overwhelm”.
- “When rest feels difficult: a softer way to pause”.
- “What counselling can and cannot support”.

### 5.7 Contact page

**Purpose:** Route users cleanly without maintaining a backend form.

Cards:

1. Book on Topmate.
2. Message on WhatsApp.
3. Follow/message on Instagram.
4. Email.

**Acceptance criteria:**

- No custom contact form in MVP.
- WhatsApp and email remain disabled or marked “coming soon” until confirmed.
- All external links use accessible labels and visible destinations.

### 5.8 Legal, privacy, and disclaimer pages

Minimum pages:

- `/privacy`: Explain static hosting, analytics, local storage, no journal sync, and external link handoff.
- `/disclaimer`: Explain that content is educational/self-help and not emergency or diagnostic care.
- `/terms`: Basic acceptable use and external-site disclaimer.

**Acceptance criteria:**

- Crisis/non-emergency language appears in disclaimer, footer, contact, and tool pages.
- Privacy page explicitly says local journal entries remain on the visitor's device unless they export/share them.

## 6. Trust, safety, and ethics plan

### 6.1 Crisis support

Because the website operates in a mental-wellbeing context, every major template must include an emergency/safety surface.

Required locations:

- Header or top safety strip on high-intent pages.
- Footer sitewide.
- Contact page.
- Tool pages.
- FAQ/disclaimer pages.

Suggested copy pattern:

> This website is not for emergencies or crisis care. If you feel at risk of harming yourself or someone else, contact local emergency services or a crisis helpline immediately.

If India-specific support is appropriate for the audience, include Tele-MANAS `14416` after confirmation with the practitioner. If the site serves an international audience, add wording that visitors should use emergency services or crisis support available in their country.

### 6.2 Scope language

Use careful phrases:

- “May support”.
- “Can help you reflect”.
- “A grounding practice”.
- “Educational self-help resource”.
- “Counselling-informed”.

Avoid:

- “Cures anxiety”.
- “Guaranteed healing”.
- “Diagnose yourself”.
- “Replace therapy”.
- “Emergency support”.

### 6.3 Privacy and sensitive data

- Do not collect therapy notes, journal text, crisis details, or mood responses on a server.
- Do not add hidden form submissions.
- Do not send self-help tool responses to analytics.
- Store journal entries locally only.
- Make local deletion obvious.
- Add a “Clear my entries” control to journal-related tools.

## 7. Visual design plan

### 7.1 Art direction

The visual system should be “calm editorial luxury”: soft, premium, grounded, and emotionally safe. Avoid generic pastel wellness clichés and overly mystical iconography.

Recommended palette direction:

- Warm ivory surfaces.
- Deep ink or cocoa text.
- Muted sage.
- Dusty rose or mauve.
- Controlled gold highlights.
- Soft shadows and tactile paper-like surfaces.

### 7.2 Typography

Use at most two families:

- Serif for premium editorial headings, e.g. Fraunces or Newsreader.
- Sans for body/UI, e.g. Manrope, Lexend, or Inter.

Typography rules:

- Body text must remain highly readable on mobile.
- Use generous line-height for articles and tools.
- Avoid too many heading styles.
- Minimize layout shift by loading fonts carefully.

### 7.3 Motion

Motion should feel like breath, not spectacle.

Allowed motion:

- Soft fades.
- Gentle reveal transitions.
- Button hover elevation.
- Breathing orb expansion/contraction.
- Low-amplitude organic background drift.

Not allowed for MVP:

- Scroll hijacking.
- Fast parallax.
- Flashing effects.
- Complex animation timelines that distract from content.

Required:

- `prefers-reduced-motion` support.
- No essential information conveyed only through motion.

### 7.4 Design tokens

Create tokens for:

- Color.
- Typography.
- Spacing.
- Radius.
- Shadow.
- Z-index.
- Motion durations/easing.
- Container widths.

Example token categories:

```css
:root {
  --color-bg: #f4efe8;
  --color-surface: #fbf8f4;
  --color-ink: #211d1a;
  --color-muted: #6d665f;
  --color-sage: #7b8d7d;
  --color-mauve: #877391;
  --color-gold: #b79860;
  --font-serif: "Fraunces", Georgia, serif;
  --font-sans: "Manrope", system-ui, sans-serif;
  --radius-card: 1.5rem;
  --radius-pill: 999px;
  --shadow-soft: 0 1.5rem 4rem rgb(33 29 26 / 0.12);
  --ease-premium: cubic-bezier(.22, 1, .36, 1);
}
```

## 8. GitHub Pages hosting and deployment plan

### 8.1 Initial GitHub Pages setup

1. Create or confirm the GitHub repository.
2. Create the Astro project in the repository root.
3. Add `.github/workflows/deploy.yml`.
4. In GitHub repository settings, enable Pages with **GitHub Actions** as the source.
5. Push to `main`.
6. Verify the `github-pages` deployment environment succeeds.
7. Open the GitHub Pages URL and test routes, assets, CSS, and 404 behavior.

### 8.2 Astro config scenarios

Scenario A: repository is published under `https://<username>.github.io/<repo-name>/`.

```js
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://<username>.github.io",
  base: "/<repo-name>",
});
```

Scenario B: repository is the user/organization Pages root, `https://<username>.github.io/`.

```js
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://<username>.github.io",
});
```

Scenario C: custom domain is ready, such as `https://www.thehealingsouls.com`.

```js
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.thehealingsouls.com",
});
```

Also add:

```text
public/CNAME
www.thehealingsouls.com
```

### 8.3 Deployment workflow

Recommended production workflow:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Check
        run: npm run check

      - name: Build
        run: npm run build

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 8.4 Pull request CI workflow

```yaml
name: CI

on:
  pull_request:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Type and Astro checks
        run: npm run check

      - name: Build
        run: npm run build
```

### 8.5 Custom domain rollout

1. Buy or confirm the domain.
2. Prefer a `www` domain for GitHub Pages stability.
3. Add DNS records according to GitHub's domain guidance.
4. Add `public/CNAME` with the custom domain.
5. Update `astro.config.mjs` `site` value.
6. Deploy to GitHub Pages.
7. Verify domain ownership in GitHub settings.
8. Enable/enforce HTTPS after the certificate is issued.
9. Test canonical URLs, Open Graph URLs, sitemap URLs, and redirects.

## 9. Development phases and milestones

### Phase 0: Discovery and launch-blocker confirmation

**Goal:** Confirm everything needed to avoid rework.

Tasks:

- Confirm WhatsApp number and preferred pre-filled message.
- Confirm public email address.
- Confirm whether India-specific crisis support should be shown globally.
- Confirm custom domain decision.
- Confirm whether pricing should appear on the website or only on Topmate.
- Confirm testimonials availability and consent.
- Confirm imagery preference: abstract illustration, photography, or mostly typographic.

Deliverables:

- Updated `docs/basic_info.json` or equivalent source-of-truth data file.
- Approved sitemap.
- Approved content inventory.

Exit criteria:

- No placeholder contact destinations remain for launch-critical CTAs.

### Phase 1: Project foundation

**Goal:** Create a stable static-site skeleton.

Tasks:

- Initialize Astro with TypeScript.
- Add base scripts: `dev`, `build`, `preview`, `check`.
- Add global layouts.
- Add design token files.
- Add basic routing.
- Add centralized data files for practitioner details, external links, and crisis support.
- Add SEO metadata helper.
- Add sitemap and robots configuration.
- Add GitHub Actions CI.

Deliverables:

- Astro app runs locally.
- All MVP routes exist as placeholder pages.
- Shared header/footer/safety note render across pages.

Exit criteria:

- `npm run check` passes.
- `npm run build` passes.
- Placeholder site can be deployed to GitHub Pages.

### Phase 2: Design system and core layout

**Goal:** Build the premium visual foundation.

Tasks:

- Implement tokens, global CSS, and prose styles.
- Build base components: button, card, section, tag, link, CTA cluster.
- Build Header, Footer, SafetyNote, StickyMobileCTA, and ContactCardGrid.
- Add responsive navigation.
- Add accessible focus states.
- Add reduced-motion handling.
- Add initial favicon and social preview asset.

Deliverables:

- Reusable component library for page assembly.
- Mobile-first responsive shell.

Exit criteria:

- Components pass keyboard navigation checks.
- Layout looks consistent at mobile, tablet, and desktop widths.

### Phase 3: Marketing and trust pages

**Goal:** Launch the core conversion path.

Tasks:

- Build home page.
- Build about page.
- Build sessions page.
- Build contact page.
- Build FAQ page.
- Build legal/privacy/disclaimer pages.
- Add all confirmed external links.
- Add nofollow/noopener attributes where appropriate for external links.

Deliverables:

- Complete conversion flow from homepage to Topmate.
- Complete contact flow to Instagram, WhatsApp, and email.

Exit criteria:

- All Topmate CTAs work.
- No unconfirmed WhatsApp/email links ship as active CTAs.
- Crisis/scope language appears in required locations.

### Phase 4: Self-help MVP

**Goal:** Provide immediate user value while staying static and privacy-safe.

Tasks:

- Build self-help hub.
- Build breathing tool.
- Build grounding tool.
- Build mood check-in route.
- Build local-only journal route.
- Build rituals route.
- Add localStorage helper with clear/export controls.
- Ensure no tool data is sent to analytics.
- Add reduced-motion alternatives.

Deliverables:

- Five usable self-help tools.
- Local-only privacy explanation.

Exit criteria:

- Tools work without a backend.
- Journal entries survive refresh locally.
- Journal entries can be exported and deleted.
- Reduced-motion mode remains usable.

### Phase 5: Editorial content and resource library

**Goal:** Make the site useful beyond the first visit.

Tasks:

- Configure content collections.
- Create blog index and article template.
- Add six starter articles.
- Add resource page.
- Add topic categories and tag filters.
- Add related-post logic.
- Add Article structured data.
- Add soft CTAs inside articles.

Deliverables:

- Editorial library with initial content.
- Search-ready content structure.

Exit criteria:

- Each article has metadata, author, dates, tags, and related CTAs.
- Content is scannable and mobile-friendly.
- No article makes unsupported medical claims.

### Phase 6: Search, analytics, and polish

**Goal:** Add helpful enhancements without undermining trust or performance.

Tasks:

- Add Pagefind if content volume justifies it.
- Add privacy-forward analytics if approved.
- Track aggregate events only:
  - `cta_topmate_click`.
  - `contact_instagram_click`.
  - `contact_whatsapp_click`.
  - `contact_email_click`.
  - `tool_started` with tool name only.
  - `article_read_more_click`.
- Add image optimization.
- Add Open Graph/Twitter metadata.
- Add sitemap validation.

Deliverables:

- Search page or embedded search UI.
- Optional analytics script and event helpers.

Exit criteria:

- No sensitive text, mood detail, or journal content enters analytics payloads.
- Search works after production build.

### Phase 7: GitHub Pages launch

**Goal:** Publish the production static site.

Tasks:

- Confirm repository Pages settings use GitHub Actions.
- Confirm Astro `site` and `base` are correct.
- Run local production build.
- Merge to `main`.
- Verify GitHub Actions deployment.
- Test live URL on mobile and desktop.
- Enforce HTTPS.
- Add custom domain if ready.

Deliverables:

- Live GitHub Pages website.
- Documented deployment workflow.

Exit criteria:

- Live home page loads over HTTPS.
- All internal routes resolve.
- 404 page works.
- Topmate, Instagram, WhatsApp, and email CTAs work or are intentionally disabled pending confirmation.

### Phase 8: Post-launch operations

**Goal:** Keep the site healthy and easy to maintain.

Tasks:

- Add a monthly content update routine.
- Review analytics monthly, if enabled.
- Add new articles/resources through Markdown.
- Review external links quarterly.
- Review crisis support and disclaimer language quarterly.
- Refresh dependencies monthly.
- Run Lighthouse checks before major content/design changes.

Deliverables:

- Maintenance checklist.
- Content calendar.
- Dependency update process.

Exit criteria:

- The site remains deployable from a clean checkout.
- Content updates do not require engineering changes.

## 10. Accessibility and quality plan

### 10.1 Accessibility requirements

- Semantic landmarks: header, nav, main, footer.
- One logical H1 per page.
- Keyboard-accessible navigation and tools.
- Visible focus states.
- Accessible color contrast.
- Minimum comfortable tap target sizes.
- Skip link.
- Reduced-motion support.
- Form controls labeled clearly where used.
- Tool instructions available as text, not motion alone.

### 10.2 Performance requirements

- Static pages should be fast without JavaScript.
- JavaScript should be limited to interactive tools and optional search/analytics.
- Images should use optimized formats and dimensions.
- Fonts should be limited and loaded carefully.
- Avoid large animation libraries for MVP.
- Target strong Lighthouse scores for Performance, Accessibility, Best Practices, and SEO.

### 10.3 SEO requirements

- Unique title and description per page.
- Canonical URLs.
- Open Graph metadata.
- Sitemap.
- Robots file.
- Article structured data for blog posts.
- Practitioner/Organization structured data where appropriate.
- Clear practitioner name included in metadata to differentiate the brand from unrelated “Healing Souls” presences.

### 10.4 Manual QA checklist

Before launch, test:

- Home page at 360px, 390px, 768px, 1024px, and desktop widths.
- Navigation with keyboard only.
- Reduced-motion mode.
- Topmate links.
- Instagram link.
- WhatsApp link.
- Email link.
- Local journal save/export/delete.
- Breathing tool pause/resume.
- Grounding tool reset.
- 404 page.
- Sitemap and robots URLs.
- GitHub Pages live deployment.

## 11. Content governance

### 11.1 Voice rules

Every page should feel:

- Warm but not vague.
- Gentle but not passive.
- Professional but not clinical/cold.
- Hopeful but not promise-heavy.
- Science-backed without sounding academic.

### 11.2 Editorial rules

- Write for scanning: short sections, strong headings, concise paragraphs.
- Avoid dense “marketese”.
- Avoid unsupported claims.
- Use plain-language explanations for therapy modalities.
- Include safety/scope language on mental-health-adjacent content.
- Add a soft next step at the end of every article.

### 11.3 Content update workflow

1. Create a new Markdown/MDX file in the relevant collection.
2. Add required frontmatter.
3. Mark as `draft: true` until reviewed.
4. Run local check and build.
5. Review copy for scope, safety, and claims.
6. Switch `draft` to `false`.
7. Commit and open PR.
8. Merge to deploy.

## 12. Data, links, and environment configuration

### 12.1 Centralized link config

Create a single file such as `src/data/external-links.ts`:

```ts
export const externalLinks = {
  topmate: "https://topmate.io/vishakha_singh14",
  instagram: "https://www.instagram.com/_the_healing_souls",
  whatsapp: "TODO_CONFIRM",
  email: "TODO_CONFIRM",
};
```

Rules:

- Components must import links from this file rather than hardcoding URLs.
- Confirmed links can render as active CTAs.
- Unconfirmed links should render as unavailable, hidden, or “coming soon” based on launch preference.

### 12.2 Analytics event rules

Allowed:

- CTA click destination.
- Tool name started.
- Search query only if approved and not sensitive; safer default is not to track search query text.
- Page views.

Disallowed:

- Journal text.
- Mood response labels if they are too sensitive.
- Free-text check-in responses.
- Crisis/self-harm disclosure text.
- Any personally identifying counselling details.

## 13. Risks and mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| WhatsApp/email remain unconfirmed | Contact page incomplete | Launch with Topmate and Instagram only, or show disabled “coming soon” contact cards. |
| Mental-health copy overclaims | Trust/legal risk | Add scope review to content workflow and avoid cure/diagnosis language. |
| Too much animation | Accessibility and performance risk | CSS-first motion, reduced-motion support, no scroll hijacking. |
| Static site collects sensitive data accidentally | Privacy risk | Local-only tools, no backend forms, analytics allowlist. |
| GitHub Pages base path misconfigured | Broken assets/routes | Choose correct Astro `site`/`base` scenario before deployment. |
| Content library launches too thin | Site feels unfinished | Prioritize six strong starter articles and resource cards before adding search. |
| Generic brand discoverability | SEO confusion | Include practitioner name, title, and location/descriptor in metadata and hero/support copy. |

## 14. Definition of done

The website is launch-ready when:

- Astro builds successfully.
- GitHub Pages deploys successfully.
- The homepage, about, sessions, self-help hub, tool pages, blog, resources, FAQ, contact, legal, and 404 pages are live.
- Every commercial CTA routes to Topmate.
- Contact CTAs route only to confirmed destinations.
- Crisis and scope language appears consistently.
- Journal/self-help data remains local and can be cleared.
- Reduced-motion mode is supported.
- Key pages pass manual keyboard and mobile QA.
- SEO metadata, sitemap, robots, and social preview metadata are present.
- HTTPS is active on the GitHub Pages URL or custom domain.

## 15. Immediate next actions

1. Confirm WhatsApp, email, domain, and crisis-support geography.
2. Initialize the Astro project in the repository root.
3. Create centralized data files from `docs/basic_info.json`.
4. Build the shared layout, tokens, and reusable CTA/contact components.
5. Implement the homepage, about, sessions, contact, and legal pages first.
6. Add self-help tools after the conversion path is stable.
7. Add starter editorial content and resources.
8. Configure GitHub Actions for CI and GitHub Pages deployment.
9. Run QA, fix accessibility/performance issues, and launch.
