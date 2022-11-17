import { c as createSSRApp } from "../chunk-29265f1c.js";
import { s as setPageContext } from "../chunk-c1a714dd.js";
import { d as defineComponent, h } from "../chunk-ae64c334.js";
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
