# 06: Extras: sitemap, Open Graph and Apple touch icon

**What to build:** Search engines get a sitemap and a canonical URL on every page, a shared link shows a preview image and a description, and iOS gets a proper home screen icon. One fixed Open Graph image serves every page; per-post images are out of scope. Each extra lands on its own.

Cloudflare Web Analytics isn't here. On Workers its automatic setup applies once joelrdz.com is a proxied Cloudflare zone, so it belongs to the launch.

**Blocked by:** 01

**Status:** ready-for-human

- [ ] The sitemap validates, and its URLs point to joelrdz.com.
- [ ] Every page's canonical URL points to joelrdz.com.
- [ ] An Open Graph preview of any page shows the fixed image and that page's description.
- [ ] Adding the site to the iOS home screen shows the Apple touch icon.
