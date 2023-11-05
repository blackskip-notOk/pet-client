import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import ChainedBackend, { type ChainedBackendOptions } from 'i18next-chained-backend'
import HttpApi from 'i18next-http-backend'
import LocalStorageBackend from 'i18next-localstorage-backend'
import { initReactI18next } from 'react-i18next'

import * as commonEn from './locales/en/common.json'
import * as glossaryEn from './locales/en/glossary.json'
import * as validationEn from './locales/en/validation.json'
import * as commonRu from './locales/ru/common.json'
import * as glossaryRu from './locales/ru/glossary.json'
import * as validationRu from './locales/ru/validation.json'

export const defaultNS = 'common'

export const resources = {
	en: {
		common: commonEn,
		glossary: glossaryEn,
		validation: validationEn,
	},
	ru: {
		common: commonRu,
		glossary: glossaryRu,
		validation: validationRu,
	},
} as const

i18n.use(ChainedBackend)
	.use(HttpApi)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init<ChainedBackendOptions>({
		backend: {
			backendOptions: [
				{
					expirationTime: 7 * 24 * 60 * 60 * 1000,
					prefix: 'i18n_res_',
				},
				{
					loadPath: './locales/{{lng}}/{{ns}}.json',
				},
			],
			backends: [LocalStorageBackend, HttpApi],
		},
		debug: import.meta.env.DEV,
		defaultNS,
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
		ns: ['common', 'validation', 'glossary'],
		preload: ['ru'],
		react: {
			bindI18n: 'languageChanged',
			useSuspense: true,
		},
		resources,
		supportedLngs: ['en', 'ru'],
	})

i18n.on('initialized', options => {
	console.info('i18n initialization success', options)
})

i18n.on('languageChanged', lng => {
	console.info('i18n language changed to:', lng)
})

export default i18n
