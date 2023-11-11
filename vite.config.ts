import path from 'path'

import typedGenCssModulesPlugin from 'vite-plugin-gen-typed-css-modules'

import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import i18nextLoader from 'vite-plugin-i18next-loader'
import { VitePWA } from 'vite-plugin-pwa'

import { setProxyConfig } from './configs/vite/proxy'

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, './configs/env', 'CLIENT_')
	Object.assign(process.env, env)

	if (mode === 'development') {
		console.table(env)
	}

	return {
		appType: 'spa',
		build: {
			chunkSizeWarningLimit: 300,
			cssMinify: 'lightningcss',
			reportCompressedSize: true,
			sourcemap: false
		},
		css: {
			devSourcemap: true,
			lightningcss: {
				cssModules: {
					pattern: 'client-[name]-[hash]-[local]'
				}
			},
			transformer: 'lightningcss'
		},
		envDir: './configs/env',
		envPrefix: 'CLIENT_',
		logLevel: 'warn',
		plugins: [
			react(),
			i18nextLoader({
				include: ['**/*.json'],
				logLevel: 'error',
				paths: ['./public/locales']
			}),
			typedGenCssModulesPlugin(),
			VitePWA()
		],
		preview: {
			open: true,
			port: 4173,
			strictPort: true
		},
		resolve: {
			alias: [
				{
					find: '~i18n',
					replacement: path.resolve(__dirname, './src/app/i18n')
				},
				{
					find: '~queryClient',
					replacement: path.resolve(__dirname, './src/app/queryClient')
				},
				{
					find: '~router',
					replacement: path.resolve(__dirname, './src/app/router')
				},
				{
					find: '~pages',
					replacement: path.resolve(__dirname, './src/pages')
				},
				{
					find: '~shared',
					replacement: path.resolve(__dirname, './src/shared')
				},
				{
					find: '~entities',
					replacement: path.resolve(__dirname, './src/entities')
				},
				{
					find: '~features',
					replacement: path.resolve(__dirname, './src/features')
				},
				{
					find: '~icons',
					replacement: path.resolve(__dirname, './public/icons')
				}
			]
		},
		server: {
			host: env['CLIENT_HOST'] ?? '0.0.0.0',
			open: true,
			port: Number(env['CLIENT_PORT']),
			proxy: setProxyConfig(mode),
			strictPort: true
		}
	}
})
