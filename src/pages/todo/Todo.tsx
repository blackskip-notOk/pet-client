import type { FC } from "react";

import { TodoList } from "~entities/ todo";
import { CreateTodoForm } from "~features/createTodo";

export const Todo: FC = () => {
	return (
		<section>
			<TodoList />
			<CreateTodoForm />
		</section>
	);
};
