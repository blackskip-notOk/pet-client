import { StrictMode } from 'react'

import { App } from './app'

import { QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { queryClient } from '~queryClient'
// import './app/i18n'

const rootElement = document.getElementById('root')

if (!rootElement) {
	throw new Error('Failed to find the root element')
}

const root = createRoot(rootElement)
root.render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</StrictMode>
)
