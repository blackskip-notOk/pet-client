import type { SignupResponse } from "~features/signup/model";
import { api, instance } from "~queryClient";
import type { LoginForm } from "./model";

export async function login({
	login,
	password,
}: LoginForm): Promise<SignupResponse> {
	const response = await instance.post<SignupResponse>(api.login, {
		login,
		password,
	});

	return response.data;
}
