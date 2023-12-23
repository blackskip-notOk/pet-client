import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { queryClient, queryKeys } from '~queryClient'
import { paths } from '~router'
import type { ServerError } from '~shared/types'
import { signup } from './api'
import type { SignupFormType } from './model'

export const useSignup = () => {
	const navigate = useNavigate()

	return useMutation<unknown, AxiosError<ServerError>, SignupFormType>({
		mutationFn: signup,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [queryKeys.auth] })
			navigate(paths.root)
		}
	})
}
