import { z } from 'zod'

import i18n from '~i18n'

export const UserProfileSchema = z
	.object({
		createdAt: z.date(),
		id: z.string().uuid(),
		login: z
			.string({
				required_error: i18n.t('loginRequired', { ns: 'validation' })
			})
			.min(3, {
				message: i18n.t('loginLong', { ns: 'validation', number: 3 })
			})
	})
	.required()
	.strict()

export type TUserProfile = z.infer<typeof UserProfileSchema>
