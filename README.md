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
├── _pending_review/           # Non-site source files awaiting manual decision
├── CNAME                      # Custom domain (myboyue.com)
├── README.md
└── .gitignore
```

## License

Personal portfolio content © Boyue Du. All rights reserved unless otherwise noted.
