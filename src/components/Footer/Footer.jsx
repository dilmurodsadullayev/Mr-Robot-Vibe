import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer
      className="
        relative
        z-10
        border-t
        border-white/10
        bg-black
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          gap-5
          px-6
          py-8
          text-[9px]
          tracking-[0.2em]
          text-zinc-700
          md:flex-row
          md:items-center
          md:justify-between
          lg:px-8
        "
      >
        <span>
          {t("project")}
        </span>

        <div className="flex gap-6">
          <span>
            {t("status")}
          </span>

          <span>
            {t("access")}
          </span>
        </div>

        <span>
          {t("copyright")}
        </span>
      </div>
    </footer>
  );
}

export default Footer;