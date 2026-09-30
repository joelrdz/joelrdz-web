# joelrdz.com — v1

## Problem Statement

People who might hire the site owner as an engineer (employers, companies looking for a contractor, clients looking for technical freelance work) have no single place to evaluate the owner. The domain joelrdz.com serves the hosting provider's default page. The CV is a document that lives outside any public site, the professional work sits in private client repositories, and the technical writing exists only as unpublished drafts. A visitor who follows a link from a professional profile or a job application finds nothing that shows what the owner solves, proof of having solved it, or a way to get in touch.

## Solution

A static personal site at joelrdz.com, built with Astro and hosted on Cloudflare Pages. The home page leads with what the owner solves and backs it with proof: two projects and a launch post. The CV is one click away, as a page and as a PDF. The blog, written in Spanish, works as proof of depth for the same audience. The UI is in English. Visitors can choose a light, dark or system theme. The repository is public, so it doubles as proof of how the owner plans and builds. Business (non-technical) clients are served by a separate consultancy brand and are not this site's audience.

## User Stories

1. As a recruiter, I want the home page to state in a few lines what problems the owner solves, so that I can tell within seconds whether the profile fits the role.
2. As a hiring manager, I want the home page to show proof right after the claim (the projects and the latest post), so that I don't have to take the claim on faith.
3. As a recruiter, I want the CV reachable in one click from every page, so that I can check experience without hunting for it.
4. As a recruiter, I want to download the CV as a PDF, so that I can attach it to an internal hiring process.
5. As a recruiter, I want the CV page and the PDF to say the same thing, so that I'm not comparing two versions.
6. As a hiring manager, I want the CV to print light and clean regardless of the site theme, so that a printed copy is readable.
7. As a recruiter, I want a visible email address in the footer and on the CV, so that I can reach out from my own mail client.
8. As a recruiter, I want a clear call to get in touch on the home page, so that the next step is obvious.
9. As a recruiter, I want links to LinkedIn and GitHub in the footer, so that I can cross-check the profile.
10. As a hiring manager, I want a projects index, so that I can see all the work on show at a glance.
11. As a hiring manager, I want every project page to follow the same structure (problem, what was built and the owner's role, key decisions, stack, status), so that I can compare projects and find what I need fast.
12. As a hiring manager, I want each project to state its status honestly (in progress or delivered), so that I know what exists today.
13. As a hiring manager, I want project pages to describe only delivered features, so that I'm evaluating real work rather than plans.
14. As a technical reviewer, I want the key decisions on a project page to link to the posts that explain them, so that I can go deeper where it matters.
15. As a hiring manager, I want the client project shown anonymously but concretely (an internal ordering portal for a multi-branch coffee company), so that I understand the work without the client being exposed.
16. As a technical reviewer, I want a diagram of the client project's data model and user roles, so that I can judge the engineering without screenshots.
17. As a visitor using dark mode, I want the project diagram to stay legible in both palettes, so that it isn't a bright box on a dark page.
18. As a technical reviewer, I want the site's own project page to link to its public repo, this spec and the launch post, so that I can see how the owner plans and builds.
19. As a technical reviewer who doesn't read Spanish, I want the site's own project page to summarize the build decisions in English, so that I get the gist without reading the post.
20. As a technical reviewer, I want a README that says what the site is, its stack and how to run it, so that I can evaluate the repo in minutes.
21. As a technical reviewer, I want every push to pass type checks and lint in CI, so that I can see the owner's baseline discipline.
22. As a technical reviewer, I want commits to follow Conventional Commits, so that the history is readable.
23. As a technical reviewer, I want a clear license, so that I know what I can reuse (the code) and what I can't (the content).
24. As the site owner, I want the code under MIT and the content (posts, CV, images) under all rights reserved, so that the CV and future photos stay mine.
25. As a Spanish-speaking developer, I want a blog index, so that I can find what to read.
26. As a Spanish-speaking developer, I want to read the launch post about how and why this site was built (Astro vs Next.js, Cloudflare vs the previous host, a public repo, a spec written through an agent-led interview, permanent post URLs), so that I learn from real decisions.
27. As a reader, I want post URLs never to change, so that the links I share keep working.
28. As a screen reader user, I want Spanish post content marked as Spanish, so that my reader pronounces it correctly.
29. As a screen reader user, I want Spanish titles and descriptions in listings marked as Spanish too, so that they aren't read with English pronunciation.
30. As an RSS subscriber, I want a feed of the blog, so that I get new posts without visiting.
31. As a visitor, I want the site to follow my system's light or dark preference by default, so that it matches the rest of my screen.
32. As a visitor, I want to choose light, dark or system explicitly, so that I can override my OS preference for this site.
33. As a visitor, I want to see all three theme options and which one is active, so that I know the current state without clicking through.
34. As a visitor, I want my theme choice remembered across pages and visits, so that I don't have to set it every time.
35. As a visitor on "system", I want the site to switch live when I change my OS appearance, without reloading, so that it stays in sync.
36. As a visitor who chose dark, I want every reload and navigation to render dark from the first paint, so that I never see a light flash.
37. As a visitor in private mode or with storage blocked, I want the theme control to keep working without breaking the page, following my system, so that the site doesn't fail on me.
38. As a keyboard user, I want to reach the theme control with Tab and change it with the arrow keys, so that I can use it without a mouse.
39. As a keyboard user, I want a visible focus indicator on every interactive element, including each theme option, so that I always know where I am.
40. As a screen reader user, I want the theme control announced as a group of radio options with the selected one, so that I understand it without custom instructions.
41. As a visitor with low vision, I want text contrast to meet WCAG AA in both palettes, so that I can read everything.
42. As a mobile visitor, I want pages to load fast, so that the site doesn't feel heavy on a phone.
43. As a visitor who follows a broken link, I want a 404 page that leads back into the site, so that I'm not stranded.
44. As someone sharing a link, I want a preview image and description to appear, so that the shared link looks intentional.
45. As a visitor, I want a single canonical address (joelrdz.com, with www redirecting to it), so that I always land on the same site.
46. As the site owner, I want the pages.dev address never indexed, so that search results show only joelrdz.com and never a half-built preview or a duplicate.
47. As the site owner, I want every push to main deployed to the preview address from day one, so that the site is up early and grows in place.
48. As the site owner, after launch, I want visible changes reviewed on a branch preview before merging, so that the live site never breaks.
49. As the site owner, I want cookieless traffic analytics, so that I know whether the CV gets visited after I apply somewhere, without a consent banner.
50. As the site owner, I want the home page's claims (headline, years of experience, stack) to match the CV, so that the two never contradict each other.
51. As the site owner, I want the CV source to stay outside the repo and be copied in when publishing, so that a single document stays the master.
52. As the site owner, I want drafts to stay outside the repo, so that only published content is public.
53. As the site owner, I want invalid post or project metadata to fail the build, so that broken content never deploys.
54. As the site owner, I want type errors to block deploys, so that the live site only ships code that type-checks.
55. As the site owner, I want the public email address to stay a placeholder until the email provider is chosen at launch, so that I can compare options first.
56. As the site owner, I want the design to look complete with two projects and one post, so that the launch doesn't wait for more content.
57. As the site owner, I want no layout slot that looks broken without a photo, so that the photo can arrive later.

## Implementation Decisions

### Stack and rendering

- Astro with static output and no adapter: nothing in scope needs a server. If something ever does, an adapter is added for that route; it doesn't force a framework change.
- TypeScript strict, as the scaffold's strict preset already provides.
- pnpm as the package manager.
- No UI framework in v1: no React, no MDX. The only client-side behavior is the theme control, written in vanilla JS inside an Astro component.

### Routes (URL contract)

- `/`: home.
- `/projects`: projects index. `/projects/<slug>`: one page per project.
- `/cv`: the CV page, which links to a downloadable PDF.
- `/blog`: blog index. `/blog/<slug>`: one page per post.
- An RSS feed for the blog and a sitemap.
- A 404 page.
- No About page: the home page does that job.
- **Permanent rule:** posts live at `/blog/<slug>` with no language prefix, forever. If the site becomes bilingual, `/es/` covers only the UI pages; no post ever changes URL.

### Language

- The UI, home, projects and CV are in English, and the page language is English.
- Posts are in Spanish. Each post declares its language in its metadata. The post content, and its title and description wherever they are listed, carry that language so assistive technology switches pronunciation.

### Content model

- Two content collections, blog posts and projects, each validated by a Zod schema. Invalid metadata fails the build.
- Blog posts: title, description, publication date and language (required). No draft flag: only published posts enter the repo.
- Projects: the project layout owns the fixed page structure (problem → what was built and the owner's role → key decisions → stack → status), and the schema backs it: a required status (in progress or delivered), the role, the stack as a list, key decisions with optional references to blog posts, and links (repo, spec, live site) where they exist. Exact field names are settled when the collection is built.
- Posts and the CV are copied into the repo at publish time from sources that live outside it. When copying, the drafting tool's syntax (wiki-style links, callouts) is converted to standard Markdown.

### Home page

- Leads with what the owner solves, followed by the proof: the two projects and the latest post. Closes with a call to get in touch (a mailto link).
- The text is written for the site, not copied from the CV, but its claims (headline, years of experience, stack) must match the CV. The tone follows the brand criteria defined outside this repo.
- Must look complete with two projects and one post.

### Projects at launch

- **Internal ordering portal for a multi-branch coffee company** (client work): anonymous. Status "in progress" unless it is delivered by launch. No screenshots in v1; instead, a diagram of the data model and user roles, legible in both palettes. Describes only delivered features.
- **joelrdz.com itself:** a short English version of the launch post's decisions, with links to the public repo, this spec and the post.
- v1 doesn't wait for more projects.

### CV

- The source lives outside the repo and remains the master. It is copied in at publish time, with the public email address in place of the private one.
- Rendered at `/cv`. A print stylesheet renders it light regardless of the active theme.
- The PDF is produced manually, by printing `/cv` from the browser, and committed as a static asset. Not automated in the build.

### Blog at launch

- One post, in Spanish: how and why this site was built. Written at the end of v1; the draft lives outside the repo and is copied in at launch.
- The joelrdz.com project page links to it.
- The blog index must look complete with one post.
- If the launch post moves to v1.1, everything that depends on it waits for the first post: the blog index and its nav link, the home page's post slot, the RSS feed, and the post link on the joelrdz.com project page.

### Contact

- The footer on every page shows LinkedIn, GitHub and the email address.
- No contact form: it would need a backend or a third-party service, and a mailto link is what recruiters use.
- `joel@joelrdz.com` is a placeholder until the email provider is chosen at launch. If the address changes, the footer, the CV page and the CV PDF are updated together.

### Theming

- Light and dark palettes, plus a "system" option. The brand criteria define how each palette looks, not whether there are two.
- **Control:** a native radio group: a fieldset with a visually hidden legend ("Theme") and three radio inputs (Light, Dark, System), styled as a segmented control of three icons, each with visually hidden text.
  - The radios are hidden with the visually-hidden technique, never with `display: none` or `visibility: hidden`, which would remove them from the tab order and the accessibility tree.
  - Focus is drawn on the visible label when its input matches `:focus-visible`.
  - Arrow-key navigation, focus handling and the state announcement come from the browser. No custom ARIA.
- **Behavior:** the script listens for `change` on the group. Light or Dark applies the theme and persists the choice. System clears the persisted choice, follows `prefers-color-scheme` and listens for its changes to update live, without a reload.
- **No flash:** a small inline script in the document head applies the persisted theme, or the system one, before the first paint.
- **Storage failure:** every storage access is guarded. If storage is unavailable, the control still switches the theme for the current page, the default follows the system, and nothing throws.

### Extras

- An RSS feed, through Astro's RSS package.
- A sitemap, through Astro's sitemap integration.
- One fixed Open Graph image for every page.
- A favicon, plus an Apple touch icon for iOS.
- Cloudflare Web Analytics, which is cookieless (no consent banner) and enabled from the Cloudflare dashboard.
- Each extra is added separately.

### Quality bar (definition of done)

- Lighthouse ≥ 95 on mobile. Performance, Accessibility and Best Practices are measured on the pages.dev preview. SEO is measured on joelrdz.com after the nameserver change, because the pages.dev noindex fails that audit by design.
- WCAG AA contrast in both palettes.
- Full keyboard navigation with visible focus.

### Repo and tooling

- Public GitHub repo `joelrdz/joelrdz-web`, created before building starts.
- Conventional Commits.
- A README covering what the site is, its stack and how to run it. It also states the content license.
- License: MIT for the code; posts, CV and images all rights reserved.
- Biome for lint and format, with its experimental full support for Astro files enabled (`html.experimentalFullSupportEnabled`). Fallback: if it mishandles templates, Astro files move to Prettier with `prettier-plugin-astro`, and Biome keeps TS/JS.
- The build script runs Astro's type check before building, so a type error fails the Pages build and nothing deploys.
- A GitHub Actions workflow runs `biome ci` on every push and pull request.
- No secrets in the repo.

### Hosting and deploy

- Cloudflare Pages is connected to the GitHub repo early. The project is named `joelrdz` if that name is available (`joelrdz.pages.dev`).
- `main` is the production branch; every push deploys to pages.dev from the start.
- The site URL is set to `https://joelrdz.com` from the first deploy, for canonical URLs, the sitemap and RSS.
- A Pages headers rule sets `X-Robots-Tag: noindex` on the pages.dev hostname, permanently.
- Before launch, commits go straight to `main`. After launch, visible changes go through a branch and its preview URL, and are merged when they look right.

### Domain and launch

- At launch, and only once, the nameservers move from the current host (Hostinger) to Cloudflare. The apex joelrdz.com is canonical, and www redirects to it.
- Email: before enabling any provider, compare the options and their trade-offs: Cloudflare Email Routing (receive-only), Hostinger mail, iCloud+ with a custom domain, and Zoho. The existing MX and SPF records are replaced according to the choice. A test message is sent and received before the site is announced.
- The domain registration moves to Cloudflare Registrar before it expires on 2027-10-15.

## Testing Decisions

- A good check tests what a visitor or the build sees (rendered pages, response headers, behavior in a real browser), not implementation details.
- **One automated seam: the build.** The Pages build runs the type check and validates every content collection entry against its schema, and GitHub Actions runs `biome ci`. A malformed post or project, or a type error, fails the build and never deploys.
- **No test framework in v1** (no Vitest, no Playwright). The only client-side logic is the theme control, and the manual checklist covers it. Revisit if more client-side JS appears.
- **Manual acceptance checklist.** Run on the pages.dev preview; the SEO and domain items run on joelrdz.com after launch.
  - Lighthouse on mobile ≥ 95: Performance, Accessibility and Best Practices on the preview; SEO on joelrdz.com.
  - AA contrast in both palettes, the project diagram included.
  - Keyboard: every interactive element is reachable with Tab and shows visible focus.
  - Theme control: all three options are reachable and switchable with the arrow keys, and a screen reader announces the group, the option and its selected state without custom ARIA.
  - System mode: changing the macOS appearance switches the site live, without a reload.
  - No flash: with Dark chosen, a reload renders dark from the first paint (this is what proves the inline head script).
  - Storage unavailable (private mode or blocked): the page renders, nothing throws, and the theme follows the system.
  - The `/cv` print preview is light regardless of the theme, and the PDF matches the page.
  - pages.dev responses carry `X-Robots-Tag: noindex`.
  - The RSS feed and the sitemap validate, and their URLs and the canonical URLs point to joelrdz.com.
  - Post content, and Spanish titles and descriptions in listings, carry `lang="es"`.
  - After launch: www redirects to the apex, and the test email arrives.
- Prior art: none. The repo is a fresh scaffold.

## Out of Scope

- Which of the other existing drafts get published, and on what schedule: decided after launch, together with the content strategy.
- Presenting existing post series as series.
- MDX and framework islands: they arrive with the first post that needs an interactive demo.
- Screenshots of the client project: added when the project is more robust, with test data and the branding hidden.
- An About page.
- Per-post Open Graph images.
- Stripping "related" links that point to unpublished drafts or private notes when copying posts: the rule applies once more drafts get published.
- A contact form.
- A bilingual UI under `/es/`.
- Photos: the design doesn't wait for them.
- The current hosting plan at Hostinger.

## Further Notes

- **Implementation mode: learning first.** The first time each piece is built (content collections, layouts, routing, config, deploy, DNS, the git workflow), the owner types it while an agent guides step by step. Only what the owner already understands is delegated. Agents working from this spec should guide, not implement autonomously.
- Every infrastructure step (first push, Pages connection, headers, branch previews and merge, DNS and nameservers, the www redirect, email) is done guided and documented outside this repo at the time it happens.
- Scope is frozen: v1 ships when this spec's checklist is met. New ideas go to a v1.1 list instead of into v1. If time runs short, the launch post is the first thing to move to v1.1.
- The brand's visual criteria are defined in a separate session before prototyping. The prototype waits for those criteria, not for photos.
- Order of work:
  1. This spec.
  2. The GitHub repo and the first push.
  3. Cloudflare Pages, with the site URL and the noindex headers.
  4. Tooling: Biome, the type check in the build, Actions, README and LICENSE.
  5. The brand's visual criteria.
  6. The UI prototype.
  7. Building the parts of this spec.
  8. The launch post.
  9. Launch: nameservers, the www redirect, email and the SEO audit on joelrdz.com.
- This spec is public, like the rest of the repo: the client isn't named, and sources outside the repo aren't referenced by path.
