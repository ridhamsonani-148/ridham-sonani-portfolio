# Ridham Sonani — Portfolio

A personal portfolio showcasing my software engineering, full-stack, backend, cloud, and AI work. Built with HTML, CSS, and vanilla JavaScript, with no framework build step or runtime dependencies.

## What’s inside

- Seven dedicated project case studies: five collaborative projects from ASU’s AI Cloud Innovation Center and two coursework projects.
- Architecture flows, component responsibilities, engineering decisions, challenges, testing, and project outcomes.
- Links to the official ASU project stories and all five CIC project repositories.
- Experience at ASU’s AI Cloud Innovation Center, Escrow Infotech, and Amazon.
- Education, AWS certifications with verification details, résumé downloads, and contact links.
- Responsive navigation, scroll reveals that respect reduced-motion preferences, and a light visual theme.

## Run locally

Clone this repository, then serve the `dist` directory using any static HTTP server. With Python installed:

```sh
python -m http.server 4173 --directory dist
```

Open [localhost:4173](http://localhost:4173).

No dependency installation or build command is required. A local server is preferable to opening HTML files directly from the filesystem.

## Deploy on Vercel

1. Sign in to Vercel and import this GitHub repository.
2. Keep the repository root as the project root directory.
3. The included `vercel.json` configures the Framework Preset as **Other**, skips install/build commands, and publishes **dist**.
4. Deploy. No environment variables are required.

Connect the production branch, normally `main`, for automatic deployments after future pushes. A custom domain can be configured in the Vercel project’s Domains settings.

## Project structure

```text
dist/
  index.html             Portfolio overview
  project.html           Case-study page shell
  projects.js            Core project summaries and technology stacks
  project-details.js     Detailed contributions, architecture, and resources
  case-study.js          Case-study rendering and navigation
  app.js                 Overview cards and project filters
  site.js                Mobile navigation, scroll progress, and reveals
  artwork.js             Conceptual project illustrations
  styles.css             Base layout and typography
  refinement.css         Portfolio and case-study styling
  assets/                Portrait, screenshots, diagrams, résumés, and favicon
vercel.json              Static deployment configuration
```

## Update the content

- Edit `dist/index.html` for experience, education, certifications, interests, and contact information.
- Edit `dist/projects.js` and `dist/project-details.js` for case studies and repository links. Coursework repositories can be added when published.
- Replace the PDF files in `dist/assets/` to update downloadable résumés, keeping filenames or updating the corresponding links.
- Update `dist/styles.css` and `dist/refinement.css` for layout and styling changes.

Case-study URLs use `project.html?id=<project-id>`. The site uses relative asset paths and requires no backend, database, secret keys, or contact-form service.

## Credits and source context

The CIC projects were collaborative prototypes developed with partner organizations and AWS/ASU mentors. Each case study distinguishes my contributions from the overall project and separates delivered capabilities from future directions.

My portrait and the Catholic Charities application screenshots are sourced from my official ASU CIC project spotlights. Original architecture diagrams are from the public Catholic Charities and Open Earth project repositories. Other project artwork is labelled as conceptual illustration.

Google Fonts provides DM Sans and Manrope; system font fallbacks are included. Third-party images, diagrams, fonts, and project materials remain subject to their respective owners’ terms.

## Contact

[Email](mailto:rsonani@asu.edu) · [LinkedIn](https://www.linkedin.com/in/ridham-sonani)
