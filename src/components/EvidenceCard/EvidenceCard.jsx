import { useTranslation } from "react-i18next";

function EvidenceCard({
  evidence,
  index,
  onOpen,
}) {
  const { t } =
    useTranslation("archive");

  return (
    <article
      className="evidence-card"
      onClick={() => onOpen(evidence)}
    >
      <div className="evidence-card__media">
        <div
          className="evidence-card__image"
          style={{
            backgroundImage: `
              linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.05),
                rgba(0, 0, 0, 0.88)
              ),
              url("${evidence.image}")
            `,
          }}
        />

        <div className="evidence-card__scan" />

        <div className="evidence-card__noise" />

        <div className="evidence-card__index">
          {String(index + 1).padStart(
            2,
            "0",
          )}
        </div>

        <div className="evidence-card__file">
          {evidence.id}
        </div>

        <div className="evidence-card__status">
          <span />

          {t(evidence.statusKey)}
        </div>

        <div className="evidence-card__corners">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="evidence-card__content">
        <div className="evidence-card__meta">
          <span>
            {evidence.date}
          </span>

          <span>
            SIG {evidence.signal}
          </span>
        </div>

        <h3 className="evidence-card__title">
          {t(evidence.titleKey)}
        </h3>

        <p className="evidence-card__description">
          {t(evidence.descriptionKey)}
        </p>

        <button
          type="button"
          className="evidence-card__open"
        >
          <span>
            {t("open")}
          </span>

          <span>
            →
          </span>
        </button>
      </div>
    </article>
  );
}

export default EvidenceCard;