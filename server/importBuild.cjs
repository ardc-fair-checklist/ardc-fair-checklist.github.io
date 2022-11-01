const { setBuildGetters } = require('../../node_modules/vite-plugin-ssr/dist/cjs/node/plugin/plugins/importBuild/loadBuild.js');
setBuildGetters({
  pageFiles: () => import('./pageFiles.mjs'),
  clientManifest: () => require('../client/manifest.json'),
  pluginManifest: () => require('../client/vite-plugin-ssr.json'),
});
