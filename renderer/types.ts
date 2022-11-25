import type { PageContextBuiltIn } from 'vite-plugin-ssr';
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client';
import type { ComponentPublicInstance } from 'vue';

type Page = ComponentPublicInstance; // https://stackoverflow.com/questions/63985658/how-to-type-vue-instance-out-of-definecomponent-in-vue-3/63986086#63986086
export type PageProps = Record<string, unknown>;
export type PageContextCustom = {
    Page: Page
    pageProps?: PageProps
    urlPathname: string
    exports: {
        documentProps?: {
            title?: string
            description?: string
        }
    }
};
export type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom;
export type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;
export type PageContext = PageContextClient | PageContextServer;
