# Little URL

A goto web app to help you minify your long website links :link:.

**`Little URL`** is built with vue, and lots love :heart: :sparkling*heart:, and deployed on netlify. It is practically my first app built with more intension to accessibilty support. This is achieved by following both **_[WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)_** and  **_[WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/)_** criteria and guidelines to make Web content and Web applications more accessible to people with disabilities.

Because of our believe in being progressive, we believe ths is just a work in progress :construction:. But, feel free to explore :ringed_planet: **[Little URL](https://little-url.netlify.app/)**, thank you friend.

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

- [Things I did not consider ~~/ ignored~~](#things-i-did-not-consider-~~/-ignored~~)

- [Things I had issues with](#things-i-had-issues-with)

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

The home screen shows the available top headlines at the moment. Presently, the default is Nigeria and news source can be selected from the "news source" button on the home screen. A news or article can be searched while on the home screen using any combination of keywords. It is a web app and requires internet to operate. Arguably, the app only needs internet to start, if the user will not use more than the fetched news on initial load.

[(Back to top)](#little-url)

## Built with

- [Vue 2](https://vuejs.org/) - The progressive javasript framework used

- [Font Awesome](https://fontawesome.com/icons/) - The web's most popular and next generation of our icon library + toolkit for vector icons and social logos on your website.

- [Vue 2](https://fonts.google.com/) - A leading host of open-source fonts for use on the web, making the web more beautiful, fast, and open through great typography.

[(Back to top)](#little-url)

## Things I find unnecessary

- [ ] Use of components as it seems really small and will lead to unnecessary use of props

- [ ] Enabling history mode with either vuex or localstorage

- [ ] Making a request persist on page refresh

[(Back to top)](#little-url)

## Things I did not consider ~~/ ignored~~

- [ ] Routing and wrong route catching.
- [ ] Detailed error catching with notification.
- [ ] Animated request responses.
- [ ] Linting style
- [ ] Test

[(Back to top)](#little-url)

## Things I had issues with

- [ ] Unable to use "import" for both css anf js files due to 'MIME type (“text/html”) mismatch (X-Content-Type-Options: nosniff)' which could not resolve.

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
