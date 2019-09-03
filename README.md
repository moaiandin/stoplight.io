# stoplight.io

[stoplight.io](https://stoplight.io), Best in class API Design, Docs, Mocking, and Testing.

[![Netlify Status](https://api.netlify.com/api/v1/badges/dce90519-4481-4982-b239-afe64fd2f01a/deploy-status)](https://app.netlify.com/sites/stoplightio/deploys) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Features

- [React Static](https://github.com/nozzle/react-static) - A progressive static site generator for React
- [Tailwind](https://tailwindcss.com/docs/what-is-tailwind) - A utility-first CSS framework for
  rapidly building custom designs
- [Fontawesome](https://fontawesome.com) - Vector icons and social logos
- [Netlify](https://www.netlify.com/) - Continuous deployment and hosting
- [Netlify CMS](https://www.netlifycms.org/) - Open source content management for your Git workflow

## Project Structure

- [netlify](./netlify): content files created in NetlifyCMS that power the [src/templates](./src/templates).
- [public](./public): static files that are copied into `dist` at build time
- [src/templates](./src/templates): A page template that receives data from the files in [netlify](./netlify) and renders
- [src/components](./src/components): React components that are rendered by [src/templates](./src/templates)
- [src/utils](./src/utils): Utility functions
- [static.config.js](./static.config.js): react-static configuration file

## Getting Started

### Installation

1. Run `yarn install`
2. Run `yarn start`
3. Go to http://localhost:3000

### Add a route

1. Read the react-static docs on [adding a route](https://github.com/nozzle/react-static/blob/master/docs/config.md#getroutes).
2. Add a route to [getRoutes function](./src/utils/getRoutes.js).

### Add a page container

1. Create a new folder in `src/templates/{page name}`.
2. Add an `index.tsx` file that default exports a React component.
3. Add a `config.js` that exports the [NetlifyCMS configuration](https://www.netlifycms.org/docs/configuration-options/#collections) for the page.

### Other Commands

```bash
# build for staging
yarn build

# build for production
yarn build.production

# serve a build
yarn serve

# format using prettier
yarn format
```

### License

This project is licensed under the [MIT license](https://opensource.org/licenses/MIT).
