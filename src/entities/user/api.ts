import type { AxiosResponse } from 'axios'

import { api, instance } from '~queryClient'

import type { TUserProfile } from '.'

export function getAuth(): Promise<AxiosResponse<TUserProfile>> {
	return instance.get(api.auth)
}
