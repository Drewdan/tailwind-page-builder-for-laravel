import {defineConfig, UserConfigExport} from 'vite'
import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import tsconfigPaths from "vite-tsconfig-paths";


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    console.log('mode', mode)
	const config: UserConfigExport = {
        build: {
            lib: {
                entry: 'resources/ts/main.ts',
                name: 'tailwind-page-builder',
            },
        },
        plugins: [
            mode === 'production' ? laravel({
                input: 'resources/ts/main.ts'
            }) : null,
            vue({
				script: {
					defineModel: true,
				},
			}),
            tsconfigPaths(
				{
					loose: true,
				},
			),
        ],
    };

    return config;
})
