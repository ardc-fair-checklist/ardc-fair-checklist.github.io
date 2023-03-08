import { renderToString } from '@vue/server-renderer';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr';
import { createApp } from './app';
import type { PageContextServer } from './types';
import meta from '../package.json';

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = [
    '__asyncLoader',
    'effect',
    'pageProps',
    'render',
    'urlPathname'
];

export const render = async (pageContext: PageContextServer) => {
    const app = createApp(pageContext);
    const appHtml = await renderToString(app);

    // See https://vite-plugin-ssr.com/head
    const { documentProps } = pageContext.exports;
    const title = (documentProps && documentProps.title) || 'ARDC FAIR checklist';
    const desc = (documentProps && documentProps.description) || 'ARDC FAIR checklist';

    const documentHtml = escapeInject`<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <link rel="icon" href="${meta.homepage}/site-logo.svg" />
                <meta name="author" content="Jurriaan H. Spaaks">
                <meta name="description" content="${desc}" />
                <meta name="title" content="${title}">
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:description" content="${desc}" />
                <meta property="og:image" content="${meta.homepage}/site-logo.svg" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:title" content="${title}" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="${meta.homepage}" />
                <title>${title}</title>
            </head>
            <body>
                <div id="bg-container">
                    <div id="bg">
                    </div>
                </div>
                <div id="app">${dangerouslySkipEscape(appHtml)}</div>
            </body>
        </html>`;

    /* eslint-disable object-curly-newline */
    return {
        documentHtml,
        pageContext: {
            // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
        }
    };
    /* eslint-enable object-curly-newline */
};
