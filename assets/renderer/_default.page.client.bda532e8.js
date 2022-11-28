import { c as createSSRApp } from "../chunk-98817835.js";
import { s as setPageContext } from "../chunk-5d891244.js";
import { d as defineComponent, h } from "../chunk-34b0814a.js";
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
