# Samiun Islam — Personal Website

A personal website for Samiun Islam, centred on cybersecurity and extending into creative engineering, interactive web, 3D, VFX and motion exploration.

## Design direction
Cybernetic Minimalism: a restrained graphite palette, signal-cyan accents, editorial typography, considered whitespace and purposeful motion. The visible brand is **SAMIUN** — no invented studio or sub-brand.

## Stack
- Next.js 16 App Router, React 19 and TypeScript
- Motion for React
- Three.js interactive network study
- Custom responsive CSS design system
- Vercel deployment

## Routes
- / — Home
- /security — Cybersecurity
- /work — Project index
- /work/[slug] — Project details
- /experiments — 3D, VFX, motion and creative coding
- /notes and /notes/[slug] — Technical notes
- /about — About Samiun
- /contact — Contact

## Run locally
    npm install
    npm run dev

## Production build
    npm run build

## Content integrity
Projects are clearly labelled as studies, experiments or concepts where relevant. Security content describes areas of interest and responsible practice, not unverified certifications, client work or penetration-testing claims. Replace or extend these with Samiun's verified projects and credentials as they are confirmed.

## Security and accessibility
- Baseline response security headers are configured in next.config.ts.
- Reduced-motion preferences are respected.
- Pointer-specific cursor effects are disabled on touch-first devices.
- 3D is isolated to the hero visualization.
- No credentials, API keys or private environment variables are committed.
