# Boilerplate WebApp Template based on Foundation Zurb Template

[![devDependency Status](https://david-dm.org/zurb/foundation-zurb-template/dev-status.svg)](https://david-dm.org/zurb/foundation-zurb-template#info=devDependencies)

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- BEM naming mixins
- Flex mixins
- Breakpoints mixin
- Icon grid system for SVG icons
- JavaScript module bundling with webpack
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript module bundling with webpack
  - Image compression

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (Version 6 or greater recommended, tested with 6.11.4 and 8.12.0)
- [Yarn](https://yarnpkg.com) (Version 1.16 or greater recommended, tested with 1.16.0)
- [Git](https://git-scm.com/)

### Manual Setup

To manually set up the template, first download it with Git:

```bash
git clone https://gitlab.com/M3etis/boilerplate.git
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd projectname
yarn install
```

Finally, run `yarn start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `yarn run build`.
