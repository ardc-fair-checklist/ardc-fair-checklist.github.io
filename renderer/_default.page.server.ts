import { renderToString } from '@vue/server-renderer'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { createApp } from './app'
import type { PageContextServer } from './types'

export { render }
export { onBeforeRender }

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = [
    '__asyncLoader',
    'effect',
    'pageProps',
    'redirectTo',
    'render',
    'urlPathname'
]

async function onBeforeRender(pageContext: PageContextServer) {

    const regexpData = new RegExp('^/data/?$')
    if (regexpData.test(pageContext.urlPathname)) {
        return {
            pageContext: {
                redirectTo: `${import.meta.env.BASE_URL}data/v0.1`
            }
        }
    }
    const regexpSoftware = new RegExp('^/software/?$')
    if (regexpSoftware.test(pageContext.urlPathname)) {
        return {
            pageContext: {
                redirectTo: `${import.meta.env.BASE_URL}software/v0.2`
            }
        }
    }
}

async function render(pageContext: PageContextServer) {

    const app = createApp(pageContext)
    const appHtml = await renderToString(app)

    // See https://vite-plugin-ssr.com/head
    const { documentProps } = pageContext.exports
    const title = (documentProps && documentProps.title) || 'ARDC FAIR checklist'
    const desc = (documentProps && documentProps.description) || 'ARDC FAIR checklist'

    const documentHtml = escapeInject`<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <link rel="icon" href="${import.meta.env.BASE_URL}site-logo.svg" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="${desc}" />
                <title>${title}</title>
            </head>
            <body>
                <div id="app">${dangerouslySkipEscape(appHtml)}</div>
            </body>
        </html>`

      return {
          documentHtml,
          pageContext: {
              // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
          }
      }
}
