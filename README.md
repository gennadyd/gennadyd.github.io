# gennadyd.github.io

> Personal DevOps portfolio site — terminal window aesthetic, built with React + Vite, deployed to GitHub Pages via CI/CD.

[![Deploy](https://github.com/gennadyd/gennadyd.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/gennadyd/gennadyd.github.io/actions/workflows/deploy.yml)
[![Live](https://img.shields.io/badge/live-gennadyd.github.io-4ade80?style=flat&logo=github)](https://gennadyd.github.io)

---

## Preview

```
┌─────────────────────────────────────────────────────────────┐
│ ● ● ●  gennady@portfolio: ~   LinkedIn  GitHub  Email  WA  │
├─────────────────────────────────────────────────────────────┤
│  Gennady Davidov                                            │
│  Senior DevOps / Platform Engineer                          │
│  Kubernetes • GitOps • CI/CD • Automation • Observability   │
│                                                             │
│  ABOUT  ─────────────────────────────────────     [-]       │
│  SKILLS ─────────────────────────────────────     [-]       │
│  EXPERIENCE ─────────────────────────────────     [+]       │
│  BLOG   ─────────────────────────────────────     [+]       │
└─────────────────────────────────────────────────────────────┘
```

## Features

- Terminal window UI (macOS-style title bar with traffic lights)
- Collapsible sections — About & Skills open by default
- Contact links (LinkedIn, GitHub, Email, WhatsApp) in the title bar
- `↓ PDF` button — prints with all sections expanded, dark background removed
- Google Analytics GA4
- SEO meta tags (OpenGraph, Twitter card)
- Fully responsive

## Stack

| Layer | Tech |
|-------|------|
| Framework | React 18 + Vite 5 |
| Styling | Inline styles (no CSS framework) |
| CI/CD | GitHub Actions |
| Hosting | GitHub Pages |
| Node | 20 |

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build    # outputs to ./dist
npm run preview  # preview the production build
```

## Deploy

Push to `main` → GitHub Actions builds and deploys automatically to [gennadyd.github.io](https://gennadyd.github.io).

```
main push → build → upload artifact → deploy to GitHub Pages
```

## Structure

```
├── src/
│   └── App.jsx          # main portfolio component
├── index.html           # entry point with GA4 + meta tags
├── vite.config.js
├── .github/
│   └── workflows/
│       └── deploy.yml   # CI/CD pipeline
└── package.json
```

## License

MIT
