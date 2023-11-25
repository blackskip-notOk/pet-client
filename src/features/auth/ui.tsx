import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

import { AUTH_QUERY_KEY, getAuth } from "./api";

export const Auth = () => {
	const { t } = useTranslation("common", { keyPrefix: "auth" });

	const { data, error, isError, isPending, isSuccess } = useQuery({
		queryFn: getAuth,
		queryKey: [AUTH_QUERY_KEY],
		retry: 0,
	});

	if (isPending) {
		return <div>...Loading</div>;
	}

	if (isError) {
		return <h1>{error.message}</h1>;
	}

	return <h1>{t("welcome", { login: isSuccess ? data.data.user.login : "stranger" })}</h1>;
};
