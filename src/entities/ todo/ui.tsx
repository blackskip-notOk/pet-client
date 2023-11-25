import type { FC } from 'react'

import { useQuery } from '@tanstack/react-query'

import { TODO_QUERY_KEY, getTodoList } from './api'

export const TodoList: FC = () => {
	const { data, error, isError, isPending } = useQuery({
		queryFn: getTodoList,
		queryKey: [TODO_QUERY_KEY]
	})

	if (isPending) {
		return <div>...Loading</div>
	}

	if (isError && error) {
		return <div>error</div>
	}

	return (
		<>
			<h2>todo list</h2>
			<ul>
				{data.data.map(todo => (
					<li key={todo.id}>
						<p>
							<b>{todo.name}</b>
						</p>
						<p>{todo.content}</p>
						{/* <Button onClick={() => onClick(todo.id)}>X</Button> */}
					</li>
				))}
			</ul>
		</>
	)
}
