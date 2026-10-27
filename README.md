# ZikPe Journal

Original India travel, food, culture and practical guides for ZikPe. This repository contains the current complete site (snapshot October 26, 2026): 285 published stories, original image assets, category pages, fonts, SEO files and Cloudflare Workers configuration.

Live journal: https://zikpe-journal.ashwatthama710.workers.dev/

## Project layout

- `public/`: deployable static site, including all article pages and original illustrations.
- `public/blogs/<category>/<article-slug>/`: the 285 published stories, grouped by category folder (food-drink, destinations, stay, shopping, guides, travel-money, culture, upi-for-visitors). `public/blogs/<category>/` are the category listing pages.
- `public/stories/`: retained noindex preview and legacy routes only.
- `public/_redirects`: 301 redirects from the old `/stories/<slug>/` and `/category/<name>/` URLs to the new `/blogs/...` URLs.
- `public/assets/`: full-quality original artwork and site assets, unpacked as ordinary files.
- `public/source*.zip`: the downloadable source packages (site code in `source.zip`, image assets split across `source-assets-a/b/c.zip`). Regenerated from this snapshot; the actual source is also unpacked in this repository.
- `wrangler.jsonc`: Cloudflare Workers static-assets deployment configuration.

There is no separate server script in this version: Cloudflare Workers serves the static site through the configured assets directory.

## Paths and hosting (read before integrating)

- Journal pages live under `/blogs/` (home `/blogs/`, categories `/blogs/<category>/`, stories `/blogs/<category>/<slug>/`). `public/index.html` is a copy of `public/blogs/index.html` kept so the workers.dev preview root still works.
- Shared files are referenced from the SITE ROOT: `/assets/`, `/fonts/`, `/site.js`, `/home.js`, `/zikpe-theme.css`, `/blog-polish.css`. Serve `public/` so those are available at the root of the host, or rewrite the prefix in all HTML (for example `/assets/` to `/blogs/assets/` and move the folders under `public/blogs/`). Final hosting under zikpe.com has not been verified.
- Canonical, og:url, structured-data page URLs, sitemap.xml and robots.txt already use `https://zikpe.com/blogs/...`. `og:image`, `twitter:image` and structured-data image URLs still point at the workers.dev host and need repointing once assets are hosted on the final domain. `robots.txt` lists `https://zikpe.com/blogs/sitemap.xml`; confirm that path.

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
