import { api, instance } from "~queryClient";
import type { LoginFormType } from "./model";

export async function login({ login, password }: LoginFormType): Promise<void> {
	const response = await instance.post(api.login, {
		login,
		password,
	});

	return response.data;
}
