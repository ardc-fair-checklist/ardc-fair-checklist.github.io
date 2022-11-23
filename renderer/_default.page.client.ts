/* eslint-disable import/prefer-default-export */
import { createApp } from './app';
import type { PageContextClient } from './types';

export const render = async (pageContext: PageContextClient) => {
    const app = createApp(pageContext);
    app.mount('#app');
};
