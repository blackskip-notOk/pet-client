import type { FC } from 'react'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { attachLogger } from 'effector-logger'
import { useTranslation } from 'react-i18next'
import { RouterProvider } from 'react-router-dom'

import { queryClient } from '~queryClient'
import { router } from '~router'

import './index.scss'

attachLogger()

export const App: FC = () => {
	const { t } = useTranslation('glossary')

	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider
				fallbackElement={<div>{t('loading')}</div>}
				router={router}
			/>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
