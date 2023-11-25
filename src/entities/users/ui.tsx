import type { FC } from "react";

import { useQuery } from "@tanstack/react-query";

import { USERS_QUERY_KEY, getUsers } from "./api";

export const UsersList: FC = () => {
	const { data, error, isError, isPending } = useQuery({
		queryFn: getUsers,
		queryKey: [USERS_QUERY_KEY],
	});

	if (isPending) {
		return <div>...Loading</div>;
	}

	if (isError && error) {
		return <div>error</div>;
	}

	return (
		<>
			<div>users</div>
			<ul>
				{data.data.map((user) => (
					<li key={user.id}>{user.login}</li>
				))}
			</ul>
		</>
	);
};
