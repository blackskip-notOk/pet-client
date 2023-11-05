/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly CLIENT_HOST: 'localhost'
	readonly CLIENT_PORT: '5173'
	readonly SERVER_PORT: '3173'
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
