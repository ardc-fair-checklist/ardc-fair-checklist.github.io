import { c as createSSRApp } from "../chunk-28fe97f4.js";
import { s as setPageContext } from "../chunk-c9bff55b.js";
import { d as defineComponent, h } from "../chunk-ca2b0874.js";
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
