# 06: Extras: sitemap, Open Graph and Apple touch icon

**What to build:** Search engines get a sitemap and a canonical URL on every page, a shared link shows a preview image and a description, and iOS gets a proper home screen icon. One fixed Open Graph image serves every page; per-post images are out of scope. Each extra lands on its own.

Cloudflare Web Analytics isn't here. On Workers its automatic setup applies once joelrdz.com is a proxied Cloudflare zone, so it belongs to the launch.

**Blocked by:** 01

**Status:** done

- [x] The sitemap validates, and its URLs point to joelrdz.com.
- [x] Every page's canonical URL points to joelrdz.com, except the 404, which has none.
- [x] Every page carries the Open Graph tags with the fixed image and that page's description, and workers.dev serves the image. The preview itself is checked after launch.
- [x] Adding the site to the iOS home screen shows the Apple touch icon.

## Comments

- The 404 page has no canonical and no `og:url`. It's served at every missing URL, and its own path, `/404/`, is itself a 404, which is also why the sitemap leaves it out.
- `og:image` has to be an absolute URL, and it points to joelrdz.com, which serves the old host until the launch, so no preview tool can load the image before then. The tags and the image were checked on workers.dev; the share card moved to the spec's "After launch" checklist.
- A `robots.txt` points crawlers to the sitemap and allows every path, so they still see the workers.dev noindex header. A `<link rel="sitemap">` was left out: Google's documentation doesn't list it. The spec's Extras says so now.
- The favicon was still Astro's logo from the template. The spec lists "A favicon, plus an Apple touch icon for iOS" as one extra, so both now use a JR monogram in the site's type, and the ICO's link declares `sizes="32x32"` so Chrome takes the SVG.
- `og.png`, `apple-touch-icon.png` and `favicon.ico` bake in the light palette, and `og.png` the role too. Changing either means regenerating them.
