import { useTranslation } from "react-i18next";

import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

function Navbar() {
  const { t } = useTranslation("navbar");

  return (
    <header
      className="
        relative
        z-50
        border-b
        border-white/10
        bg-black/40
        backdrop-blur-md
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-5
          lg:px-8
        "
      >
        <a
          href="#"
          className="
            group
            flex
            items-center
            gap-3
          "
        >
          <span
            className="
              h-2
              w-2
              animate-pulse
              rounded-full
              bg-red-600
              shadow-[0_0_12px_rgba(220,38,38,0.9)]
            "
          />

          <span
            className="
              text-xs
              font-black
              tracking-[0.3em]
              text-red-600
              transition
              group-hover:text-red-500
            "
          >
            {t("brand")}
          </span>
        </a>

        <nav
          className="
            hidden
            items-center
            gap-8
            lg:flex
          "
        >
          <a
            href="#home"
            className="nav-link"
          >
            {t("home")}
          </a>

          <a
            href="#about"
            className="nav-link"
          >
            {t("about")}
          </a>

          <a
            href="#terminal"
            className="nav-link"
          >
            {t("terminal")}
          </a>

          <a
            href="#archive"
            className="nav-link"
          >
            {t("archive")}
          </a>
        </nav>

        <div className="flex items-center gap-5">
          <span
            className="
              hidden
              text-[9px]
              tracking-[0.2em]
              text-zinc-600
              md:block
            "
          >
            <span className="mr-2 text-green-500">
              ●
            </span>

            {t("status")}
          </span>

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Navbar;