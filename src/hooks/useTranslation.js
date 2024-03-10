// useTranslation.js
import { cookies } from 'next/headers'

import { COOKIES } from '../utils/constants'

import commonEn from '../locales/en/common.json'
import commonEs from '../locales/es/common.json'
import commonDe from '../locales/de/common.json'
import homeEn from '../locales/en/home.json'
import homeEs from '../locales/es/home.json'
import homeDe from '../locales/de/home.json'

const en = {
  common: commonEn,
  home: homeEn
}

const es = {
  common: commonEs,
  home: homeEs
}

const de = {
  common: commonDe,
  home: homeDe
}

const translations = { en, es, de }

export function useTranslation () {
  const { value: locale } = cookies().get(COOKIES.locale)

  return {
    t: (key) => {
      const [filename, name] = key.split('.')

      return translations[locale]?.[filename]?.[name] || key
    },
    locale
  }
}
