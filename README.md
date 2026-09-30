# ZikPe Journal

Original India travel, food, culture and practical guides for ZikPe. This repository contains the current complete site: 160 published stories, original image assets, category pages, fonts, SEO files and Cloudflare Workers configuration.

Live journal: https://zikpe-journal.ashwatthama710.workers.dev/

## Project layout

- `public/`: deployable static site, including all article pages and original illustrations.
- `public/stories/`: published stories plus retained noindex preview and legacy routes. The total route count is higher than the 160 listed stories.
- `public/assets/`: full-quality original artwork and site assets, unpacked as ordinary files.
- `public/category/`: category listing pages.
- `public/source*.zip`: the existing downloadable source packages served by the live journal. They are retained for download-page compatibility; the actual source is also unpacked in this repository.
- `wrangler.jsonc`: Cloudflare Workers static-assets deployment configuration.

There is no separate server script in this version: Cloudflare Workers serves the static site through the configured assets directory.

## Run locally

Requires Node.js and npm.

```sh
npm ci
npm run dev
```

## Deploy

```sh
npm run deploy
```

Authenticate Wrangler with the intended Cloudflare account first. Credentials are not stored in this repository. The configured Worker is `zikpe-journal`; production `zikpe.com` is not changed by this project.

## Editing

Edit pages and assets under `public/`. When adding a story, also update its category listing, home listing, related links and sitemap. Keep titles, descriptions, canonicals and Article structured data consistent. Inspect the actual desktop and mobile layout before deployment. Existing source download ZIPs are snapshots; regenerate them when publishing updated downloadable packages.

## Content

Article text and artwork are original ZikPe Journal material. No third-party publisher copy or photography is included as article content. No open-source license or permission to redistribute the content is granted by this repository.
