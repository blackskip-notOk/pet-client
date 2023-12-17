import { type FC, type RefObject, useEffect } from "react";

import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import { Button } from "~shared/ui/button";
import { Form } from "~shared/ui/form";
import { FormErrorMessage } from "~shared/ui/formErrorMessage";
import { Input } from "~shared/ui/input";
import { Label } from "~shared/ui/label";

import { useTranslation } from "react-i18next";
import { type LoginFormType, LoginFormEnum, LoginFormSchema } from "./model";
import { useLogin } from "./useLogin";

interface LoginFormProps {
	firstInputRef: RefObject<HTMLInputElement>;
}

export const LoginForm: FC<LoginFormProps> = () => {
	const { t } = useTranslation("common", { keyPrefix: "loginPage" });

	const { data, error, isError, isPending, isSuccess, mutate } = useLogin();

	useEffect(() => {
		if (isError) {
			console.log(error);
		}
	}, [isError, error]);

	useEffect(() => {
		if (isSuccess && data) {
			console.log(data);
		}
	}, [isSuccess, data]);

	const {
		formState: { errors, isDirty, isSubmitted },
		handleSubmit,
		register,
	} = useForm<LoginFormType>({
		defaultValues: {
			[LoginFormEnum.enum.login]: "",
			[LoginFormEnum.enum.password]: "",
		},
		resolver: zodResolver(LoginFormSchema),
	});

	const onSubmit: SubmitHandler<LoginFormType> = (data) => {
		console.log(data);
		mutate(data);
	};

	const isSubmitDisabled = !isDirty || isPending || isSubmitted;

	return (
		<Form noValidate onSubmit={handleSubmit(onSubmit)}>
			<Label>
				{t("loginLabel")}:
				<Input
					aria-errormessage="login-error"
					aria-invalid={errors[LoginFormEnum.enum.login] ? "true" : "false"}
					aria-required="true"
					autoComplete="username"
					placeholder="your login"
					type="text"
					{...register(LoginFormEnum.enum.login)}
				/>
			</Label>
			<ErrorMessage
				as={<FormErrorMessage />}
				errors={errors}
				name={LoginFormEnum.enum.login}
			/>
			<Label>
				Password:
				<Input
					aria-errormessage="password-error"
					aria-invalid={errors[LoginFormEnum.enum.password] ? "true" : "false"}
					aria-required="true"
					autoComplete="current-password"
					placeholder="enter the password"
					type="password"
					{...register(LoginFormEnum.enum.password)}
				/>
			</Label>
			<ErrorMessage
				as={<FormErrorMessage />}
				errors={errors}
				name={LoginFormEnum.enum.password}
			/>
			<Button disabled={isSubmitDisabled} type="submit">
				{t("loginLabel")}
			</Button>
		</Form>
	);
};
