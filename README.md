# Vedarth Harikrishnan — Portfolio

A static personal portfolio built with vanilla HTML, CSS and JavaScript. Navigation covers Home, Projects, Education, Skills, Awards, Qualifications and Work Experience. The five background sections share `experience.html`; Home contains the introduction and selected highlights. No dependencies, build tools or installation are required.

## Preview

Open `portfolio/index.html` in a browser. All page, stylesheet, script and resume links use relative paths.

Alternatively, from this directory run `python -m http.server 8000 --directory portfolio` and open `http://localhost:8000`.

## Project layout

```text
portfolio/
  index.html
  projects.html
  experience.html
  content.md
  css/style.css
  js/main.js
  assets/
    cv/
      Vedarth_CV6.pdf
      cvlatex.txt
```

`portfolio/content.md` is the single source of approved portfolio copy. Update the static HTML when changing this file; the website does not fetch or render Markdown at runtime. Preserve supplied profile identifiers in that file, but add website links only when their full URLs are known.

The single canonical CV folder is `portfolio/assets/cv/`, containing both `Vedarth_CV6.pdf` and `cvlatex.txt`. Only `portfolio/` is the website's deployment directory.

## Deploy

GitHub Pages is the simplest option for this project. It is static, free for public repositories, and the included workflow uploads only `portfolio/`.

1. On GitHub, open the repository's **Settings → General → Danger Zone → Change repository visibility** and make it **Public**.
2. Open **Settings → Pages**. Under **Build and deployment**, select **GitHub Actions** as the source.
3. Open the **Actions** tab, choose **Deploy portfolio to GitHub Pages**, click **Run workflow**, and run it on `main`.
4. GitHub will provide the live address when the run succeeds. For this repository, it will normally be `https://darthv22.github.io/webprofile/`.

After the initial setup, every push to `main` automatically publishes changes. The workflow can also be run manually. The `portfolio/` directory is deployed directly; there is no build command or dependency installation.

You can also upload the contents of `portfolio/` to any static host. Set `portfolio` as the publish directory and leave the build command empty.

## Checks

Browser verification covers all three pages at 375px, 768px and 1440px, navigation, project and experience anchors, keyboard access, local asset loading and horizontal overflow. Before publishing copy changes, check the pages against `portfolio/content.md` and repeat the relevant checks.
