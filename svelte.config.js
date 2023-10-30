import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: { $components: 'src/components', $db: 'src/db' },
		files: {
			serviceWorker: './src/sw.js' // or `src/my-sw.ts`
		},
		serviceWorker: {
			register: false
		}
	}
};

export default config;
