import { z } from "zod";

import { UserProfileSchema } from "~entities/user";

export const AuthResponseSchema = z.object({
	access_token: z.string(),
	user: UserProfileSchema,
});

export type TAuthResponse = z.infer<typeof AuthResponseSchema>;
