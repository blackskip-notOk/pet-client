import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { queryClient, queryKeys } from '~queryClient'
import { paths } from '~router'
import type { ServerError } from '~shared/types'
import { login } from './api'
import type { LoginFormType } from './model'

export const useLogin = () => {
	const navigate = useNavigate()

	return useMutation<unknown, AxiosError<ServerError>, LoginFormType>({
		mutationFn: login,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [queryKeys.auth] })
			navigate(paths.root)
		}
	})
}
