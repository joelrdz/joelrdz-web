# 03: Projects, first entry: joelrdz.com

**What to build:** A hiring manager opens `/projects`, sees every project on show, and opens the joelrdz.com project to find the fixed structure every project page follows: problem, what was built and the owner's role, key decisions, stack and status.

This first entry carries the whole path: a projects content collection whose schema backs that structure, the project layout, the index and the home's proof slot. The schema has a required status (in progress or delivered), the role, the stack as a list, key decisions with an optional reference to a blog post each, and links to the repo, the spec and the live site where they exist. Exact field names are settled here.

The page is a short English version of the build decisions, for a reviewer who doesn't read Spanish, and links to the public repo and the spec. The link to the launch post arrives with 07.

**Blocked by:** 01

**Status:** done

- [x] `/projects` lists the project, and the navigation links to it.
- [x] `/projects/joelrdz-com` shows problem, what was built and the role, key decisions, stack and status, in that order.
- [x] The page links to the public repo and to the spec.
- [x] The home shows the project as proof right after the claim.
- [x] A project entry with no status, or a status other than in progress or delivered, fails the build.
- [x] The page describes only what is delivered today.

## Comments

- The key decisions' optional reference to a blog post moves to 07, which explains why and carries the field.
- The project layout is `src/pages/projects/[slug].astro` itself rather than a file in `src/layouts/`: with a single dynamic route, a separate layout would only pass the entry through.
