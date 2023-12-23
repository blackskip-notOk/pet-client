import { type FC, Suspense, useEffect } from 'react'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { attachLogger } from 'effector-logger'
import { useUnit } from 'effector-react'
import { useTranslation } from 'react-i18next'
import { RouterProvider } from 'react-router-dom'
import { router } from '~router'

import { authModel } from '~entities/auth'
import { useAuth } from '~entities/auth/useAuth'
import { pageMounted } from './model'
import './styles/index.css'

attachLogger()

export const App: FC = () => {
	const { t } = useTranslation('glossary')

	const { data, isSuccess, isError, error } = useAuth()

	const handlePageMounted = useUnit(pageMounted)

	useEffect(() => {
		if (isError && error) {
			authModel.authFailedFetched()
		}
	}, [isError, error])

	useEffect(() => {
		if (isSuccess && data) {
			authModel.authSuccessFetched(data)
		}
	}, [isSuccess, data])

	useEffect(() => {
		handlePageMounted()
	}, [handlePageMounted])

	return (
		<Suspense fallback='...Loading'>
			<RouterProvider fallbackElement={<div>{t('loading')}</div>} router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
		</Suspense>
	)
}
