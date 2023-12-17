import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import type { ServerError } from "~shared/types";
import { logout } from "./api";

export const useLogout = () => {
	return useMutation<unknown, AxiosError<ServerError>>({
		mutationFn: logout,
	});
};
