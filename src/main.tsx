import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import { App } from './app'

import './app/i18n'

const rootElement = document.getElementById('root')

if (!rootElement) throw new Error('Failed to find the root element')

const root = createRoot(rootElement)
root.render(
	<StrictMode>
		<App />
	</StrictMode>
)
