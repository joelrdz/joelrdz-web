# 05: Theme control

**What to build:** A visitor can choose Light, Dark or System from any page, sees all three options and which one is active, and the choice survives navigation and later visits. On System, the site follows the OS appearance and switches live when it changes, without a reload. A visitor who chose Dark never sees a light flash on reload or navigation. In private mode or with storage blocked, the control still switches the theme for the current page, the default follows the system, and nothing throws.

The control is a native radio group, so keyboard and screen reader support come from the browser. The spec's Theming section fixes how it's built: radios and legend hidden with the visually-hidden technique, focus drawn on the visible label, no custom ARIA, and a small inline script in the head that applies the theme before the first paint.

**Blocked by:** 01

**Status:** done

- [x] The three options are reachable with Tab and switchable with the arrow keys, and each shows a visible focus indicator.
- [x] VoiceOver announces the group, the option and its selected state.
- [x] With Dark chosen, a reload renders dark from the first paint.
- [x] On System, changing the macOS appearance switches the site live.
- [x] Light or Dark persists across pages and a new visit; choosing System clears it.
- [x] With storage unavailable, the page renders, the console shows no error, and the theme follows the system.

## Comments

- Since 02 the dark palette only applies on screen (`@media screen and (prefers-color-scheme: dark)`), so the CV prints light whatever the theme. The `:root[data-theme="dark"]` rule has to go inside `@media screen` too, or choosing Dark makes the printed CV light text on white paper.
- Going Back, the browser restores the radio that was checked when the visitor left the page, and a page from the back/forward cache keeps the theme it had. No criterion covered it; the review found it, both scripts now run again on `pageshow`, and Back from another page was checked on workers.dev.
- `light-dark()` sets a browser floor (Safari 17.5, Chrome 123, Firefox 120): an older browser loses the token colors and shows the browser defaults. That is accepted for this site's audience. A fallback would need an `@supports` block, because a custom property isn't validated, so a plain value declared before it never takes over.
