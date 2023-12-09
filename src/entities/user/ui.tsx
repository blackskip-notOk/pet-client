import type { FC } from "react";
import { USER_QUERY_KEY, getUserProfile } from "./api";

import { useQuery } from "@tanstack/react-query";

export const UserProfile: FC = () => {
	const { error, isError, isPending } = useQuery({
		queryFn: getUserProfile,
		queryKey: [USER_QUERY_KEY],
	});

	if (isPending) {
		return <div>...Loading</div>;
	}

	if (isError && error) {
		return <div>error</div>;
	}

	return (
		<>
			<div>user</div>
			<ul />
		</>
	);
};
