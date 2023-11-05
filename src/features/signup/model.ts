import { z } from 'zod'

import { UserProfileSchema } from '~entities/user'
import i18n from '~i18n'

export const SignupFormSchema = UserProfileSchema.pick({ login: true }).extend({
	password: z
		.string({
			required_error: i18n.t('passwordRequired', { ns: 'validation' }),
		})
		.trim()
		.min(4, { message: i18n.t('passwordLong', { ns: 'validation', number: 4 }) }),
})

export const SignupResponseSchema = z.object({
	access_token: z.string(),
	user: UserProfileSchema,
})

export type TSignupForm = z.infer<typeof SignupFormSchema>;
export type TSignupResponse = z.infer<typeof SignupResponseSchema>;
