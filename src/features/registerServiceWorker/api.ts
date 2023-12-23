import { createEffect } from 'effector'

export async function registerServiceWorker() {
	if ('serviceWorker' in navigator) {
		try {
			const registration = await navigator.serviceWorker.register('/sw.js', {
				scope: '/'
			})

			if (import.meta.env.DEV) {
				const { installing, waiting, active } = registration

				installing && console.info('Service worker installing')
				waiting && console.info('Service worker installed')
				active && console.info('Service worker active', registration.scope)
			}
		} catch (error) {
			console.error(`Registration failed with ${error}`)
		}
	}
}

export const serviceWorkerRegisterFx = createEffect(() => registerServiceWorker())
