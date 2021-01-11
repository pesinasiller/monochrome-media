import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LngDetector from 'i18next-browser-languagedetector'
import en from '../locale/en.json'
import es from '../locale/es.json'

i18n
  .use(LngDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      es,
    },
    fallbackLng: 'es',
    debug: process.env.NODE_ENV !== 'production',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      wait: true,
    },
  })

export default i18n
