import { s as inject } from "./chunk-34b0814a.js";
const key = Symbol("description");
const usePageContext = () => {
  const pageContext = inject(key);
  if (!pageContext)
    throw new Error("setPageContext() not called in parent");
  return pageContext;
};
const setPageContext = (app, pageContext) => {
  app.provide(key, pageContext);
};
export {
  setPageContext as s,
  usePageContext as u
};
