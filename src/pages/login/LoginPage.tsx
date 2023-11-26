import { type FC, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { LoginForm } from "~features/login";
import { SignupForm } from "~features/signup";
import {
	loginSwitchButton,
	page,
	signupSwitchButton,
} from "./index.module.css";

export const LoginPage: FC = () => {
	const { t } = useTranslation("common", { keyPrefix: "loginPage" });

	const firstInputRef = useRef<HTMLInputElement | null>(null);

	const [isLogin, setLogin] = useState(true);

	const handleClickLogin = () => {
		setLogin(true);
	};

	const handleClickSignup = () => {
		setLogin(false);
	};

	return (
		<article className={page}>
			<button
				onClick={handleClickLogin}
				className={loginSwitchButton}
				type="button"
			>
				<h1>{t("title")}</h1>
			</button>
			<button
				onClick={handleClickSignup}
				className={signupSwitchButton}
				type="button"
			>
				<h2>{t("subTitle")}</h2>
			</button>
			{isLogin ? <LoginForm firstInputRef={firstInputRef} /> : <SignupForm />}
		</article>
	);
};
