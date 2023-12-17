import { api, instance } from "~queryClient";

import type { SignupFormType, SignupResponse } from "./model";

export async function signup({
	login,
	password,
}: SignupFormType): Promise<SignupResponse> {
	const response = await instance.post<SignupResponse>(api.signup, {
		login,
		password,
	});

	return response.data;
}
