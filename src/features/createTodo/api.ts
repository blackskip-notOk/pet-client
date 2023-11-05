import type { AxiosResponse } from 'axios'

import { api, instance } from '~queryClient'

import type { TCreateTodoForm, TCreateTodoResponse } from './model'

export function createTodo({ content, name }: TCreateTodoForm): Promise<AxiosResponse<TCreateTodoResponse>> {
	return instance.post(api.todo.create, {
		content,
		name,
	})
}
