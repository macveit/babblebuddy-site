# Parkettjäger Static Site Clone

This folder is a static HTML/CSS copy of the publicly visible website at `https://www.parkettjaeger.de/`, fetched and rebuilt on 2026-06-29.

## What Was Copied

- Homepage one-page structure: header navigation, hero slider, "Über uns", product/service cards, gallery slider, "Aktuelles", email request section, contact/footer data.
- Public detail pages linked from the homepage:
  - `parkett-landhausdielen.html`
  - `designboeden.html`
  - `laminat-kork.html`
  - `parkettrenovierung.html`
  - `innentueren.html`
  - `montageservice.html`
  - `glastueren-fuer-jeden-raum.html`
  - `so-schoen.html`
  - `mustergueltig.html`
  - `raumklima.html`
  - `aktuelles-schnaeppchen.html`
  - `parkett-und-dielenboeden.html`
- Live privacy page copied from `?q=privacy-policy` into `datenschutz.html`.
- Visible public images from the homepage and linked detail pages.
- Original visible contact data and opening hours.

## What Was Changed

- Removed Drupal, admin, AJAX, tracking, AddThis, Google Maps, Google API, external Google Fonts, Colorbox, Flexslider, Superfish, and other CMS/module script dependencies.
- Recreated the layout with plain HTML, one local CSS file, and one tiny vanilla JavaScript slideshow.
- Replaced CMS form posting with a static `mailto:info@parkettjaeger.de` form action. A static host cannot process Drupal webforms without a separate backend or form service.
- Replaced CMS route links with static file links.
- Added `impressum.html` because the requested output requires it, but no visible imprint page was found on the live site and `?q=impressum` returned 404.
- Footer now links to both `datenschutz.html` and `impressum.html`.

## URL / Redirect Mapping

Configure these redirects on the static host if old CMS URLs should continue to work:

- `/` -> `/index.html`
- `/?q=privacy-policy` -> `/datenschutz.html`
- `/node/123` -> `/parkett-landhausdielen.html`
- `/node/122` -> `/designboeden.html`
- `/node/125` -> `/laminat-kork.html`
- `/node/121` -> `/parkettrenovierung.html`
- `/node/83` -> `/innentueren.html`
- `/node/94` -> `/montageservice.html`
- `/node/104` -> `/glastueren-fuer-jeden-raum.html`
- `/node/103` -> `/so-schoen.html`
- `/node/82` -> `/mustergueltig.html`
- `/node/41` -> `/raumklima.html`
- `/node/38` -> `/aktuelles-schnaeppchen.html`
- `/node/37` -> `/parkett-und-dielenboeden.html`

Skipped legacy file URLs: `/file/16`, `/file/17`, `/file/18`. They were image wrapper pages in Drupal; the referenced images are included locally.

## Assets

Images are in `assets/img/`:

- `hero-grey-driftwood.jpg`
- `hero-eiche-pure.jpg`
- `hero-nuss-fineline.jpg`
- `hero-eiche-astig.jpg`
- `card-parkett.jpg`
- `card-designboden.jpg`
- `card-laminat.jpg`
- `card-renovierung.jpg`
- `card-innentueren.jpg`
- `card-montage.jpg`
- `gallery-glastuer.jpg`
- `gallery-so-schoen.jpg`
- `gallery-muster.jpg`
- `news-raumklima.jpg`
- `news-schnaeppchen.jpg`
- `news-dielen.jpg`
- `contact-bg.jpg`
- `post-parkett.jpg`
- `post-designboden.jpg`
- `post-laminat.jpg`
- `post-renovierung.jpg`
- `post-innentueren.jpg`
- `post-montage.jpg`
- `post-glastuer.jpg`
- `post-so-schoen.jpg`
- `post-muster.jpg`
- `post-dielen.jpg`
- `favicon.ico`

Other assets:

- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/fonts/zekton-rg.ttf`

## Manual / Legal Review Required

- `impressum.html` is incomplete because the live site did not expose an imprint page. A lawyer or site owner should provide the legally required imprint text before publication.
- The privacy page was copied verbatim from the live website, but it references YouTube, Matomo, cookies, Google Web Fonts, and a Matomo iframe placeholder. The static clone removes those external dependencies, so the privacy text should be updated to match the new technical reality.
- The static `mailto:` form changes how inquiries are sent and stored; update the privacy/contact wording if a real form backend is later added.
- The bundled `assets/fonts/zekton-rg.ttf` reports that it is not freely distributable. Confirm the original site owner has rights to ship it in this static package, or remove/replace it.
- Opening hours include the live text about Christmas holidays and reopening on 7 January. Confirm this is still desired before going live.
- Image copyright/licensing should be confirmed with the site owner.

## Deployment

Upload the complete `parkettjaeger-static/` folder contents to any static web host. No database, CMS, build step, PHP, or Node.js runtime is required.

For local review, open `index.html` directly in a browser. For production, configure the redirects listed above so old CMS links continue to resolve.
