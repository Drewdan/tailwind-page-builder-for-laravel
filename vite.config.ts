import {defineConfig, UserConfigExport} from 'vite'
import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    console.log('mode', mode)
	const config: UserConfigExport = {
        build: {
            lib: {
                // Could also be a dictionary or array of multiple entry points
                entry: 'resources/ts/main.ts',
                name: 'tailwind-page-builder',
            },
        },
        plugins: [
            mode === 'production' ? laravel({
                buildDirectory: 'js',
                input: 'resources/ts/main.ts'
            }) : null,
            vue()
        ],
    };

    return config;
})
