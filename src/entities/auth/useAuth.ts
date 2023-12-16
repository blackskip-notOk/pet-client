import { useQuery } from "@tanstack/react-query";
import { getAuth } from "./api";

const AUTH_QUERY_KEY = 'auth'

export const useAuth = () => {
	return useQuery({
		queryFn: getAuth,
		queryKey: [AUTH_QUERY_KEY],
		retry: 0,
	});
};
