import { c as createSSRApp } from "../chunk-88906689.js";
import { s as setPageContext } from "../chunk-56ca0878.js";
import { d as defineComponent, h } from "../chunk-9b869ddf.js";
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
