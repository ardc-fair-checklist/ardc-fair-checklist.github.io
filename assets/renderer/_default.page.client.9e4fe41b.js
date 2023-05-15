import { c as createSSRApp, s as setPageContext } from "../chunk-edbeda5a.js";
import { d as defineComponent, h } from "../chunk-546a4201.js";
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
