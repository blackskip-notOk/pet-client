import type { AxiosResponse } from 'axios'

import { api, instance } from '~queryClient'

import type { TUsers } from '.'

export function getUsers(): Promise<AxiosResponse<TUsers>> {
	return instance.get(api.users)
}

export const USERS_QUERY_KEY = 'users'
