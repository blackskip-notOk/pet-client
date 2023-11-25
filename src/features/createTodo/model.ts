import { z } from 'zod'

import { TodoSchema } from '~entities/ todo'

export const CreateTodoFormSchema = TodoSchema.omit({ id: true })

export const CreateTodoResponseSchema = z.object({
	todo: TodoSchema
})

export type TCreateTodoForm = z.infer<typeof CreateTodoFormSchema>
export type TCreateTodoResponse = z.infer<typeof TodoSchema>
