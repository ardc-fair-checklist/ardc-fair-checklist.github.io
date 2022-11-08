import { c as createSSRApp } from "../chunk-f2019d91.js";
import { s as setPageContext } from "../chunk-214b0f2c.js";
import { d as defineComponent, h } from "../chunk-64f4e639.js";
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
