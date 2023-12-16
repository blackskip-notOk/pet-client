import { api, instance } from '~queryClient'
import type { TAuthResponse } from './model'

export async function getAuth(): Promise<TAuthResponse> {
	const response = await instance.get<TAuthResponse>(api.auth, {
		withCredentials: true
	})

	return response.data
}

export const AUTH_QUERY_KEY = 'auth'

export type TAuth = TAuthResponse | null
