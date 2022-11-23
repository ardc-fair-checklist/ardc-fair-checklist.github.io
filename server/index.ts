import express from 'express';
import compression from 'compression';
import { renderPage } from 'vite-plugin-ssr';

const isProduction = process.env.NODE_ENV === 'production';
const root = `${__dirname}/..`;

async function startServer() {
    const app = express();

    app.use(compression());

    if (isProduction) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
        const sirv = require('sirv');
        app.use(sirv(`${root}/dist/client`));
    } else {
        // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
        const vite = require('vite');
        const viteDevMiddleware = (
            await vite.createServer({
                root,
                server: { middlewareMode: true }
            })
        ).middlewares;
        app.use(viteDevMiddleware);
    }

    // eslint-disable-next-line consistent-return
    app.get('*', async (req, res, next) => {
        const pageContextInit = { urlOriginal: req.originalUrl };
        const pageContext = await renderPage(pageContextInit);
        const { httpResponse } = pageContext;
        if (!httpResponse) return next();
        const { body, statusCode, contentType } = httpResponse;
        res.status(statusCode).type(contentType).send(body);
    });

    const port = process.env.PORT || 3000;
    app.listen(port);
    // eslint-disable-next-line no-console
    console.log(`Server running at http://localhost:${port}`);
}

startServer();
