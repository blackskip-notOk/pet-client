import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import type { SignupResponse } from "~features/signup/model";
import { type ServerError } from "~shared/types";
import { login } from "./api";
import type { LoginFormType } from "./model";

export const useLogin = () => {
	return useMutation<SignupResponse, AxiosError<ServerError>, LoginFormType>({
		mutationFn: login,
	});
};
