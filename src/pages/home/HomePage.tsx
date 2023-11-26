import { type FC } from "react";

import { Outlet } from "react-router-dom";

import { Header } from "~entities/header";
import { main } from "./index.module.css";

export const HomePage: FC = () => {
	return (
		<>
			<Header />
			<main className={main}>
				<Outlet />
			</main>
		</>
	);
};
