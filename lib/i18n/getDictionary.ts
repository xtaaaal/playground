import 'server-only'
import type { Locale } from './config'
import { i18n } from './config';


const dictionaries = {
  en: () => import('./main/en.json').then((module) => module.default),
  'zh-HK': () => import('./main/zh-HK.json').then((module) => module.default),
  'zh-CN': () => import('./main/zh-CN.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]()

