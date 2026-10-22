---
title: joelrdz.com
description: "This site: static Astro on Cloudflare Workers, planned in a public spec and built in the open."
problem: People who might hire me had no single place to see my work. The domain served the hosting provider’s default page, my CV lived in a document outside any site, and my client work sits in private repositories.
role: Sole developer, from the spec to the deploy.
decisions:
  - title: Static Astro, no UI framework
    why: "Nothing on the site needs a server, so every page is built ahead of time as static HTML. There is no UI framework: anything that runs in the browser is a few lines of plain JavaScript. If a page ever needs a server, an adapter can be added for that route alone."
  - title: Cloudflare Workers with static assets
    why: The site is just files, so Workers serves them from Cloudflare’s network with no Worker script and no adapter. When I started, Cloudflare’s dashboard created Workers by default and labeled Pages as legacy, so starting on Workers avoids a migration later.
  - title: Every URL ends in a slash
    why: Astro writes each page as a folder with an index.html, and Workers serves it at the folder’s URL. Building pages as .html files would drop the slash, but Astro would then report every URL ending in .html, so canonical and sharing links built from it would point at a redirect. The dev server rejects internal links that miss the slash, so a wrong link fails in development, before it ships.
  - title: A spec before the code
    why: The first version is planned in a public spec and split into small tickets, each one shipped end to end. The scope is frozen; new ideas go to a later version.
  - title: The build is the test
    why: There is no test framework in the first version. The build type-checks the code and validates content against its schema, so a broken page or a project without a valid status never deploys. CI checks lint and format on every push.
stack:
  - Astro
  - TypeScript
  - Zod
  - Cloudflare Workers
  - Biome
  - GitHub Actions
status: in-progress
links:
  repo: https://github.com/joelrdz/joelrdz-web
  spec: https://github.com/joelrdz/joelrdz-web/blob/main/.scratch/v1/spec.md
---

A static site with a home page, a CV you can read here or download as a PDF, and this projects section. It has light and dark palettes, serves its own fonts and has a custom 404 page.

Every push to `main` deploys to Cloudflare. The build type-checks the code and validates every project against a schema first, so an error stops the deploy. GitHub Actions checks lint and format on every push.
