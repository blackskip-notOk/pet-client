import type { AxiosResponse } from "axios";

import { api, instance } from "~queryClient";

import type { TAuthResponse } from "./model";

export function getAuth(): Promise<AxiosResponse<TAuthResponse>> {
	return instance.get(api.auth.auth, { withCredentials: true });
}

export const AUTH_QUERY_KEY = "auth";
