import Vue from 'vue'
import storage from 'store'
import VueI18n, { LocaleMessage } from 'vue-i18n'
import VueCompositionApi, { reactive, ref, Ref } from '@vue/composition-api'

import enUS from './lang/en-US'

Vue.use(VueCompositionApi)
Vue.use(VueI18n)

export const defaultLang = 'en-US'

const messages = {
  'en-US': {
    ...enUS
  }
}

const loadedLanguages: string[] = [
  defaultLang
]

/* Ant Design LocaleProvider */
export const langState = reactive({
  locale: ref<string>(defaultLang),
  ant: ref<LocaleMessage>({})
})

const i18n = new VueI18n({
  locale: defaultLang,
  fallbackLocale: defaultLang,
  messages
})

export default i18n

export const i18nRender = (key: string) => i18n.t(key)

const setI18nLanguage = (lang: string) => {
  i18n.locale = lang
  langState.locale = lang
  // AntDesign LocaleProvider
  langState.ant = i18n.getLocaleMessage(lang).antLocale
  // @ts-ignore
  // document.getElementsByTagName('html')[0].setAttribute('lang', lang)
  return true
}

export const loadLanguageAsync = (lang: string = defaultLang) => {
  return new Promise(resolve => {
    // Save to storage
    storage.set('language', lang)
    if (i18n.locale !== lang) {
      if (!loadedLanguages.includes(lang)) {
        return import(/* webpackChunkName: "lang-[request]" */ `./lang/${lang}`).then(msg => {
          console.log('loadedLanguages', msg)
          const locale = msg.default
          i18n.setLocaleMessage(lang, locale)
          loadedLanguages.push(lang)
          langState.locale = lang
          langState.ant = locale.antLocale
          return resolve(setI18nLanguage(lang))
        })
      }
      return resolve(setI18nLanguage(lang))
    }
    return resolve(lang)
  })
}
