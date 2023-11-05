import { z } from 'zod'

import i18n from '~i18n'

export const TodoSchema = z.object({
	content: z
		.string({
			required_error: i18n.t('require', { field: i18n.t('common:createTodo.content'), ns: 'validation' }),
		})
		.trim(),
	id: z.string().uuid(),
	name: z
		.string({
			required_error: i18n.t('require', { field: i18n.t('common:createTodo.name'), ns: 'validation' }),
		})
		.trim(),
})

export const TodoListSchema = z.array(TodoSchema)

export type TTodo = z.infer<typeof TodoSchema>;
export type TTodoList = z.infer<typeof TodoListSchema>;
