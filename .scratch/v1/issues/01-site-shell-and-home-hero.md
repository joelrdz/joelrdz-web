# 01: Site shell and home hero

**What to build:** A visitor who opens the workers.dev address sees the real site instead of the scaffold. The home page opens with what the owner solves (a headline, a short supporting line and a call to get in touch through a mailto link), inside the shell every page shares: navigation, a footer with LinkedIn, GitHub and the email address, the brand typefaces, and light and dark palettes that follow the visitor's system preference. The explicit theme control is ticket 05; until then the system decides. A URL that doesn't exist shows a custom 404 page that leads back home.

The navigation links only to pages that exist; each later ticket adds its own link. The home's slots for the projects and the latest post arrive with 03 and 07, and until then the home shows no empty placeholder for them.

The home copy is written for the site, not copied from the CV, but its headline, years of experience and stack must match the CV. Its tone follows the brand criteria.

The prototype settled the visual decisions. Its code stays on the `prototype/ui` branch, with the verdict in its commit message, and is rebuilt here for production rather than merged:

- Layout: variant B, short columns.
- Typefaces: Atkinson Hyperlegible Next for text and Atkinson Hyperlegible Mono for code, self-hosted through Astro's fonts API. IBM Plex was the runner-up and doesn't ship.
- Accent: italic, not color, so no accent color has to pass contrast in both palettes.
- Palettes, from the prototype. Text and muted text pass AA on both backgrounds in both palettes; the lowest ratio is 4.81:1 (light, muted text on the code background).

```css
/* light */
--bg: #fdfdfc;
--text: #1c1b19;
--muted: #6b6963;
--line: #e6e4df;
--code-bg: #f1f0ec;

/* dark */
--bg: #1a1a1a;
--text: #ecebe7;
--muted: #9e9c96;
--line: #2f2e2b;
--code-bg: #262523;
```

**Blocked by:** None (can start immediately).

**Status:** ready-for-human

- [ ] The workers.dev home shows the headline, the supporting line and a mailto call to action instead of the scaffold.
- [ ] Every page has the navigation and a footer with LinkedIn, GitHub and the placeholder email address.
- [ ] With macOS set to dark, the site renders in the dark palette; set to light, in the light one.
- [ ] Text renders in Atkinson Hyperlegible Next, served from the site itself rather than a third-party font host.
- [ ] Every link shows a visible focus indicator when reached with Tab.
- [ ] Every page has its own title and meta description, not the scaffold's.
- [ ] A URL that doesn't exist returns the custom 404 page with a 404 status, and the page links back home.
- [ ] The headline, years of experience and stack match the CV.
