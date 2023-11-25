import type { AxiosResponse } from 'axios'

import { api, instance } from '~queryClient'

import type { TTodoList } from '.'

export function getTodoList(): Promise<AxiosResponse<TTodoList>> {
	return instance.get(api.todo.list)
}

export const TODO_QUERY_KEY = 'todo_list'
