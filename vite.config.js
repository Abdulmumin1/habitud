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
			manifest: {
				name: 'Habitud',
				short_name: 'Habitud',
				description: 'Track your habits, master your life',
				theme_color: '#000',
				display: 'standalone',

				icons: [
					{ src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
					{ src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
				]
			},
			injectManifest: {
				globPatterns: ['client/**/*.{js,svelte,css,ico,png,svg,webp,woff,woff2}'],
				maximumFileSizeToCacheInBytes: 10 * 1000 * 1000,
				// Tried with & without
				injectionPoint: undefined
			}
		})
	]
});
