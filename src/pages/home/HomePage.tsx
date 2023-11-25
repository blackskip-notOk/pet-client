import { type FC } from "react";

import { Outlet } from "react-router-dom";

import { Header } from "~entities/header";

export const HomePage: FC = () => {
	return (
		<>
			<Header />
			<main>
				{/* <Auth /> */}
				<article>
					<Outlet />
				</article>
			</main>
		</>
	);
};
