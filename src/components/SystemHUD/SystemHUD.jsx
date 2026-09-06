import { useTranslation } from "react-i18next";

function SystemHUD() {
  const { t } = useTranslation("systemHud");

  return (
    <>
      <div className="hud hud--left">
        <div className="hud__line">
          <span>{t("surveillance")}</span>
          <span className="hud__value">
            {t("encrypted")}
          </span>
        </div>

        <div className="hud__line">
          <span>{t("network")}</span>
          <span className="hud__value">
            {t("secure")}
          </span>
        </div>

        <div className="hud__line">
          <span>{t("identity")}</span>
          <span className="hud__value">
            {t("anonymous")}
          </span>
        </div>
      </div>

      <div className="hud hud--right">
        <div className="hud__line">
          <span>{t("location")}</span>
          <span className="hud__value">
            {t("hidden")}
          </span>
        </div>

        <div className="hud__line">
          <span>{t("connection")}</span>

          <span className="hud__value">
            <span className="hud__pulse">
              ●
            </span>

            {t("active")}
          </span>
        </div>

        <div className="hud__coordinates">
          41.3XX / 60.6XX
        </div>
      </div>
    </>
  );
}

export default SystemHUD;