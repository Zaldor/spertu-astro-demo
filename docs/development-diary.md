# Spertu Astro Demo Development Diary

## 2026-03-08

### Session Summary
- Scaffolded a new Astro project in `spertu-astro-demo`
- Replaced starter content with a polished agency-style demo homepage
- Added Astro content collections for homepage and case studies
- Added JSON data sources for team members and global contact settings
- Created `spertu.config.ts` to define the editable contract for Spertu CMS
- Added supporting documentation for design and project scope

### Implementation Decisions
- Used Astro content collections for page and collection content because they provide a strong typed structure with predictable file paths
- Kept team and settings as JSON to demonstrate that Spertu can manage non-Markdown structured data as well
- Used a single layout with global design tokens to keep the demo elegant and lightweight

### Challenges
- The Astro starter was interactive despite CLI arguments, but it completed successfully
- GitHub CLI does not appear to be available locally, so GitHub publication may need standard Git remote setup instead of `gh`

### Technical Debt / Follow-up
- Add richer case study listing/filtering if the demo evolves into a broader starter
- Consider adding Cloudflare Pages deployment notes once the repo destination is confirmed