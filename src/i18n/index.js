import i18n from "i18next";
import { initReactI18next } from "react-i18next";

/* ============================= */
/* Uzbek */
/* ============================= */

import uzCommon from "./locales/uz/common.json";

import uzNavbar from "./locales/uz/components/navbar.json";
import uzLanguageSwitcher from "./locales/uz/components/languageSwitcher.json";
import uzFooter from "./locales/uz/components/footer.json";
import uzIntroLoader from "./locales/uz/components/introLoader.json";
import uzSystemHud from "./locales/uz/components/systemHud.json";
import uzTerminal from "./locales/uz/components/terminal.json";
import uzGlobalLoader from "./locales/uz/components/globalLoader.json";

import uzHome from "./locales/uz/pages/home.json";

/* ============================= */
/* English */
/* ============================= */

import enCommon from "./locales/en/common.json";

import enNavbar from "./locales/en/components/navbar.json";
import enLanguageSwitcher from "./locales/en/components/languageSwitcher.json";
import enFooter from "./locales/en/components/footer.json";
import enIntroLoader from "./locales/en/components/introLoader.json";
import enSystemHud from "./locales/en/components/systemHud.json";
import enTerminal from "./locales/en/components/terminal.json";
import enGlobalLoader from "./locales/en/components/globalLoader.json";

import enHome from "./locales/en/pages/home.json";

/* ============================= */
/* Language Storage */
/* ============================= */

const LANGUAGE_STORAGE_KEY = "mr-robot-vibe-language";

const savedLanguage =
  localStorage.getItem(LANGUAGE_STORAGE_KEY) || "uz";

/* ============================= */
/* Translation Resources */
/* ============================= */

const resources = {
  uz: {
    common: uzCommon,

    navbar: uzNavbar,
    languageSwitcher: uzLanguageSwitcher,
    footer: uzFooter,

    introLoader: uzIntroLoader,
    systemHud: uzSystemHud,
    terminal: uzTerminal,
    globalLoader: uzGlobalLoader,

    home: uzHome,
  },

  en: {
    common: enCommon,

    navbar: enNavbar,
    languageSwitcher: enLanguageSwitcher,
    footer: enFooter,

    introLoader: enIntroLoader,
    systemHud: enSystemHud,
    terminal: enTerminal,
    globalLoader: enGlobalLoader,

    home: enHome,
  },
};

/* ============================= */
/* i18next Configuration */
/* ============================= */

i18n
  .use(initReactI18next)
  .init({
    resources,

    lng: savedLanguage,

    fallbackLng: "uz",

    supportedLngs: ["uz", "en"],

    defaultNS: "common",

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

export { LANGUAGE_STORAGE_KEY };

export default i18n;