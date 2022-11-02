import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
    // base: '/ssg/',
    base: undefined,
    build: {
        minify: false,
        ssrManifest: true
    },
    plugins: [
        vue(),
        ssr({
            prerender: true
        })
    ],
    resolve: {
        alias: {
            "~": __dirname,
        }
    }
}

export default config
