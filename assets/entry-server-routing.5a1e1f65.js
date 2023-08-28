import { _ as __vitePreload, g as __vite_glob_2_0, j as __vite_glob_3_0, k as __vite_glob_4_0, l as __vite_glob_4_1, n as __vite_glob_4_2, q as __vite_glob_4_3, r as setPageFiles, a as assert, y as releasePageContextCommon, w as getCurrentUrl, z as getPageContextSerializedInHtml, o as objectAssign, c as assertUsage, F as getPageFilesAll, A as loadPageFilesClientSide, e as assertWarning, M as assertIsBundledOnce, L as assertRenderHook, K as assertHook } from "./chunk-16f58ea6.js";
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const neverLoaded = {};
const isGeneratedFile = true;
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({ "/pages/index/index.page.vue": () => __vitePreload(() => import("./pages/index/index.page.796117b5.js"), true ? ["assets/pages/index/index.page.796117b5.js","assets/chunk-d031348f.js","assets/chunk-546a4201.js","assets/global.7127219c.css","assets/index.page.975591b6.css"] : void 0), "/pages/v0.1/index.page.vue": () => __vitePreload(() => import("./pages/v0.1/index.page.05ea751a.js"), true ? ["assets/pages/v0.1/index.page.05ea751a.js","assets/chunk-546a4201.js","assets/chunk-048deeaf.js","assets/chunk-d031348f.js","assets/global.7127219c.css","assets/chunk-edbeda5a.js","assets/index.page.0777de80.css"] : void 0), "/pages/v0.2/index.page.vue": () => __vitePreload(() => import("./pages/v0.2/index.page.be0b7460.js"), true ? ["assets/pages/v0.2/index.page.be0b7460.js","assets/chunk-546a4201.js","assets/chunk-048deeaf.js","assets/chunk-d031348f.js","assets/global.7127219c.css","assets/chunk-edbeda5a.js","assets/index.page.b11928eb.css"] : void 0), "/renderer/_error.page.vue": () => __vitePreload(() => import("./renderer/_error.page.544f5ff8.js"), true ? ["assets/renderer/_error.page.544f5ff8.js","assets/chunk-546a4201.js"] : void 0) });
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesLazyClient1 = /* @__PURE__ */ Object.assign({ "/renderer/_default.page.client.ts": () => __vitePreload(() => import("./renderer/_default.page.client.9e4fe41b.js"), true ? ["assets/renderer/_default.page.client.9e4fe41b.js","assets/chunk-edbeda5a.js","assets/chunk-546a4201.js"] : void 0) });
const pageFilesLazyClient = { ...pageFilesLazyClient1 };
pageFilesLazy[".page.client"] = pageFilesLazyClient;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({ "/renderer/_default.page.client.ts": __vite_glob_2_0 });
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({ "/renderer/_default.page.server.ts": __vite_glob_3_0 });
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({ "/pages/index/index.page.vue": __vite_glob_4_0, "/pages/v0.1/index.page.vue": __vite_glob_4_1, "/pages/v0.2/index.page.vue": __vite_glob_4_2, "/renderer/_error.page.vue": __vite_glob_4_3 });
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
