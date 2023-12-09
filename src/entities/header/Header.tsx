import { type FC, useRef } from "react";

import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { HeaderNavigation } from "~features/headerNavigation";
import { LanguageSelector } from "~features/selectLanguage";
import { ThemeSwitcher } from "~features/switchTheme";
import { paths } from "~router";
import eyes from "~shared/assets/eyes.svg";
import login from "~shared/assets/login.svg";

import {
	hamburger,
	header,
	headerMenuActive,
	iconsContainer,
	loginLink,
	logo,
	navlink,
} from "./index.module.css";
import { headerMenu } from "./index.module.css";

export const Header: FC = () => {
	const { t } = useTranslation("common", { keyPrefix: "header" });

	const headerMenuRef = useRef<HTMLDivElement | null>(null);

	const handleClick = () => {
		if (headerMenuRef.current) {
			headerMenuRef.current.classList.toggle(headerMenuActive);
		}
	};

	return (
		<header className={header}>
			<NavLink
				aria-label={t("linkAriaLabel", { path: "home" })}
				className={navlink}
				to={paths.root}
			>
				<img alt={t("logoAltText")} className={logo} src={eyes} />
			</NavLink>
			<div ref={headerMenuRef} className={headerMenu}>
				<HeaderNavigation />
				<div className={iconsContainer}>
					<ThemeSwitcher />
					<LanguageSelector />
					<NavLink
						aria-label={t("linkAriaLabel", { path: paths.login })}
						className={navlink}
						to={paths.login}
					>
						<img
							alt={t("iconAltText", { path: paths.login })}
							className={loginLink}
							src={login}
						/>
					</NavLink>
				</div>
			</div>
			<button
				aria-label={t("menuButtonAriaLabel")}
				onClick={handleClick}
				type="button"
				className={hamburger}
			/>
		</header>
	);
};
