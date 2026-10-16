# Ridham Sonani · Portfolio

**Software engineering · Full-stack development · Backend systems · Cloud & AI**

My personal portfolio brings together the projects I have built, the engineering decisions behind them, and my professional experience at ASU’s AI Cloud Innovation Center, Escrow Infotech, and Amazon.

### [Explore the live portfolio ↗](https://ridhamsonani-148-ridham-sonani-port.vercel.app/)

[LinkedIn](https://www.linkedin.com/in/ridham-sonani) · [Email](mailto:rsonani@asu.edu) · [Software engineering résumé](dist/assets/Ridham-Sonani-Software-Engineer.pdf) · [Cloud developer résumé](dist/assets/Ridham-Sonani-Cloud-Developer.pdf)

## About the website

A responsive, lightweight portfolio built with **HTML, CSS, and vanilla JavaScript**, deployed on **Vercel**. It runs entirely in the browser and needs no build step, package installation, backend, or environment variables.

- **Seven detailed case studies** covering problem statements, my contributions, architecture, trade-offs, implementation challenges, testing, and outcomes.
- **Professional experience** with responsibilities, technologies, and measurable results.
- **Education and AWS certifications**, including verification links and credential details.
- **Responsive navigation and accessible interactions**, with keyboard support and reduced-motion preferences respected.
- **Project resources**, including official ASU stories, source repositories, original architecture diagrams, and application screenshots where available.

## Featured projects

Five projects were developed through **Arizona State University’s AI Cloud Innovation Center**, in collaboration with partner organizations and AWS/ASU mentors.

| Project | Engineering focus | Source code |
| --- | --- | --- |
| Library of Congress · Cultural Heritage Chatbot | Historical research, GraphRAG, ingestion pipelines, and conversational context | [GitHub](https://github.com/ASUCICREPO/Loc_Project) |
| America’s Blood Centers AI Chatbot | Bilingual chat, streaming responses, retrieval, administration, and automated synchronization | [GitHub](https://github.com/ASUCICREPO/Blood_Bank_Helper_Bot/) |
| Catholic Charities AI Assistant | Service discovery, source-backed answers, Amazon Q Business, and full-stack integration | [GitHub](https://github.com/ASUCICREPO/Catholic-Charity-Chatbot) |
| Open Earth Forest Classification | Geospatial processing, Google Earth Engine, land classification, and downloadable results | [GitHub](https://github.com/ASUCICREPO/open-earth) |
| GeoReference-CSU · Talk to Map | Historical map OCR, metadata extraction, geocoding, and GeoJSON delivery | [GitHub](https://github.com/ASUCICREPO/GeoReference-CSU) |

The portfolio also includes two **coursework projects**:

- **Compiler Construction Projects** — C++ parsing, semantic analysis, grammar transformations, and intermediate representation.
- **Tourist Agencies Management System** — PostgreSQL modeling, SQL business rules, reporting, and React/Node.js integration.

Each case study separates my individual contributions from the overall team implementation and distinguishes delivered capabilities from future directions. Coursework repositories will be linked when published.

## Run locally

With Git and Python installed:

```sh
git clone https://github.com/ridhamsonani-148/ridham-sonani-portfolio.git
cd ridham-sonani-portfolio
python -m http.server 4173 --directory dist
```

Open [http://localhost:4173](http://localhost:4173). Any static HTTP server can also serve the `dist` directory.

## Deployment

The included [`vercel.json`](vercel.json) configures Vercel to serve the website directly:

| Setting | Value |
| --- | --- |
| Framework preset | Other |
| Root directory | Repository root |
| Output directory | `dist` |
| Install and build commands | None |
| Environment variables | None |

To deploy your own copy, import the GitHub repository into Vercel and select **Deploy**. With the GitHub integration enabled, pushes to the configured production branch trigger new deployments.

## Project structure

```text
dist/
├── index.html             Portfolio overview and contact information
├── project.html           Case-study page shell
├── projects.js            Project summaries and technology stacks
├── project-details.js     Contributions, architecture, decisions, and resources
├── case-study.js          Case-study rendering and section navigation
├── app.js                 Project cards and filters
├── site.js                Mobile navigation, reading progress, and scroll reveals
├── artwork.js             Conceptual project illustrations
├── styles.css             Base layout and typography
├── refinement.css         Portfolio and case-study styling
└── assets/                Portrait, screenshots, diagrams, résumés, and favicon
vercel.json                Static deployment configuration
```

## Updating the portfolio

| Content | File |
| --- | --- |
| Introduction, experience, education, certifications, and contact | [`dist/index.html`](dist/index.html) |
| Project summaries and technologies | [`dist/projects.js`](dist/projects.js) |
| Detailed case studies and repository links | [`dist/project-details.js`](dist/project-details.js) |
| Layout and typography | [`dist/styles.css`](dist/styles.css), [`dist/refinement.css`](dist/refinement.css) |
| Downloadable résumés and images | [`dist/assets/`](dist/assets/) |

Case-study URLs use `project.html?id=<project-id>`. Keep asset filenames consistent or update their corresponding links when replacing files.

## Credits

The CIC projects are collaborative work with partner organizations and AWS/ASU mentors. My portrait and the Catholic Charities screenshots are sourced from the official ASU CIC project spotlights. Original architecture diagrams come from the public Catholic Charities and Open Earth project repositories; other project artwork is labelled as conceptual illustration.

Typography uses DM Sans and Manrope from Google Fonts, with system-font fallbacks. Third-party assets and project materials remain subject to their respective owners’ terms.
