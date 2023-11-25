import type { AxiosResponse } from 'axios'

import { api, instance } from '~queryClient'

import type { TSignupForm, TSignupResponse } from './model'

export function signup({ login, password }: TSignupForm): Promise<AxiosResponse<TSignupResponse>> {
	return instance.post(api.auth.signup, {
		login,
		password
	})
}
