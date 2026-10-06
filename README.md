# joelrdz.com

[![CI](https://github.com/joelrdz/joelrdz-web/actions/workflows/ci.yml/badge.svg)](https://github.com/joelrdz/joelrdz-web/actions/workflows/ci.yml)

Personal site of Joel Rodríguez: CV, portfolio and technical blog.

- [Astro](https://astro.build) with static output and no UI framework
- TypeScript (strict)
- [Biome](https://biomejs.dev) for lint and format, checked in CI on every push
- [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/) static assets, deployed by Workers Builds on every push to `main`

## Run it locally

Requires Node.js 22.12+ and pnpm (its version is pinned in `package.json`).

```sh
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # type-checks with astro check, then builds to dist/
pnpm biome check
```

## How it was planned

The v1 spec lives in [`.scratch/v1/spec.md`](.scratch/v1/spec.md).

## License

The code is under the [MIT License](LICENSE). The content (blog posts, the CV and images) is © Joel Rodríguez, all rights reserved.
