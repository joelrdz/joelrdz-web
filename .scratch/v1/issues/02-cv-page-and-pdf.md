# 02: CV page and PDF

**What to build:** A recruiter reaches the CV in one click from any page, reads it at `/cv` and downloads it as a PDF from the same page. The CV is copied in from its master, which stays outside the repo, with the public email address in place of the private one. Printing `/cv` gives a light, clean page whatever the active theme, and that print is the PDF: produced by hand from the browser and committed as a static asset, not generated in the build.

**Blocked by:** 01

**Status:** ready-for-human

- [ ] `/cv` renders the CV inside the site shell, and the navigation links to it from every page.
- [ ] The page links to a downloadable PDF.
- [ ] With the site in the dark palette, the print preview of `/cv` is light.
- [ ] The PDF says the same as the page: same sections, same dates, same email address.
- [ ] The page and the PDF show the public placeholder address, never the private one.
