import type { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '~entities/header'
import { mountains, parallaxContainer, parallaxLayer, peak, sky, skyBall, wrapper } from './index.module.css'

export const HomePage: FC = () => {
	return (
		<>
			<Header />
			<main className={wrapper}>
				<section className={parallaxContainer}>
					<div className={`${parallaxLayer} ${sky}`} />
					<div className={`${parallaxLayer} ${skyBall}`} />
					<div className={`${parallaxLayer} ${peak}`} />
					<div className={`${parallaxLayer} ${mountains}`} />
					<Outlet />
				</section>
			</main>
		</>
	)
}
