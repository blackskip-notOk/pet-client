import { z } from 'zod'

export const LoginFormEnum = z.enum(['login', 'password'])

export const LoginFormSchema = z
	.object({
		[LoginFormEnum.enum.login]: z
			.string({
				required_error: 'login is required',
			})
			.trim(),
		[LoginFormEnum.enum.password]: z
			.string({
				required_error: 'Password is required',
			})
			.min(4, { message: 'Password must be 4 or more characters long' })
			.trim(),
	})
	.required()
	.strict()

export type LoginFormType = z.infer<typeof LoginFormSchema>;
