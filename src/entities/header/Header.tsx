import type { FC } from "react";

import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { HeaderNavigation } from "~features/headerNavigation";
import { LanguageSelector } from "~features/selectLanguage";
import { ThemeSwitcher } from "~features/switchTheme";
import { paths } from "~router";
import eyes from "~shared/assets/eyes.svg";

import { header, iconsContainer, logo, navlink } from "./index.module.css";

export const Header: FC = () => {
	const { t } = useTranslation("common", { keyPrefix: "header" });

	return (
		<header className={header}>
			<NavLink aria-label="home page link" className={navlink} to={paths.root}>
				<img alt={t("logoAltText")} className={logo} src={eyes} />
			</NavLink>
			<HeaderNavigation />
			<div className={iconsContainer}>
				<ThemeSwitcher />
				<LanguageSelector />
				<div>profile</div>
			</div>
		</header>
	);
};
