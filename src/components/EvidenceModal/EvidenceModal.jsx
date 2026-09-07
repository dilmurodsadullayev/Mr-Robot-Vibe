import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function EvidenceModal({
  evidence,
  onClose,
}) {
  const { t } =
    useTranslation("archive");

  useEffect(() => {
    if (!evidence) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [evidence, onClose]);

  if (!evidence) {
    return null;
  }

  return (
    <div
      className="evidence-modal"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        className="evidence-modal__backdrop"
        onClick={onClose}
        aria-label={t("modal.close")}
      />

      <div className="evidence-modal__window">
        {/* Header */}

        <div className="evidence-modal__header">
          <div>
            <span className="evidence-modal__small">
              {t("modal.file")}
            </span>

            <strong>
              {evidence.id}
            </strong>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="evidence-modal__close"
          >
            [ {t("modal.close")} ] ×
          </button>
        </div>

        {/* Image */}

        <div className="evidence-modal__media">
          <div
            className="evidence-modal__image"
            style={{
              backgroundImage: `
                linear-gradient(
                  180deg,
                  rgba(0,0,0,0.03),
                  rgba(0,0,0,0.5)
                ),
                url("${evidence.image}")
              `,
            }}
          />

          <div className="evidence-modal__scan" />

          <div className="evidence-modal__target">
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="evidence-modal__warning">
            REC ●
          </div>
        </div>

        {/* Information */}

        <div className="evidence-modal__information">
          <div className="evidence-modal__main">
            <span className="evidence-modal__classification">
              //{" "}
              {t(
                "modal.classification",
              )}
            </span>

            <h3>
              {t(
                evidence.titleKey,
              )}
            </h3>

            <p>
              {t(
                evidence.descriptionKey,
              )}
            </p>
          </div>

          <div className="evidence-modal__metadata">
            <div>
              <span>
                {t(
                  "status.label",
                )}
              </span>

              <strong>
                {t(
                  evidence.statusKey,
                )}
              </strong>
            </div>

            <div>
              <span>
                {t(
                  "source.label",
                )}
              </span>

              <strong>
                {t(
                  evidence.sourceKey,
                )}
              </strong>
            </div>

            <div>
              <span>
                {t("modal.date")}
              </span>

              <strong>
                {evidence.date}
              </strong>
            </div>

            <div>
              <span>
                {t("modal.signal")}
              </span>

              <strong>
                {evidence.signal}
              </strong>
            </div>
          </div>
        </div>

        <div className="evidence-modal__footer">
          <span>
            AES-256 // FSOCIETY_ARCHIVE
          </span>

          <span>
            {t("modal.warning")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default EvidenceModal;