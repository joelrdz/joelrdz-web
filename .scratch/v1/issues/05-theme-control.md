# 05: Theme control

**What to build:** A visitor can choose Light, Dark or System from any page, sees all three options and which one is active, and the choice survives navigation and later visits. On System, the site follows the OS appearance and switches live when it changes, without a reload. A visitor who chose Dark never sees a light flash on reload or navigation. In private mode or with storage blocked, the control still switches the theme for the current page, the default follows the system, and nothing throws.

The control is a native radio group, so keyboard and screen reader support come from the browser. The spec's Theming section fixes how it's built: radios and legend hidden with the visually-hidden technique, focus drawn on the visible label, no custom ARIA, and a small inline script in the head that applies the theme before the first paint.

**Blocked by:** 01

**Status:** ready-for-human

- [ ] The three options are reachable with Tab and switchable with the arrow keys, and each shows a visible focus indicator.
- [ ] VoiceOver announces the group, the option and its selected state.
- [ ] With Dark chosen, a reload renders dark from the first paint.
- [ ] On System, changing the macOS appearance switches the site live.
- [ ] Light or Dark persists across pages and a new visit; choosing System clears it.
- [ ] With storage unavailable, the page renders, the console shows no error, and the theme follows the system.
