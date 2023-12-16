import { useQuery } from '@tanstack/react-query'
import { AUTH_QUERY_KEY, getAuth } from './api'

export const useAuth = () => {
	return useQuery({
		queryFn: getAuth,
		queryKey: [AUTH_QUERY_KEY],
		retry: 0
	})
}
