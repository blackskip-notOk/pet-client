import { useEffect, useState } from "react";

import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { isDBError } from "~shared/helpers";
import { DBExceptionEnum } from "~shared/types";
import { Button } from "~shared/ui/button";
import { Form } from "~shared/ui/form";
import { FormErrorMessage } from "~shared/ui/formErrorMessage";
import { Input } from "~shared/ui/input";
import { Label } from "~shared/ui/label";

import { type SignupFormType, SignupFormTypeSchema } from "./model";
import { useSignup } from "./useSignup";

export const SignupForm = () => {
	const { t } = useTranslation("common", { keyPrefix: "signup" });

	const [serverError, setServerError] = useState("");

	const { error, isError, isPending, mutate, variables } = useSignup();

	useEffect(() => {
		if (isError && error) {
			const errorData = error.response?.data;
			const errorCode = error.response?.status;

			if (isDBError(errorData)) {
				const message =
					errorData.cause.name ===
					DBExceptionEnum.enum.PrismaClientKnownRequestError
						? t("userExist", { login: variables?.login })
						: t("serverError", { errorCode });
				setServerError(message);
			}
		}
	}, [isError, error, t, variables?.login]);

	const {
		formState: { errors, isDirty },
		handleSubmit,
		register,
	} = useForm<SignupFormType>({
		defaultValues: { login: "", password: "" },
		resolver: zodResolver(SignupFormTypeSchema),
	});

	const onSubmit: SubmitHandler<SignupFormType> = (data) => {
		mutate(data);
	};

	const isSubmitDisabled = !isDirty || isPending;

	return (
		<Form noValidate onSubmit={handleSubmit(onSubmit)}>
			<Label>
				{t("loginLabel")}:
				<Input
					aria-errormessage="login-error"
					aria-invalid={errors.login ? "true" : "false"}
					aria-required="true"
					autoComplete="username"
					placeholder={t("loginPlaceholder")}
					type="login"
					{...register("login")}
				/>
			</Label>
			<ErrorMessage as={<FormErrorMessage />} errors={errors} name="login" />
			<Label>
				{t("passwordLabel")}:
				<Input
					aria-errormessage="password-error"
					aria-invalid={errors.password ? "true" : "false"}
					aria-required="true"
					autoComplete="current-password"
					placeholder={t("passwordPlaceholder")}
					type="password"
					{...register("password")}
				/>
			</Label>
			<ErrorMessage as={<FormErrorMessage />} errors={errors} name="password" />
			<Button disabled={isSubmitDisabled} type="submit">
				{t("button")}
			</Button>
			<p>{serverError}</p>
		</Form>
	);
};
