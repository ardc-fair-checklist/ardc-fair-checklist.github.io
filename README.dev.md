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
git clone https://github.com/ardc-fair-checklist/ssg .
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

In the current app, there are multiple entities that could be versioned: the data questions JSON, the data questions app, the software questions JSON, and the software questions app. The DRY (Don't Repeat Yourself) principle would suggest to make one app that can be used to render data as well as software. However, this becomes more difficult to maintain as more versions of the data questions and software questions (and perhaps new future topics) are introduced. We therefore chose to have one directory for each combination of topic and version. That one directory contains all the components, along with all the data needed to render the app for that particular topic and that particular version. Naturally, this comes at the cost of having duplicate code. Each combination of topic and version is assigned its own route, and can choose to do its own processing on supplied query parameters. Only the contents of `public/`, `renderer/`, and `server` are shared across topics and versions.

## Publishing

There is a GitHub action `/.github/workflows/publish.yml` that builds the project for production and hosts it at https://ardc-fair-checklist.github.io/ssg. The GitHub action can be triggered manually via the GitHub user interface.

## Adding a new version of an existing topic

Let's say the topic for which you want to make a new version is `software`, the current latest version is `v0.2`, and the version you want to make is `v1`. You would do the following:

```shell
cd <project root>
cp -r pages/software/v0.2 pages/software/v1
```

Then, add the new version string to the relevant part of the state in `versions.ts`:

```shell
nano renderer/versions.ts 
```

Where it says

```text
software: ['v0.1', 'v0.2']
```

add the next version identifier:

```text
software: ['v0.1', 'v0.2', 'v1']
```

Start the development server:

```
npm run dev
```

Check browser:

```shell
# add BASE_URL if you have it enabled, see vite.config.js
open http://localhost:3000
```

Now make whatever changes you want under `pages/software/v1`. The page should update
through hot module reloading.

## Adding a new topic

Let's say you want to have a checklist for services in addition to the software and data checklists that are already there. You'd do the following:

Pick the topic and version that are the best match for what you want to make, let's say that is `pages/software/v0.2`:

```shell
cd <project root>
mkdir pages/services
cp -r pages/software/v0.2 pages/services/v0.1
```

In `versions.ts` where it says

```text
data: ['v0.1', 'v0.2'],
software: ['v0.1', 'v0.2']
```

add the relevant state:

```text
data: ['v0.1', 'v0.2'],
services: ['v0.1'],
software: ['v0.1', 'v0.2']
```

And add a getter method below that.

Next, start the development server with:

```
npm run dev
```

Check browser:

```shell
# add BASE_URL if you have it enabled, see vite.config.js
open http://localhost:3000
```

Now make whatever changes you want under `pages/services/v0.1`. The page should update through hot module reloading.
