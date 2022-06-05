//import Vue from "vue";
import * as VueI18n from "vue-i18n";
import messages_fr from "@/lang/fr";
import messages_en from "@/lang/en";

export const i18n = VueI18n.createI18n({
  locale: "fr", // set locale
  fallbackLocale: "en", // set fallback locale
  messages: {
    fr: messages_fr,
    en: messages_en,
  },
});

const loadedLanguages = ["en"];

export const languagesAvailable = ["en", "fr"];

function setI18nLanguage(lang) {
  i18n.locale = lang;
  document.querySelector("html").setAttribute("lang", lang);
  return lang;
}

export function navigatorCloseLanguage() {
  const userLanguage = navigator.language;
  if (languagesAvailable.includes(userLanguage)) {
    return loadLanguageAsync(userLanguage);
  } else if (userLanguage.includes("-")) {
    const userLanguageSplit = userLanguage.split("-");
    if (languagesAvailable.includes(userLanguageSplit[0])) {
      return loadLanguageAsync(userLanguageSplit[0]);
    }
  }
  return "en";
}

export function loadLanguageAsync(lang) {
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      return import(
        /* @vite-ignore */
        /* webpackChunkName: "lang-[request]" */ `@/lang/${lang}`
      ).then((msgs) => {
        i18n.setLocaleMessage(lang, msgs.default);
        loadedLanguages.push(lang);
        return setI18nLanguage(lang);
      });
    }
    return Promise.resolve(setI18nLanguage(lang));
  }
  return Promise.resolve(lang);
}
