import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            // See https://kit.svelte.dev/docs/adapter-cloudflare
            routes: {
                include: ['/*'],
                exclude: ['<all>']
            }
        }),
        output: {
            preloadStrategy: 'preload-mjs'
        }
    }
};

export default config;
