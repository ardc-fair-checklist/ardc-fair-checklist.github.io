import { c as createSSRApp } from "../chunk-5a244714.js";
import { s as setPageContext } from "../chunk-89e65c56.js";
import { d as defineComponent, h } from "../chunk-376a9fed.js";
function createApp(pageContext) {
  const { Page, pageProps } = pageContext;
  const PageWithLayout = defineComponent({
    render() {
      return h(Page, pageProps || {});
    }
  });
  const app = createSSRApp(PageWithLayout);
  setPageContext(app, pageContext);
  return app;
}
async function render(pageContext) {
  const app = createApp(pageContext);
  app.mount("#app");
}
export {
  render
};
