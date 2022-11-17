import { s as inject } from "./chunk-ae64c334.js";
const key = Symbol();
function usePageContext() {
  const pageContext = inject(key);
  if (!pageContext)
    throw new Error("setPageContext() not called in parent");
  return pageContext;
}
function setPageContext(app, pageContext) {
  app.provide(key, pageContext);
}
export {
  setPageContext as s,
  usePageContext as u
};
