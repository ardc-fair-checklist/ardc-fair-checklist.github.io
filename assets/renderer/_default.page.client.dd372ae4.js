import { c as createSSRApp } from "../chunk-2457fd90.js";
import { s as setPageContext } from "../chunk-43f5a3e9.js";
import { d as defineComponent, h } from "../chunk-ef5fba30.js";
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
