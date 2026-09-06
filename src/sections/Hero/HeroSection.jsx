import { useTranslation } from "react-i18next";

import SystemHUD from "../../components/SystemHUD/SystemHUD";
import useMouseParallax from "../../hooks/useMouseParallax";

function HeroSection() {
  const { t } = useTranslation("home");

  const { x, y } = useMouseParallax();

  const scrollToTerminal = () => {
    document
      .getElementById("terminal")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      id="home"
      className="
        hero
        relative
        min-h-[calc(100vh-73px)]
        overflow-hidden
      "
    >
      {/* Ambient red glow */}

      <div
        className="hero__ambient"
        style={{
          transform: `
            translate(
              calc(-50% + ${x * 25}px),
              calc(-50% + ${y * 25}px)
            )
          `,
        }}
      />

      {/* Background ghost text */}

      <div
        className="hero__ghost-text"
        style={{
          transform: `
            translate(
              ${x * -10}px,
              calc(-50% + ${y * -5}px)
            )
          `,
        }}
      >
        FSOCIETY
      </div>

      {/* Vertical lines */}

      <div className="hero__vertical-line hero__vertical-line--one" />
      <div className="hero__vertical-line hero__vertical-line--two" />

      {/* System HUD */}

      <SystemHUD />

      {/* Main hero content */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-73px)]
          max-w-7xl
          items-center
          px-6
          py-20
          lg:px-8
        "
      >
        <div className="w-full">
          {/* Classification */}

          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-10 bg-red-700" />

            <span
              className="
                text-[9px]
                font-bold
                tracking-[0.35em]
                text-red-700
              "
            >
              {t("hero.classification")}
            </span>
          </div>

          {/* Terminal command */}

          <div
            className="
              mb-8
              flex
              items-center
              gap-2
              text-[10px]
              tracking-[0.08em]
              md:text-[11px]
            "
          >
            <span className="text-red-600">
              {t("terminal.user")}
            </span>

            <span className="text-zinc-700">
              :
            </span>

            <span className="text-zinc-500">
              ~$
            </span>

            <span className="text-zinc-400">
              {t("terminal.command")}
            </span>

            <span className="terminal-cursor" />
          </div>

          {/* Eyebrow */}

          <p
            className="
              mb-5
              text-[9px]
              font-bold
              tracking-[0.4em]
              text-zinc-700
              md:text-[10px]
            "
          >
            // {t("hero.eyebrow")}
          </p>

          {/* Main title */}

          <h1 className="hero__title">
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

          {/* Description */}

          <div
            className="
              mt-10
              max-w-xl
              border-l
              border-red-800
              pl-5
              md:mt-12
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

          {/* Actions */}

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
              onClick={scrollToTerminal}
              className="hero-button hero-button--primary"
            >
              <span>
                {t("hero.enter")}
              </span>

              <span>
                →
              </span>
            </button>

            <button
              type="button"
              className="hero-button hero-button--secondary"
            >
              {t("hero.whoAmI")}
            </button>
          </div>

          {/* Bottom system line */}

          <div
            className="
              mt-16
              flex
              max-w-xl
              items-center
              gap-4
              text-[8px]
              tracking-[0.25em]
              text-zinc-800
              md:mt-20
              md:text-[9px]
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
      </div>

      {/* Surveillance warning */}

      <div className="hero__warning">
        <span className="hero__warning-dot">
          ●
        </span>

        {t("hero.warning")}
      </div>
    </section>
  );
}

export default HeroSection;