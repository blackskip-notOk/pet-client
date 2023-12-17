import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import type { ServerError } from "~shared/types";
import { logout } from "./api";
import { queryClient, queryKeys } from '~queryClient';
import { useNavigate } from 'react-router-dom';
import { paths } from '~router';

export const useLogout = () => {
	const navigate = useNavigate();

	return useMutation<unknown, AxiosError<ServerError>>({
		mutationFn: logout,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [queryKeys.auth] });
			navigate(paths.root)
		}
	});
};
