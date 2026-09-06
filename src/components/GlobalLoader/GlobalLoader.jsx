import { useTranslation } from "react-i18next";

function GlobalLoader({
  visible,
  message,
}) {
  const { t } =
    useTranslation("globalLoader");

  if (!visible) {
    return null;
  }

  return (
    <div className="global-loader">
      <div className="noise" />

      <div className="global-loader__scan" />

      <div className="global-loader__content">
        {/* Top system code */}

        <div className="global-loader__system-code">
          SYS://FSOCIETY/PROCESS
        </div>

        {/* Animated logo */}

        <div className="global-loader__visual">
          <div className="global-loader__ring global-loader__ring--outer" />

          <div className="global-loader__ring global-loader__ring--middle" />

          <div className="global-loader__ring global-loader__ring--inner" />

          <div className="global-loader__core">
            F
          </div>
        </div>

        {/* Title */}

        <h2
          className="global-loader__title glitch"
          data-text={t("title")}
        >
          {t("title")}
        </h2>

        {/* Message */}

        <p className="global-loader__message">
          {message || t("message")}
        </p>

        {/* Indeterminate progress */}

        <div className="global-loader__progress">
          <div className="global-loader__progress-bar" />
        </div>

        {/* Bottom meta */}

        <div className="global-loader__meta">
          <span>
            {t("secure")}
          </span>

          <span className="global-loader__meta-dot">
            ●
          </span>

          <span>
            {t("wait")}
          </span>
        </div>

        <div className="global-loader__terminal">
          <span>
            root@fsociety
          </span>

          <span className="text-zinc-600">
            :
          </span>

          <span className="text-zinc-400">
            ~$
          </span>

          <span className="text-zinc-500">
            processing
          </span>

          <span className="terminal-cursor" />
        </div>
      </div>
    </div>
  );
}

export default GlobalLoader;