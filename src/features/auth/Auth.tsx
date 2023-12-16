import { useUnit } from "effector-react";
import { useTranslation } from "react-i18next";
import { authModel } from "~entities/auth";

export const Auth = () => {
	const { t } = useTranslation("common", { keyPrefix: "auth" });

	const auth = useUnit(authModel.$auth);

	return (
		<h1>{t("welcome", { login: auth ? auth.user.login : "stranger" })}</h1>
	);
};
