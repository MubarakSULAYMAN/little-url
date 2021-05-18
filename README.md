# Little URL

A goto web app to help you minify your long website links :link:.

**`Little URL`** is built with vue, and lots love :heart: :sparkling*heart:, and deployed on netlify. It is practically my first app built with more intension to accessibilty support. This is achieved by following both ***[WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)*** and  ***[WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/)*** criteria and guidelines to make Web content and Web applications more accessible to people with disabilities.

Because of our believe in being progressive, this is considered a work in progress :construction:. But, feel free to explore :ringed_planet: **[Little URL](https://little-url.netlify.app/)**, thank you friend.

## Table of contents

- [Project Title](#little-url)
<!-- - [Demo-Preview](#demo-preview) -->
- [Table of contents](#table-of-contents)

- [Getting started](#getting-started)

- [Prerequisites](#prerequisites)

- [Project setup](#project-setup)

  - [Install all packages, plugins and dependencies](#install-all-packages,-plugins-and-dependencies)
  - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
  - [Compiles and minifies for production](#compiles-and-minifies-for-production)
  - [Run your unit tests](#run-your-unit-tests)
  - [Lints and fixes files](#lints-and-fixes-files)
  - [Customize configuration](#customize-configuration)
  - [How to use / About the App](#how-to-use-/-about-the-app)

- [Built with](#built-with)

- [Things tagged unnecessary](#things-tagged-unnecessary)

- [Things avoided](#things-avoided)

- [Things not consider ~~/ ignored~~](#things-not-consider-~~/-ignored~~)

- [Things with issues unresolved](#things-with-issues-unresolved)

- [Authors](#authors)

- [License](#license)

- [Contributing](#contributing)

- [Acknowledgments](#acknowledgments)

[(Back to top)](#little-url)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

[(Back to top)](#little-url)

## Prerequisites

The things you will need in order to use the app and how to install them

- Before you begin, ensure you have the latest node installed on your computer - [Node.js 14.16.1](https://nodejs.org/en/download/) was used for this

Check with:

```bash
# ensure Node.js is >= 14.16.1
vue --version
```

- Also ensure you have the latest vue cli installed - [Vue CLI 3.O](https://cli.vuejs.org/) was used for this

Check with:

```bash
# ensure Vue CLI is >= 3.0
vue --version
```

[(Back to top)](#little-url)

## Project setup

This will walk you through how to setup the app on your local computer and/or machine.

### Install all packages, plugins and dependencies

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Run your unit tests

```bash
npm run test:unit
```

### Lints and fixes files

```bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### How to use / About the App

The app has two input medium with a button each and a button to reveal and hide instruction / guide.

1. To shorten a link (URL), paste or type the URL in first input area and click the button beside it that reads "Shorten URL".

    > A shortened URL will be generated and automatically appears in the second input.

2. Click the "Copy URL" button beside the second input area to copy the generated link or manaully copy using your mouse.

    > To view instructions, kindly selected the "View Instructions" button to view the instructions as earlier described.

[(Back to top)](#little-url)

## Built with

- [Vue 2](https://vuejs.org/) - The progressive javascript framework.  [Its CDN](https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js) was used.

- [Font Awesome](https://fontawesome.com/icons/) - The web's most popular and next generation of our icon library + toolkit for vector icons and social logos on your website.

- [Google Fonts](https://fonts.google.com/) - A leading host of open-source fonts for use on the web, making the web more beautiful, fast, and open through great typography.

- [Clipboard](https://clipboardjs.com/) - A light weight 3kb gzipped package that requires no flash nor framework to copy text to clipboard. [Its CDN](https://cdn.jsdelivr.net/npm/clipboard@2.0.8/dist/clipboard.min.js) was used.

- [Axios](https://www.npmjs.com/package/axios/) - Promise based HTTP client for the browser and node.js. [Its CDN](https://unpkg.com/axios/dist/axios.min.js) was used.

[(Back to top)](#little-url)

## Things tagged unnecessary

- [ ] Use of components as it seems really small and will lead to unnecessary use of props

- [ ] Enabling history mode with either vuex or localstorage

- [ ] Making a request persist on page refresh

[(Back to top)](#little-url)

## Things avoided

- [ ] Use of packages (so CDN was preferred wherever possible).

[(Back to top)](#little-url)

## Things not consider ~~/ ignored~~

- [ ] Routing and wrong route catching.
- [ ] Detailed error catching with notification.
- [ ] Animated request responses.
- [ ] Linting style
- [ ] Testing

[(Back to top)](#little-url)

## Things with issues unresolved

- [ ] Unable to use "import" for both css anf js local files due to 'MIME type (“text/html”) mismatch (X-Content-Type-Options: nosniff)' which could not resolve.

- [ ] Unable to use of .env file as I could not discipher how to implement it in my project structure.

[(Back to top)](#little-url)

## Authors

- **Mubarak SULAYMAN** - [@mubaraksulayman](https://twitter.com/mubaraksulayman)

See also the list of [contributors](https://github.com/MubarakSULAYMAN/little-url/contributors) who participated in this project.

[(Back to top)](#little-url)

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

[(Back to top)](#little-url)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

[(Back to top)](#little-url)

## Acknowledgments

<!-- - Hat tip to contributors on stackoverflow, github gist and vue forum -->

- Inspiration was drawn from [Link shortener website](https://www.codementor.io/projects/web/link-shortener-website-brqjanf6zq) on DevProjects by codementor

[(Back to top)](#little-url)
