/* eslint-disable import/prefer-default-export */
import { createSSRApp, defineComponent, h } from 'vue';
import { setPageContext } from './usePageContext';
import type { PageContext } from './types';

export const createApp = (pageContext: PageContext) => {
    const { Page, pageProps } = pageContext;
    const PageWithLayout = defineComponent({
        render() {
            return h(Page, pageProps || {});
        }
    });
    const app = createSSRApp(PageWithLayout);

    // Make `pageContext` available from any Vue component
    setPageContext(app, pageContext);

    return app;
};
