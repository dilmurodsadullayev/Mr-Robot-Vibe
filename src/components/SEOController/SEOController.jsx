import {
  useEffect,
} from "react";

import {
  useTranslation,
} from "react-i18next";

function SEOController() {
  const {
    i18n,
  } = useTranslation();

  useEffect(() => {
    const language =
      i18n.resolvedLanguage ||
      i18n.language ||
      "uz";

    const isEnglish =
      language.startsWith(
        "en",
      );

    document.documentElement.lang =
      isEnglish
        ? "en"
        : "uz";

    document.title =
      isEnglish
        ? "Mr. Robot Vibe — fsociety Interactive Experience"
        : "Mr. Robot Vibe — fsociety interaktiv tajribasi";

    const description =
      document.querySelector(
        'meta[name="description"]',
      );

    if (description) {
      description.setAttribute(
        "content",
        isEnglish
          ? "Explore characters, ratings, terminal commands and a hidden fsociety network in this interactive Mr. Robot fan experience."
          : "Mr. Robot atmosferasidan ilhomlangan interaktiv fan loyiha. Personajlar, reytinglar, terminal va yashirin fsociety tarmog'ini kashf qiling.",
      );
    }

    const ogLocale =
      document.querySelector(
        'meta[property="og:locale"]',
      );

    if (ogLocale) {
      ogLocale.setAttribute(
        "content",
        isEnglish
          ? "en_US"
          : "uz_UZ",
      );
    }
  }, [
    i18n.language,
    i18n.resolvedLanguage,
  ]);

  return null;
}

export default SEOController;