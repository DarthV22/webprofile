# Vedarth Harikrishnan — Portfolio

A static personal portfolio built with vanilla HTML, CSS and JavaScript. It uses four focused pages: Home, Projects, Education and Experience. Education includes studies, skills, awards and qualifications; Experience contains employment and leadership roles. No dependencies, build tools or installation are required.

## Preview

Open `portfolio/index.html` in a browser. All page, stylesheet, script and resume links use relative paths.

Alternatively, from this directory run `python -m http.server 8000 --directory portfolio` and open `http://localhost:8000`.

## Project layout

```text
portfolio/
  index.html
  projects.html
  education.html
  experience.html
  content.md
  css/style.css
  js/main.js
  assets/
    cv/
      Vedarth_CV7.pdf
      cvlatex.txt
```

`portfolio/content.md` is the single source of approved portfolio copy. Update the static HTML when changing this file; the website does not fetch or render Markdown at runtime. Preserve supplied profile identifiers in that file, but add website links only when their full URLs are known.

The single canonical CV folder is `portfolio/assets/cv/`, containing both `Vedarth_CV7.pdf` and `cvlatex.txt`. Only `portfolio/` is the website's deployment directory.

## Deploy

Repository: [DarthV22/webprofile](https://github.com/DarthV22/webprofile).

Live website: [darthv22.github.io/webprofile](https://darthv22.github.io/webprofile/).

GitHub Pages is configured to deploy through the included `Deploy portfolio to GitHub Pages` workflow. Every push to `main` automatically publishes changes; the workflow can also be run manually from the repository's Actions tab. The workflow uploads only `portfolio/`. There is no build command or dependency installation.

You can also upload the contents of `portfolio/` to any static host. Set `portfolio` as the publish directory and leave the build command empty.

## Checks

Browser verification covers all four pages at 375px, 768px and 1440px, navigation, project anchors, keyboard access, local asset loading and horizontal overflow. Before publishing copy changes, check the pages against `portfolio/content.md` and repeat the relevant checks.
