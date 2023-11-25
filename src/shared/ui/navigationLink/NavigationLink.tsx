import type { FC } from "react";

import { NavLink, type NavLinkProps } from "react-router-dom";

import { active, navlink } from "./index.module.css";

export const NavigationLink: FC<NavLinkProps> = ({ children, ...props }) => {
	return (
		<NavLink
			className={({ isActive, isTransitioning }) =>
				navlink + [" ", isActive ? active : "", isTransitioning ? "transitioning" : ""].join(" ")
			}
			{...props}
		>
			{children}
		</NavLink>
	);
};
