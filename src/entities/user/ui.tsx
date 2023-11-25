import type { FC } from 'react'

import { useQuery } from '@tanstack/react-query'

import { USER_QUERY_KEY, getUserProfile } from './api'

export const UserProfile: FC = () => {
	const { error, isError, isPending } = useQuery({
		queryFn: getUserProfile,
		queryKey: [USER_QUERY_KEY]
	})

	if (isPending) {
		return <div>...Loading</div>
	}

	if (isError && error) {
		return <div>error</div>
	}

	return (
		<>
			<div>user</div>
			<ul />
		</>
	)
}
