# SRO Docusaurus Template

This is a template for building simple Markdown-based websites with Docusaurus, preconfigured for use by SRO.

### Installation

Setup is very easy. Run the following command and a `my_website` folder will be created which contains everything you need.

```
npx create-docusaurus@latest my_website https://github.com/roboticsoutreach/docusaurus-template.git
```

### Setup

You will first want to update `docusaurus.config.ts` to contain a correct title, tagline, URL, repository configuration and navbar.

You should change `README.md` and at least remove the part at the top about setting up the template itself.

You should also view the `LICENSE` and at the least ensure it is appropriate to your project.

You could also:

- change the `sidebars.ts` file to modify the sidebar to the left
- update the navbar in the Docusaurus config
- update the footer in the Docusaurus config

Finally, you'll also eventually want to replace this page with something more useful.

### Deployment

The template comes with some GitHub Actions templates to deploy the site to GitHub Pages.

In the repisitory **Settings** > **GitHub Pages**, make sure the build source is set to **GitHub Actions**, and configure a custom domain if you want.

---

# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

This repository contains CI pipelines to build and deploy the website from the `main` branch.
