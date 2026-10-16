# 07: Blog and the launch post

**What to build:** A Spanish-speaking developer finds the launch post from the blog index and the home, reads it at its permanent URL, and can subscribe to the blog through an RSS feed.

The blog posts collection validates title, description, publication date and language. There is no draft flag, because only published posts enter the repo. The post is copied in from its draft, which stays outside the repo, with the drafting tool's syntax (wiki-style links, callouts) converted to standard Markdown. The post content, and its title and description wherever they are listed, carry its language, so assistive technology switches pronunciation.

Code blocks use the prototype's Shiki setup: GitHub light and dark as dual themes, with no inline default colors, over the site's code background. From the prototype:

```js
shikiConfig: {
	themes: { light: "github-light", dark: "github-dark" },
	defaultColor: false,
}
```

This ticket also turns on everything that waits for the first post: the blog index and its nav link, the home's latest-post slot, the RSS feed, and the post link on the joelrdz.com project page. If the launch post moves to v1.1, this whole ticket moves with it.

**Blocked by:** 03, and the launch post itself, which the spec's order of work writes after building the parts.

**Status:** ready-for-human

- [ ] `/blog` lists the post, and the navigation links to it.
- [ ] The post lives at `/blog/<slug>`, with no language prefix.
- [ ] The post content, and its title and description in the blog index and on the home, carry `lang="es"`.
- [ ] Code blocks follow the active palette, with no `!important` in the styles.
- [ ] A post with missing or invalid metadata fails the build.
- [ ] No wiki-style link or callout syntax is left in the published post.
- [ ] The RSS feed validates, and its URLs point to joelrdz.com.
- [ ] The joelrdz.com project page links to the post.
