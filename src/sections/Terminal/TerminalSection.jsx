import { useTranslation } from "react-i18next";

import Terminal from "../../components/Terminal/Terminal";

function TerminalSection() {
  const { t } = useTranslation("terminal");

  return (
    <section
      id="terminal"
      className="terminal-section"
    >
      <div className="terminal-section__glow" />

      <div className="terminal-section__grid">
        <div className="terminal-section__content">
          <div className="terminal-section__label">
            <span className="terminal-section__label-line" />

            <span>
              {t("section.label")}
            </span>
          </div>

          <h2 className="terminal-section__title">
            {t("section.title")}
          </h2>

          <p className="terminal-section__description">
            {t("section.description")}
          </p>

          <p className="terminal-section__hint">
            &gt; {t("section.hint")}
          </p>
        </div>

        <Terminal />
      </div>
    </section>
  );
}

export default TerminalSection;