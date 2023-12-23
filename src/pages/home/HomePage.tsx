import type { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '~entities/header'
import { main } from './index.module.css'

export const HomePage: FC = () => {
	return (
		<>
			<Header />
			<main className={main}>
				<div className='parallax-layer layer1'>LAYER 1</div>
				<div className='parallax-layer layer2'>LAYER 2</div>
				<div className='parallax-layer layer3'>LAYER 3</div>
				<Outlet />
			</main>
		</>
	)
}
