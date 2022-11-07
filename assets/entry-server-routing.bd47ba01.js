import { _ as __vitePreload, g as __vite_glob_2_0, j as __vite_glob_3_0, k as __vite_glob_4_0, l as __vite_glob_4_1, n as __vite_glob_4_2, q as __vite_glob_4_3, r as __vite_glob_4_4, t as __vite_glob_4_5, u as setPageFiles, a as assert, A as releasePageContextCommon, y as getCurrentUrl, B as getPageContextSerializedInHtml, o as objectAssign, c as assertUsage, H as getPageFilesAll, C as loadPageFilesClientSide, e as assertWarning, O as assertIsBundledOnce, N as assertRenderHook, M as assertHook } from "./chunk-0f60e432.js";
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const neverLoaded = {};
const isGeneratedFile = true;
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({ "/pages/data/v0.1/index.page.vue": () => __vitePreload(() => import("./pages/data/v0.1/index.page.30c66cc9.js"), true ? ["assets/pages/data/v0.1/index.page.30c66cc9.js","assets/chunk-de093346.js","assets/chunk-376a9fed.js"] : void 0), "/pages/data/v0.2/index.page.vue": () => __vitePreload(() => import("./pages/data/v0.2/index.page.70def402.js"), true ? ["assets/pages/data/v0.2/index.page.70def402.js","assets/chunk-17606473.js","assets/chunk-89e65c56.js","assets/chunk-376a9fed.js","assets/chunk-de093346.js","assets/chunk-5a244714.js","assets/index.page.88f71be8.css"] : void 0), "/pages/index/index.page.vue": () => __vitePreload(() => import("./pages/index/index.page.2a3f7fc8.js"), true ? ["assets/pages/index/index.page.2a3f7fc8.js","assets/chunk-17606473.js","assets/chunk-89e65c56.js","assets/chunk-376a9fed.js","assets/chunk-de093346.js","assets/index.page.de17bc50.css"] : void 0), "/pages/software/v0.1/index.page.vue": () => __vitePreload(() => import("./pages/software/v0.1/index.page.f04c915f.js"), true ? ["assets/pages/software/v0.1/index.page.f04c915f.js","assets/chunk-de093346.js","assets/chunk-376a9fed.js"] : void 0), "/pages/software/v0.2/index.page.vue": () => __vitePreload(() => import("./pages/software/v0.2/index.page.7e6fd327.js"), true ? ["assets/pages/software/v0.2/index.page.7e6fd327.js","assets/chunk-376a9fed.js","assets/chunk-de093346.js","assets/chunk-17606473.js","assets/chunk-89e65c56.js","assets/chunk-5a244714.js","assets/index.page.ca36125c.css"] : void 0), "/renderer/_error.page.vue": () => __vitePreload(() => import("./renderer/_error.page.9b6b9650.js"), true ? ["assets/renderer/_error.page.9b6b9650.js","assets/chunk-376a9fed.js"] : void 0) });
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesLazyClient1 = /* @__PURE__ */ Object.assign({ "/renderer/_default.page.client.ts": () => __vitePreload(() => import("./renderer/_default.page.client.cdb6e56b.js"), true ? ["assets/renderer/_default.page.client.cdb6e56b.js","assets/chunk-5a244714.js","assets/chunk-376a9fed.js","assets/chunk-89e65c56.js"] : void 0) });
const pageFilesLazyClient = { ...pageFilesLazyClient1 };
pageFilesLazy[".page.client"] = pageFilesLazyClient;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({ "/renderer/_default.page.client.ts": __vite_glob_2_0 });
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({ "/renderer/_default.page.server.ts": __vite_glob_3_0 });
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({ "/pages/data/v0.1/index.page.vue": __vite_glob_4_0, "/pages/data/v0.2/index.page.vue": __vite_glob_4_1, "/pages/index/index.page.vue": __vite_glob_4_2, "/pages/software/v0.1/index.page.vue": __vite_glob_4_3, "/pages/software/v0.2/index.page.vue": __vite_glob_4_4, "/renderer/_error.page.vue": __vite_glob_4_5 });
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
