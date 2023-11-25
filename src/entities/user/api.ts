import type { AxiosResponse } from "axios";

import { api, instance } from "~queryClient";

import type { TUserProfile } from ".";

export function getUserProfile(): Promise<AxiosResponse<TUserProfile>> {
	return instance.get(api.users);
}

export const USER_QUERY_KEY = "user";
