import { createEvent, createStore } from "effector";
import { z } from "zod";

import { UserProfileSchema } from "~entities/user";
import * as authApi from "./api";
import { type TAuth } from "./api";

export const AuthResponseSchema = z.object({
	access_token: z.string(),
	user: UserProfileSchema,
});

export type TAuthResponse = z.infer<typeof AuthResponseSchema>;

export const $auth = createStore<TAuth>(null);

export const authSuccessFetched = createEvent<TAuthResponse>();
export const authFailedFetched = createEvent();

$auth.on(authSuccessFetched, (_, auth) => auth);
$auth.on(authFailedFetched, () => null);
