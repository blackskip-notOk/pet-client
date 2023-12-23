import { useQuery } from '@tanstack/react-query'
import { getAuth } from './api'
import { queryKeys } from '~queryClient'

export const useAuth = () => {
	return useQuery({
		queryFn: getAuth,
		queryKey: [queryKeys.auth],
		retry: 0
	})
}
