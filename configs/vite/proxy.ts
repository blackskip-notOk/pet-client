import type { ProxyOptions } from 'vite'
import { loadEnv } from 'vite'

export function setProxyConfig(mode: string) {
	const env = loadEnv(mode, '../env', 'CLIENT_')

	const api_path = `http://${env.CLIENT_HOST}:${env.CLIENT_API_PORT}`

	const proxyOptions = {
		changeOrigin: true,
		secure: false,
		target: api_path
	}

	const proxyConfig: Record<string, ProxyOptions> = {
		'^/api/.*': proxyOptions,
		'^/css/.*': proxyOptions,
		'^/font/.*': proxyOptions,
		'^/js/.*': proxyOptions
	}

	return proxyConfig
}
