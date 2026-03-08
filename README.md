# Spertu Astro Demo

A polished Astro demo site for a modern agency-style business, intentionally structured to be **compatible with Spertu CMS**.

## What this demo includes

- Editable homepage content stored in `src/content/pages/home.md`
- Case studies collection in `src/content/case-studies/`
- Team data in `src/data/team.json`
- Shared contact/site settings in `src/data/site-settings.json`
- A root-level `spertu.config.ts` that acts as the Spertu editing contract

This keeps the **design system and component structure developer-controlled** while exposing only safe, structured content for editors.

## Project structure

```text
/
├── docs/
├── public/
├── src/
│   ├── content/
│   │   ├── case-studies/
│   │   └── pages/
│   ├── data/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── spertu.config.ts
└── package.json
```

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start local dev server at `localhost:4321`  |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview the production build locally        |

## GitHub publishing

1. Create an empty GitHub repository.
2. Add your remote:

```powershell
git remote add origin https://github.com/<your-account>/<repo-name>.git
```

3. Push the project:

```powershell
git branch -M main
git push -u origin main
```

## Spertu compatibility notes

- Content is stored in predictable, explicit file paths.
- Editable areas are described in `spertu.config.ts`.
- Layouts and components remain non-editable by default.
- This demo is designed as a strong baseline for future Cloudflare Pages + Git publishing workflows.
