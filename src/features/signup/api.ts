import { api, instance } from '~queryClient'

import type { SignupFormType } from './model'

export async function signup({ login, password }: SignupFormType): Promise<void> {
	const response = await instance.post(api.signup, {
		login,
		password
	})

	return response.data
}
