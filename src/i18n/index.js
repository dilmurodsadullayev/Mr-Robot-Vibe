import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import uzCommon from "./locales/uz/common.json";
import uzNavbar from "./locales/uz/components/navbar.json";
import uzLanguageSwitcher from "./locales/uz/components/languageSwitcher.json";
import uzFooter from "./locales/uz/components/footer.json";
import uzHome from "./locales/uz/pages/home.json";

import enCommon from "./locales/en/common.json";
import enNavbar from "./locales/en/components/navbar.json";
import enLanguageSwitcher from "./locales/en/components/languageSwitcher.json";
import enFooter from "./locales/en/components/footer.json";
import enHome from "./locales/en/pages/home.json";

const LANGUAGE_STORAGE_KEY = "mr-robot-vibe-language";

const savedLanguage =
  localStorage.getItem(LANGUAGE_STORAGE_KEY) || "uz";

const resources = {
  uz: {
    common: uzCommon,
    navbar: uzNavbar,
    languageSwitcher: uzLanguageSwitcher,
    footer: uzFooter,
    home: uzHome,
  },

  en: {
    common: enCommon,
    navbar: enNavbar,
    languageSwitcher: enLanguageSwitcher,
    footer: enFooter,
    home: enHome,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,

    lng: savedLanguage,

    fallbackLng: "uz",

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