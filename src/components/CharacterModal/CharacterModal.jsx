import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function CharacterModal({
  character,
  onClose,
}) {
  const { t } =
    useTranslation("characters");

  useEffect(() => {
    if (!character) {
      return undefined;
    }

    const previousOverflow =
      document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

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
  }, [character, onClose]);

  /*
   * MUHIM:
   * character null bo'lsa shu yerning
   * o'zida render to'xtaydi.
   *
   * Shundan keyingina character.image,
   * character.name va boshqalarga
   * murojaat qilamiz.
   */
  if (!character) {
    return null;
  }

  return (
    <div
      className="character-modal"
      role="dialog"
      aria-modal="true"
      aria-label={character.name}
    >
      {/* Backdrop */}

      <button
        type="button"
        className="character-modal__backdrop"
        onClick={onClose}
        aria-label={t(
          "actions.close",
        )}
      />

      {/* Modal */}

      <div className="character-modal__window">
        {/* ===================== */}
        {/* Header */}
        {/* ===================== */}

        <div className="character-modal__header">
          <div>
            <span className="character-modal__header-label">
              {t("modal.subject")}
            </span>

            <strong>
              {character.id}
            </strong>
          </div>

          <button
            type="button"
            className="character-modal__close"
            onClick={onClose}
          >
            [
            {" "}
            {t("actions.close")}
            {" "}
            ] ×
          </button>
        </div>

        {/* ===================== */}
        {/* Character Image */}
        {/* ===================== */}

        <div className="character-modal__visual">
          <div
            className="character-modal__image"
            style={{
              backgroundImage: `
                linear-gradient(
                  180deg,
                  rgba(0, 0, 0, 0.02),
                  rgba(0, 0, 0, 0.72)
                ),
                url("${character.image}")
              `,
            }}
          />

          <div className="character-modal__noise" />

          <div className="character-modal__scan" />

          {/* Camera corners */}

          <div className="character-modal__corners">
            <span />
            <span />
            <span />
            <span />
          </div>

          {/* Camera info */}

          <div className="character-modal__camera">
            <span>
              CAM_PERSONNEL_07
            </span>

            <span>
              REC ●
            </span>
          </div>

          {/* Face target */}

          <div className="character-modal__target">
            <span />
            <span />
            <span />
            <span />
          </div>

          {/* Image footer */}

          <div className="character-modal__image-footer">
            <span>
              FACIAL_MATCH
            </span>

            <span>
              97.4%
            </span>
          </div>
        </div>

        {/* ===================== */}
        {/* Information */}
        {/* ===================== */}

        <div className="character-modal__content">
          <span className="character-modal__classification">
            //{" "}
            {t(
              "modal.classification",
            )}
          </span>

          <span className="character-modal__file">
            {character.file}
          </span>

          <h2
            className="character-modal__name glitch"
            data-text={character.name}
          >
            {character.name}
          </h2>

          <p className="character-modal__description">
            {t(
              character.descriptionKey,
            )}
          </p>

          {/* Fields */}

          <div className="character-modal__fields">
            <div className="character-modal__field">
              <span>
                {t("fields.role")}
              </span>

              <strong>
                {t(
                  character.roleKey,
                )}
              </strong>
            </div>

            <div className="character-modal__field">
              <span>
                {t(
                  "fields.affiliation",
                )}
              </span>

              <strong>
                {t(
                  character.affiliationKey,
                )}
              </strong>
            </div>

            <div className="character-modal__field">
              <span>
                {t("fields.status")}
              </span>

              <strong className="character-modal__danger">
                {t(
                  character.statusKey,
                )}
              </strong>
            </div>

            <div className="character-modal__field">
              <span>
                {t("fields.profile")}
              </span>

              <strong>
                {t(
                  character.profileKey,
                )}
              </strong>
            </div>
          </div>

          {/* Fake terminal */}

          <div className="character-modal__terminal">
            <span className="character-modal__terminal-user">
              root@fsociety
            </span>

            <span>
              :
            </span>

            <span>
              ~$
            </span>

            <span>
              cat{" "}
              {character.file.toLowerCase()}
              .profile
            </span>

            <span className="terminal-cursor" />
          </div>
        </div>

        {/* ===================== */}
        {/* Footer */}
        {/* ===================== */}

        <div className="character-modal__footer">
          <span>
            FSOCIETY //
            PERSONNEL_DATABASE
          </span>

          <span>
            {t("modal.warning")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CharacterModal;