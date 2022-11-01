import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
    base: '/ssg/',
    plugins: [
        vue(),
        ssr({
            prerender: true
        })
    ]
}

export default config
