import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			strategies: 'injectManifest',
			srcDir: './src',
			filename: 'sw.js',
			base: '/',
			injectManifest: {
				injectionPoint: undefined
			},
			manifest: {
				name: 'Habitud',
				short_name: 'Habitud',
				description: 'Track your habits, master your life',
				theme_color: '#000',
				display: 'standalone',

				icons: [
					{
						src: 'habitud192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: 'habitud512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			}
		})
	]
});
