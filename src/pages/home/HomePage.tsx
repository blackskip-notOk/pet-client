import { type FC } from "react";

import { Outlet } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { Header } from "~entities/header";
import { main } from "./index.module.css";

export const HomePage: FC = () => {
	const { t } = useTranslation("common", { keyPrefix: "homePage" });

	return (
		<>
			<Header />
			<main className={main}>
				<h1>{t("greeting", { name: "guest" })}</h1>
				<Outlet />
			</main>
		</>
	);
};
