import { type FC } from "react";

import { Outlet } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { Header } from "~entities/header";
import { Auth } from "~features/auth";
import { main } from "./index.module.css";

export const HomePage: FC = () => {
	return (
		<>
			<Header />
			<main className={main}>
				<Auth />
				<Outlet />
			</main>
		</>
	);
};
