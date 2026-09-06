import { useTranslation } from "react-i18next";

function HeroSection() {
  const { t } = useTranslation("home");

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-[calc(100vh-73px)]
        items-center
        overflow-hidden
        px-6
        py-20
        lg:px-8
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-red-700/10
          blur-[160px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
        "
      >
        <div
          className="
            mb-10
            flex
            items-center
            gap-3
            text-[11px]
            tracking-wider
            text-zinc-600
          "
        >
          <span className="text-red-600">
            {t("terminal.user")}
          </span>

          <span>:</span>

          <span>~$</span>

          <span className="text-zinc-400">
            {t("terminal.command")}
          </span>

          <span className="terminal-cursor" />
        </div>

        <p
          className="
            mb-5
            text-[10px]
            font-bold
            tracking-[0.35em]
            text-zinc-600
          "
        >
          // {t("hero.eyebrow")}
        </p>

        <h1
          className="
            max-w-6xl
            text-6xl
            font-black
            uppercase
            leading-[0.82]
            tracking-[-0.07em]
            text-red-600
            sm:text-7xl
            md:text-8xl
            lg:text-[120px]
          "
        >
          <span
            className="glitch block"
            data-text={t("hero.titleFirst")}
          >
            {t("hero.titleFirst")}
          </span>

          <span
            className="glitch block"
            data-text={t("hero.titleSecond")}
          >
            {t("hero.titleSecond")}
          </span>
        </h1>

        <div
          className="
            mt-12
            max-w-xl
            border-l
            border-red-700
            pl-5
          "
        >
          <p
            className="
              text-sm
              leading-7
              text-zinc-600
              md:text-base
            "
          >
            {t("hero.description")}

            <br />

            <span className="text-zinc-300">
              {t("hero.descriptionHighlight")}
            </span>
          </p>
        </div>

        <div
          className="
            mt-10
            flex
            flex-wrap
            gap-4
          "
        >
          <button
            type="button"
            className="
              border
              border-red-700
              bg-red-700
              px-7
              py-3
              text-[11px]
              font-bold
              tracking-[0.2em]
              text-white
              transition-all
              duration-300

              hover:bg-transparent
              hover:text-red-500
              hover:shadow-[0_0_35px_rgba(185,28,28,0.25)]
            "
          >
            {t("hero.enter")}
          </button>

          <button
            type="button"
            className="
              border
              border-white/15
              px-7
              py-3
              text-[11px]
              font-bold
              tracking-[0.2em]
              text-zinc-500
              transition-all
              duration-300

              hover:border-white/30
              hover:text-white
            "
          >
            {t("hero.whoAmI")}
          </button>
        </div>

        <div
          className="
            mt-20
            flex
            max-w-xl
            items-center
            gap-4
            text-[9px]
            tracking-[0.2em]
            text-zinc-700
          "
        >
          <span>
            {t("system.label")}
          </span>

          <div className="h-px flex-1 bg-white/10" />

          <span>
            {t("system.section")}
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;