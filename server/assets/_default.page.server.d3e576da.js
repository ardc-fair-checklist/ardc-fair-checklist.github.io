import { renderToString } from "@vue/server-renderer";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import { defineComponent, h, createSSRApp } from "vue";
import { s as setPageContext } from "./chunk-1b82c9dc.js";
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
const logoUrl = "/ssg/assets/logo.bebe2e90.svg";
const passToClient = [
  "__asyncLoader",
  "effect",
  "pageProps",
  "render",
  "urlOriginal",
  "urlParsed",
  "urlPathname"
];
async function render(pageContext) {
  const app = createApp(pageContext);
  const appHtml = await renderToString(app);
  const { documentProps } = pageContext.exports;
  const title = documentProps && documentProps.title || "ARDC FAIR checklist";
  const desc = documentProps && documentProps.description || "ARDC FAIR checklist";
  const documentHtml = escapeInject`<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <link rel="icon" href="${logoUrl}" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="${desc}" />
                <title>${title}</title>
            </head>
            <body>
                <div id="app">${dangerouslySkipEscape(appHtml)}</div>
            </body>
        </html>`;
  return {
    documentHtml,
    pageContext: {}
  };
}
export {
  passToClient,
  render
};
