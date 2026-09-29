# Spandan Website

The official website for **Spandan**, a browser extension for Chromium-based browsers that manages background music:

> **Background music that knows when to be quiet.**

Spandan pauses your YouTube music tab when another browser tab starts playing audio. When the browser is quiet again, it resumes the music from the same position.

## Pages

| Route      | Purpose             |
| ---------- | ------------------- |
| `/`        | Homepage            |
| `/about`   | About Spandan       |
| `/privacy` | Privacy Policy      |
| `/contact` | Contact information |

## Configuration

Site-wide values live in [`src/siteConfig.ts`](src/siteConfig.ts):

- `CHROME_WEB_STORE_URL`: the Chrome Web Store listing. While it is empty, every "Get Spandan" button shows "Coming soon" and doesn't link anywhere.
- `LEGAL_LAST_UPDATED`: the date shown on the Privacy Policy. Update it whenever the policy changes.
- `CONTACT_EMAIL`: the support address.

## Design

- Dark-first theme, with the palette taken from the Spandan icon: near-black background, slate surfaces, and a cyan (`#22D3EE`) to indigo (`#818CF8`) accent.
- The theme tokens are CSS variables in [`src/index.css`](src/index.css).
- The product visuals (popup, settings page, browser tabs) are drawn in HTML/CSS after the extension's own UI. They live in [`src/components/ExtensionVisuals.tsx`](src/components/ExtensionVisuals.tsx).

## Tech stack

React, TypeScript, Vite, React Router and plain CSS. No analytics, no tracking scripts.

## Development

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Deployment

The site is set up for Vercel ([`vercel.json`](vercel.json) rewrites every route to the SPA).

## Contact

[tanmaychavan13@gmail.com](mailto:tanmaychavan13@gmail.com)
