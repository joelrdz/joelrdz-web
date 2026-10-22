# 04: Client project: coffee ordering portal

**What to build:** A hiring manager understands the client work without the client being named: an internal ordering portal for a multi-branch coffee company, shown through the same structure as every project. It describes only features that are delivered, and states its status honestly: in progress, unless it is delivered by launch.

Instead of screenshots, a diagram of the data model and the user roles lets a technical reviewer judge the engineering. It stays legible in both palettes instead of turning into a bright box on the dark page.

With this second entry, the projects index and the home look complete.

**Blocked by:** 03

**Status:** ready-for-human

- [ ] `/projects` and the home list both projects.
- [ ] The page names neither the client nor its brands, and shows no screenshots.
- [ ] The diagram shows the data model and the user roles.
- [ ] In both palettes, the diagram's text passes 4.5:1 and the lines that carry meaning pass 3:1.
- [ ] Every feature on the page is delivered today.
- [ ] The status reads in progress unless the portal is delivered.

## Comments

- `links` is a required object in the projects schema. A project with no public links has to write `links: {}`, and the page would render an empty links paragraph with its margin. Make the field optional, or skip the paragraph when there are no links.
- The home and the projects index each call `getCollection("projects")` with no sort, so the order is whatever the loader returns. With two projects, decide the order once, in one place.
