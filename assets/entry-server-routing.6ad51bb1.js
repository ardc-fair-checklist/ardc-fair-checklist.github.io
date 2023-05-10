import { _ as __vitePreload, g as __vite_glob_2_0, j as __vite_glob_3_0, k as __vite_glob_4_0, l as __vite_glob_4_1, n as __vite_glob_4_2, q as __vite_glob_4_3, r as __vite_glob_4_4, t as __vite_glob_4_5, u as __vite_glob_4_6, v as setPageFiles, a as assert, B as releasePageContextCommon, z as getCurrentUrl, C as getPageContextSerializedInHtml, o as objectAssign, c as assertUsage, I as getPageFilesAll, D as loadPageFilesClientSide, e as assertWarning, P as assertIsBundledOnce, O as assertRenderHook, N as assertHook } from "./chunk-c09b8840.js";
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const neverLoaded = {};
const isGeneratedFile = true;
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({ "/pages/data/index/index.page.vue": () => __vitePreload(() => import("./pages/data/index/index.page.d9c596b1.js"), true ? ["assets/pages/data/index/index.page.d9c596b1.js","assets/chunk-18cccac3.js","assets/chunk-34b0814a.js","assets/global.b082e789.css","assets/index.page.ec3ad890.css"] : void 0), "/pages/data/v0.1/index.page.vue": () => __vitePreload(() => import("./pages/data/v0.1/index.page.96a2ac25.js"), true ? ["assets/pages/data/v0.1/index.page.96a2ac25.js","assets/chunk-34b0814a.js","assets/chunk-18cccac3.js","assets/global.b082e789.css","assets/chunk-55859c7c.js","assets/chunk-3ae7c80c.js","assets/chunk-797968b4.js","assets/chunk-98817835.js","assets/index.page.4a170c70.css"] : void 0), "/pages/index/index.page.vue": () => __vitePreload(() => import("./pages/index/index.page.83b47af1.js"), true ? ["assets/pages/index/index.page.83b47af1.js","assets/chunk-18cccac3.js","assets/chunk-34b0814a.js","assets/global.b082e789.css","assets/chunk-55859c7c.js","assets/chunk-3ae7c80c.js","assets/index.page.fc29facf.css"] : void 0), "/pages/software/index/index.page.vue": () => __vitePreload(() => import("./pages/software/index/index.page.c0097aa5.js"), true ? ["assets/pages/software/index/index.page.c0097aa5.js","assets/chunk-18cccac3.js","assets/chunk-34b0814a.js","assets/global.b082e789.css","assets/index.page.21e1d615.css"] : void 0), "/pages/software/v0.1/index.page.vue": () => __vitePreload(() => import("./pages/software/v0.1/index.page.34cb0c8e.js"), true ? ["assets/pages/software/v0.1/index.page.34cb0c8e.js","assets/chunk-18cccac3.js","assets/chunk-34b0814a.js","assets/global.b082e789.css","assets/chunk-55859c7c.js","assets/chunk-3ae7c80c.js","assets/chunk-797968b4.js","assets/chunk-98817835.js","assets/index.page.2ca08612.css"] : void 0), "/pages/software/v0.2/index.page.vue": () => __vitePreload(() => import("./pages/software/v0.2/index.page.48e248e6.js"), true ? ["assets/pages/software/v0.2/index.page.48e248e6.js","assets/chunk-18cccac3.js","assets/chunk-34b0814a.js","assets/global.b082e789.css","assets/chunk-55859c7c.js","assets/chunk-3ae7c80c.js","assets/chunk-797968b4.js","assets/chunk-98817835.js","assets/index.page.46dfdc29.css"] : void 0), "/renderer/_error.page.vue": () => __vitePreload(() => import("./renderer/_error.page.de708dd4.js"), true ? ["assets/renderer/_error.page.de708dd4.js","assets/chunk-34b0814a.js"] : void 0) });
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesLazyClient1 = /* @__PURE__ */ Object.assign({ "/renderer/_default.page.client.ts": () => __vitePreload(() => import("./renderer/_default.page.client.fe32edd2.js"), true ? ["assets/renderer/_default.page.client.fe32edd2.js","assets/chunk-98817835.js","assets/chunk-34b0814a.js","assets/chunk-3ae7c80c.js"] : void 0) });
const pageFilesLazyClient = { ...pageFilesLazyClient1 };
pageFilesLazy[".page.client"] = pageFilesLazyClient;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({ "/renderer/_default.page.client.ts": __vite_glob_2_0 });
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({ "/renderer/_default.page.server.ts": __vite_glob_3_0 });
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({ "/pages/data/index/index.page.vue": __vite_glob_4_0, "/pages/data/v0.1/index.page.vue": __vite_glob_4_1, "/pages/index/index.page.vue": __vite_glob_4_2, "/pages/software/index/index.page.vue": __vite_glob_4_3, "/pages/software/v0.1/index.page.vue": __vite_glob_4_4, "/pages/software/v0.2/index.page.vue": __vite_glob_4_5, "/renderer/_error.page.vue": __vite_glob_4_6 });
const pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
const pageFilesExports = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  pageFilesLazy,
  pageFilesEager,
  pageFilesExportNamesLazy,
  pageFilesExportNamesEager,
  neverLoaded,
  isGeneratedFile
}, Symbol.toStringTag, { value: "Module" }));
setPageFiles(pageFilesExports);
function releasePageContext(pageContext) {
  assert(pageContext.isHydration === true);
  assert(pageContext.isBackwardNavigation === null);
  return releasePageContextCommon(pageContext);
}
const urlFirst = getCurrentUrl({ withoutHash: true });
async function getPageContext() {
  const pageContext = getPageContextSerializedInHtml();
  objectAssign(pageContext, { isHydration: true, isBackwardNavigation: null });
  objectAssign(pageContext, await loadPageFilesClient(pageContext._pageId));
  assertPristineUrl();
  const pageContextReadyForRelease = releasePageContext(pageContext);
  return pageContextReadyForRelease;
}
function assertPristineUrl() {
  const urlCurrent = getCurrentUrl({ withoutHash: true });
  assertUsage(urlFirst === urlCurrent, `URL manipulated before hydration finished (\`${urlFirst}\` to \`${urlCurrent}\`). Ensure the hydration finishes with \`onHydrationEnd()\` before manipulating the URL.`);
}
async function loadPageFilesClient(pageId) {
  const pageContextAddendum = {};
  const { pageFilesAll } = await getPageFilesAll(true);
  objectAssign(pageContextAddendum, {
    _pageFilesAll: pageFilesAll
  });
  objectAssign(pageContextAddendum, await loadPageFilesClientSide(pageFilesAll, pageId));
  pageFilesAll.filter((p) => p.fileType !== ".page.server").forEach((p) => {
    var _a;
    assertWarning(!((_a = p.fileExports) === null || _a === void 0 ? void 0 : _a.onBeforeRender), `\`export { onBeforeRender }\` of ${p.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define \`onBeforeRender()\` in \`.page.server.js\` instead. See https://vite-plugin-ssr.com/onBeforeRender-isomorphic#server-routing`, { onlyOnce: true });
  });
  return pageContextAddendum;
}
assertIsBundledOnce();
hydrate();
async function hydrate() {
  var _a, _b;
  const pageContext = await getPageContext();
  assertRenderHook(pageContext);
  await pageContext.exports.render(pageContext);
  assertHook(pageContext, "onHydrationEnd");
  await ((_b = (_a = pageContext.exports).onHydrationEnd) === null || _b === void 0 ? void 0 : _b.call(_a, pageContext));
}