import { api, instance } from '~queryClient'

export async function logout() {
	const response = await instance.post(api.logout)

	return response.data
}
