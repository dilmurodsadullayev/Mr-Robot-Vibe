import { useTranslation } from "react-i18next";

import { LANGUAGE_STORAGE_KEY } from "../../i18n";

const languages = ["uz", "en"];

function LanguageSwitcher() {
  const { i18n, t } = useTranslation("languageSwitcher");

  const currentLanguage = i18n.language;

  const changeLanguage = async (language) => {
    await i18n.changeLanguage(language);

    localStorage.setItem(
      LANGUAGE_STORAGE_KEY,
      language,
    );
  };

  return (
    <div
      className="
        flex
        items-center
        border
        border-white/10
        bg-black/30
        p-1
      "
      aria-label={t("changeLanguage")}
    >
      {languages.map((language) => {
        const isActive = currentLanguage === language;

        return (
          <button
            key={language}
            type="button"
            onClick={() => changeLanguage(language)}
            className={`
              px-3
              py-1.5
              text-[10px]
              font-bold
              tracking-[0.2em]
              transition-all
              duration-300

              ${
                isActive
                  ? "bg-red-700 text-white"
                  : "text-zinc-600 hover:text-white"
              }
            `}
          >
            {t(language)}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;