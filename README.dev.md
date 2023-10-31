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
git clone https://github.com/ardc-fair-checklist/ardc-fair-checklist.github.io .
npm install
```

## npm scripts

- `npm run build`: build the project for production, output files in `./dist`
- `npm run coverage`: run the tests once and calculate coverage using `@vitest/coverage-c8`
- `npm run dev`: build the project for development, watch files for changes, serve output files on `localhost`.
- `npm run lint`: run `eslint` with configuration from `.eslintrc`
- `npm run prod`: shorthand for `npm run build && npm run server:prod`
- `npm run server`: serve the development build
- `npm run server:prod`: serve the production build
- `npm run test`: run the unit tests in watch mode using `vitest`

<!--
## Known problem with `npm run prod`

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
-->

relevant version info from `npm list`:

```text
├── @types/compression@1.7.2
├── @types/express@4.17.14
├── @types/node@17.0.45
├── @vitejs/plugin-vue@3.2.0
├── @vue/compiler-sfc@3.2.41
├── @vue/server-renderer@3.2.41
├── ajv@8.11.0
├── compression@1.7.4
├── cross-env@7.0.3
├── express@4.18.2
├── sirv@2.0.2
├── ts-node@10.9.1
├── typescript@4.8.4
├── vite-plugin-ssr@0.4.43
├── vite@3.2.0
├── vitest@0.24.3
└── vue@3.2.41
```

## Versioning strategy

In the current app, there are multiple entities that could be versioned, namely the software questions JSON and the software questions app. The DRY (Don't Repeat Yourself) principle would suggest to make one app that can be used to render any version of the questions. However, this becomes more difficult to maintain as more versions of the questions are introduced. We therefore chose to have one directory for each  version. That one directory contains all the components, along with all the data needed to render the app for that particular version of the questions. Naturally, this comes at the cost of having duplicate code between versions. Each version is assigned its own route, and can choose to do its own processing on supplied query parameters. Only the contents of `public/`, `renderer/`, and `server/` are shared across versions.

## Publishing

### GitHub Pages

There is a GitHub action `/.github/workflows/publishing.yml` that builds the project for production and hosts it at https://fairsoftwarechecklist.net/, which is owned by Netherlands eScience Center. The GitHub action can be triggered manually via the GitHub user interface.

### GitHub

Don't make GitHub releases manually, instead let the `zenodraft` workflow do it. See https://github.com/ardc-fair-checklist/ardc-fair-checklist.github.io/issues/92.

### Zenodo

See https://github.com/ardc-fair-checklist/ardc-fair-checklist.github.io/issues/92 for avoiding a problem when publishing.

There is a GitHub action `/.github/workflows/zenodraft.yml` that publishes a snapshot of `main` to Zenodo, makes a release on GitHub, and tags the corresponding SHA. The workflow purposely does not finalize the depostion on Zenodo. It must be published manually by clicking the "Publish" button on Zenodo after inspection of the draft's metadata. The GitHub action can be triggered manually via the GitHub user interface.

## Adding a new version

Let's say the current latest version is `v0.2`, and the version you want to make is `v1`. You would do the following:

```shell
cd <project root>
cp -r pages/v0.2 pages/v1
```

Then, add the new version string to the relevant part of the state in `versions.ts`:

```shell
nano renderer/versions.ts
```

where it says

```ts
['v0.1', 'v0.2']
```

add the next version identifier:

```ts
['v0.1', 'v0.2', 'v1']
```

Start the development server:

```shell
npm run dev
```

Check browser:

```shell
# add BASE_URL if you have it enabled, see vite.config.js
open http://localhost:3000
```

Now make whatever changes you want under `pages/v1`. The page should update
through hot module reloading. Existing badges that point to any version that isn't
the latest should still resolve to the correct (older) version page, but will now display a message prompting users to update.
