import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: 'resources/ts/main.ts',
            name: 'tailwind-page-builder',
        },
    },
    plugins: [
        laravel({
            buildDirectory: 'js',
            input: 'resources/ts/main.ts'
        }),
        vue()
    ],
})
