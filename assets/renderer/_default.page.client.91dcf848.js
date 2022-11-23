import { c as createSSRApp } from "../chunk-ad67e3db.js";
import { s as setPageContext } from "../chunk-cd518acb.js";
import { d as defineComponent, h } from "../chunk-4828f769.js";
const createApp = (pageContext) => {
  const { Page, pageProps } = pageContext;
  const PageWithLayout = defineComponent({
    render() {
      return h(Page, pageProps || {});
    }
  });
  const app = createSSRApp(PageWithLayout);
  setPageContext(app, pageContext);
  return app;
};
const render = async (pageContext) => {
  const app = createApp(pageContext);
  app.mount("#app");
};
export {
  render
};
