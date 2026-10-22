# Coding standards

The conventions that Biome and `astro check` don't enforce.

## Imports

- Imports from `src/` use the `@/` alias, also between files in the same folder. The exception is a folder that groups a piece with its private parts, files that nothing outside the folder imports: inside it, those parts are imported with `./`.

## CSS

- **Scope:** a style starts scoped in its component or page. When a second page repeats it, it moves to the global block in `src/layouts/Base.astro`.
- **Markdown HTML:** what Markdown renders carries no scope attribute, so a scoped style reaches it through `:global()`, as in `.prose :global(hr)`. The global block doesn't need it.
- **Colors:** only through the tokens on `:root` in `Base.astro`. A new color is a new token that holds both palettes in one value, `light-dark(light, dark)`, and `color-scheme` picks which one applies. Only the rules inside `@media screen` let it pick dark, so print stays light.
- **Spacing and borders:** one side takes the physical property (`margin-left`, `padding-bottom`, `border-top`); one axis takes the logical shorthand (`padding-block`, `padding-inline`); all four sides, or several with different values, take the `margin` or `padding` shorthand (`margin: 3rem 0 1rem`).
- **Property order:** layout first (`display`, flex and grid, `gap`), then the box (size, `margin`, `padding`, `border`), then the rest (color, background, type).
