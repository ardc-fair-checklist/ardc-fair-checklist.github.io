# Developer documentation


## Tech stack

1. [Vue 3](https://vuejs.org/) 
1. [Vite](https://vitejs.dev/)
1. [Vitest](https://vitest.dev/)
1. [TypeScript](https://www.typescriptlang.org/)
1. [vite-ssr-plugin](https://vite-plugin-ssr.com/)

## IDE / dev setup

We recommend using Volar VSCode extension for improved development experience. The project uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

1. [VS Code](https://code.visualstudio.com/)
1. [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Development installation

```shell
cd <some dir>
git clone https://github.com/ardc-fair-checklist/ardc-fair-checklist .
npm install
```

Building for development:

```shell
npm run dev
```

Building for production:

```shell
npm run build
```

## Publishing

There is a GitHub action `/.github/workflows/publish.yml` that builds the project for production and hosts it at https://ardc-fair-checklist.github.io/ssg. The GitHub action can be triggered manually via the GitHub user interface.

## TODO

1. ~~add points to questions~~
1. ~~show points in interface for the time being~~
1. ~~calculate partial and total progress~~
1. ~~write jsonschema for questions~~
1. ~~add rst badge~~
1. ~~investigate migrating to ~~SSR~~SSG [Prerendering](https://vite-plugin-ssr.com/)~~
1. ~~make questions part of the store and settable, derive other variables and make them gettable~~
1. publish coverage in ci
1. add testing as prose
1. implement testing prose
1. write foundation for versioning of list of questions
1. add validation of query parameters
1. use the checklist for a couple of existing software packages
1. revisit questions content with TomH

1. investigate using tailwindcss for styling
