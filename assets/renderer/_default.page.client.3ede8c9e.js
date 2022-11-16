import { c as createSSRApp } from "../chunk-ad67e3db.js";
import { s as setPageContext } from "../chunk-26e7f91e.js";
import { d as defineComponent, h } from "../chunk-4828f769.js";
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
