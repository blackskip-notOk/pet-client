import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { type ServerError } from "~shared/types";
import { signup } from "./api";
import type { SignupFormType, SignupResponse } from "./model";

export const useSignup = () => {
	return useMutation<SignupResponse, AxiosError<ServerError>, SignupFormType>({
		mutationFn: signup,
	});
};
