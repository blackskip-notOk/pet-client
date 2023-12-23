import { z } from 'zod'

import { UserProfileSchema } from '~entities/user'
import i18n from '~i18n'

export const SignupFormTypeSchema = UserProfileSchema.pick({
	login: true
}).extend({
	password: z
		.string({
			required_error: i18n.t('passwordRequired', { ns: 'validation' })
		})
		.trim()
		.min(4, {
			message: i18n.t('passwordLong', { ns: 'validation', number: 4 })
		})
})

export type SignupFormType = z.infer<typeof SignupFormTypeSchema>
