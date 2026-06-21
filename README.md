# Boyue Du — Personal Website

**Live site:** [myboyue.com](https://myboyue.com)

A static personal portfolio and academic website hosted on **GitHub Pages** (`boyuedu.github.io`).

## Purpose

This site showcases my education, research interests, professional experience, academic projects, and creative work (photography, art, music, and AIGC).

## Main Sections

| Section | Description |
|---------|-------------|
| [About](about.html) | Background and story |
| [Education](education.html) | Degrees, research fields, awards, coursework |
| [Experience](experience.html) | Business, academic, and conference experience |
| [Projects](projects.html) | Academic and engineering projects |
| [Gallery](gallery.html) | Photography, art, AIGC, cooking, and music |
| [Contact](contact.html) | Message form and social links |

## Tech Stack

- HTML5, CSS3, JavaScript (vanilla)
- [GitHub Pages](https://pages.github.com/) (static hosting, custom domain via `CNAME`)
- Third-party services: [Formspree](https://formspree.io/) (contact form), Google Fonts, Leaflet / OpenStreetMap (travel map), Google Drive embeds (gallery videos)

## Project Structure

```
/
├── index.html                 # Home (PCB navigation)
├── about.html
├── education.html
├── experience.html
├── projects.html
├── gallery.html
├── contact.html
├── pages/
│   ├── travel/                # U.S. state landscape sub-galleries
│   ├── gallery/               # Gallery sub-pages and interactive map
│   └── education/             # Course listings
├── assets/
│   ├── css/main.css           # Shared styles
│   ├── js/main.js             # Shared scripts
│   ├── img/                   # Images (icons, gallery, projects, …)
│   └── docs/                  # Resume PDF
├── _pending_review/           # Non-site source files awaiting manual decision
├── CNAME                      # Custom domain (myboyue.com)
├── README.md
└── .gitignore
```

## Local Preview

From the repository root:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Deployment

GitHub Pages serves this site from the **root** of the default branch. No build step is required. Push to `main` (or your configured Pages branch) to publish.

## Maintenance Notes

- **Images:** Large JPG files live under `assets/img/`. Consider compressing photos before committing new ones (target ~200–500 KB for web).
- **Contact form:** Submissions go to Formspree (`contact.html`). Enable spam filtering in the Formspree dashboard if needed.
- **Resume:** `assets/docs/resume_boyue.pdf` — update when your CV changes; linked from Education.
- **Pending files:** Check `_pending_review/` before deleting `.docx` source files.

## Privacy & Security

- **Do not commit secrets** — no API keys, tokens, `.env` files, or private keys belong in this repository.
- The contact form uses a public Formspree endpoint; protect against spam via Formspree settings and the built-in honeypot field.
- Review Google Drive sharing permissions for embedded gallery videos.

## License

Personal portfolio content © Boyue Du. All rights reserved unless otherwise noted.
