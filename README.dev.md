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

## npm scripts

- `npm run build`: build the project for production, output files in `./dist`
- `npm run dev`: build the project for development, watch files for changes, serve output files on `localhost`.
- `npm run prod`: shorthand for `npm run build && npm run server:prod`
- `npm run server`: serve the development build
- `npm run server:prod`: serve the production build

## Production problems

Running `npm run prod` results in a production site that can't resolve some of its own assets when run locally and combined with not undefined `base` option in `vite.config.js`. A possible workaround is to build the production files, then insert a directory with the same name as `base` between `server`|`client` and their files, like so:

```shell
BASE=ssg
npm run build
LIST_CLIENT=$(find ./dist/client/ -mindepth 1 -maxdepth 1)
LIST_SERVER=$(find ./dist/server/ -mindepth 1 -maxdepth 1)
mkdir dist/client/$BASE
mkdir dist/server/$BASE
mv $LIST_CLIENT dist/client/$BASE/
mv $LIST_SERVER dist/server/$BASE/
npm run server:prod
```

## Versioning strategy

In the current app, there are multiple entities that could be versioned: the data questions JSON, the data questions app, the software questions JSON, and the software questions app. The DRY (Don't Repeat Yourself) principle would suggest to make one app that can be used to render data as well as software. However, this becomes more difficult to maintain as more versions of the data questions and software questions (and perhaps new future topics) are introduced. We therefore chose to have one directory for each combination of topic and version. That one directory contains all the components, along with all the data needed to render the app for that particular topic and that particular version. Naturally, this comes at the cost of having duplicate code. Each combination of topic and version is assigned its own route, and can choose to do its own processing on supplied query parameters.

## Publishing

There is a GitHub action `/.github/workflows/publish.yml` that builds the project for production and hosts it at https://ardc-fair-checklist.github.io/ssg. The GitHub action can be triggered manually via the GitHub user interface.

## Adding a new version of an existing topic

TODO

## Adding a new topic

TODO
