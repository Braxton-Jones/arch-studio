import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/arch-studio/',
	build: {
		rollupOptions: {
			output: {
				assetFileNames: 'assets/[name].[hash][extname]',
			},
		},
	},
});
