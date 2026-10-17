# Portfolio upgrade

- [x] Source audit: clean main baseline; index.html is Vite entry.
- [x] Live comparison: RESA wording was older than local at audit time.
- [x] Batch 1: Skills route, RESA zero tags, content organization.
- [x] Batch 2: writing cleanup, repetition cleanup, navigation and activity organization.
- [x] Batch 3: interactive CSS 3D Skills Lab, evidence links, and expandable project notes.
- [x] Batch 4: security headers, CSP hash check, lazy images, reduced-motion CSS, keyboard controls, settings persistence, browser QA.
- [x] Batch 5: commit, push, deployment verification.

SABA changed to five years per latest instruction (previously six). Eight Niya photos exist; Chatbots Decoded photo is missing. No replacement fabricated.

Preserve 12 projects, photos, contact draft flow, guide, voice preview, loading, settings, companion and Research Lab.

QA evidence: Vite build and ESLint pass; browser checks covered all eight tabs, Skills Lab selection/links, gallery lightbox, chatbot greeting/name response, settings persistence and combined accessibility modes; no browser console errors were recorded. `npm audit fix` updated compatible packages and removed most findings. A fresh audit still reports seven high/moderate dev-toolchain findings, all through legacy Tailwind 3/PostCSS dependencies; `npm audit fix --force` requires a Tailwind 4 breaking migration and was not applied.

Deployment evidence: commit `7458dba` is on `origin/main`; `https://www.kshabbur.site/` returned HTTP 200 and served the new title, Skills tab markup, CSP header, RESA wording, and five-year SABA entry after the push.
