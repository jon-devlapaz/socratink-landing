# socratink-landing Agent Guide

## Purpose
Static marketing landing page for Socratink. This is a Vite/React app deployed to Vercel from `main`.

## Work Here
- UI source: `src/`
- Static assets: `public/`
- Entry HTML: `index.html`
- Product notes: `PRODUCT.md`, `landing-enhancements.md`

## Commands
- Install: `npm install`
- Develop: `npm run dev`
- Check: `npm run lint`
- Build: `npm run build`
- Preview build: `npm run preview`

## Skip By Default
- `node_modules/`
- `dist/`
- `.vercel/`
- `.playwright-cli/`
- `.playwright-mcp/`
- `.qa-runs/`
- `plans/`
- `reviews/`

## Change Rules
- Keep the landing page static unless asked to add backend behavior.
- Do not change Vercel deployment settings without explicit confirmation.
- Before edits, run `git status`.
- After UI edits, run `npm run lint` and `npm run build` when practical.
