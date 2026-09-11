import {
  useEffect,
} from "react";

import {
  useTranslation,
} from "react-i18next";

function CharacterModal({
  character,
  onClose,
}) {
  const { t } =
    useTranslation(
      "characters",
    );

  useEffect(() => {
    if (!character) {
      return undefined;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    const handleKeyDown = (
      event,
    ) => {
      if (
        event.key === "Escape"
      ) {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );

      document.body.style.overflow =
        previousOverflow;
    };
  }, [
    character,
    onClose,
  ]);

  /*
   * MUHIM:
   * character null bo'lsa
   * character.image kabi qiymatlarga
   * tegmaymiz.
   */
  if (!character) {
    return null;
  }

  return (
    <div
      className="character-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="character-modal-title"
    >
      {/* ================================================ */}
      {/* BACKDROP */}
      {/* ================================================ */}

      <button
        type="button"
        className="character-modal__backdrop"
        onClick={
          onClose
        }
        aria-label={t(
          "actions.close",
          {
            defaultValue:
              "Yopish",
          },
        )}
      />

      {/* ================================================ */}
      {/* DIALOG */}
      {/* ================================================ */}

      <div className="character-modal__dialog">
        {/* Close */}

        <button
          type="button"
          className="character-modal__close"
          onClick={
            onClose
          }
          aria-label={t(
            "actions.close",
            {
              defaultValue:
                "Yopish",
            },
          )}
        >
          <span>
            {t(
              "actions.close",
              {
                defaultValue:
                  "YOPISH",
              },
            )}
          </span>

          <strong>
            ×
          </strong>
        </button>

        {/* ============================================== */}
        {/* LEFT / CHARACTER IMAGE */}
        {/* ============================================== */}

        <div className="character-modal__visual">
          <img
            className="character-modal__image"
            src={
              character.image
            }
            alt={
              character.name
            }
            decoding="async"
            draggable="false"
          />

          <div className="character-modal__image-shade" />

          <div className="character-modal__image-noise" />

          <div className="character-modal__scanline" />

          {/* corners */}

          <span className="character-modal__corner character-modal__corner--tl" />
          <span className="character-modal__corner character-modal__corner--tr" />
          <span className="character-modal__corner character-modal__corner--bl" />
          <span className="character-modal__corner character-modal__corner--br" />

          {/* top metadata */}

          <div className="character-modal__visual-header">
            <span>
              {t(
                "modal.classification",
                {
                  defaultValue:
                    "CLASSIFIED",
                },
              )}
            </span>

            <strong>
              REC
              <i />
            </strong>
          </div>

          {/* bottom metadata */}

          <div className="character-modal__visual-footer">
            <div>
              <span>
                FILE
              </span>

              <strong>
                {
                  character.file
                }
              </strong>
            </div>

            <div>
              <span>
                STATUS
              </span>

              <strong>
                {t(
                  character.statusKey,
                )}
              </strong>
            </div>
          </div>
        </div>

        {/* ============================================== */}
        {/* RIGHT / CONTENT */}
        {/* ============================================== */}

        <div className="character-modal__content">
          <div className="character-modal__classification">
            <span>
              //
            </span>

            {t(
              "modal.subject",
              {
                defaultValue:
                  "MAXFIY MA'LUMOT",
              },
            )}

            <strong>
              {
                character.file
              }
            </strong>
          </div>

          <h2
            id="character-modal-title"
          >
            {
              character.name
            }
          </h2>

          <p className="character-modal__description">
            {t(
              character.descriptionKey,
            )}
          </p>

          {/* ============================================ */}
          {/* INFORMATION */}
          {/* ============================================ */}

          <div className="character-modal__details">
            <div className="character-modal__detail">
              <span>
                {t(
                  "fields.role",
                  {
                    defaultValue:
                      "LAVOZIM",
                  },
                )}
              </span>

              <strong>
                {t(
                  character.roleKey,
                )}
              </strong>
            </div>

            <div className="character-modal__detail">
              <span>
                {t(
                  "fields.affiliation",
                  {
                    defaultValue:
                      "ALOQA",
                  },
                )}
              </span>

              <strong>
                {t(
                  character.affiliationKey,
                )}
              </strong>
            </div>

            <div className="character-modal__detail">
              <span>
                {t(
                  "fields.status",
                  {
                    defaultValue:
                      "HOLAT",
                  },
                )}
              </span>

              <strong>
                {t(
                  character.statusKey,
                )}
              </strong>
            </div>

            <div className="character-modal__detail">
              <span>
                {t(
                  "fields.profile",
                  {
                    defaultValue:
                      "PROFIL",
                  },
                )}
              </span>

              <strong>
                {t(
                  character.profileKey,
                )}
              </strong>
            </div>
          </div>

          {/* ============================================ */}
          {/* WARNING */}
          {/* ============================================ */}

          <div className="character-modal__warning">
            <span>
              !
            </span>

            <div>
              <strong>
                SURVEILLANCE_ACTIVE
              </strong>

              <p>
                {t(
                  "modal.warning",
                  {
                    defaultValue:
                      "Ushbu shaxs tizim tomonidan kuzatuv ostida.",
                  },
                )}
              </p>
            </div>
          </div>

          {/* ============================================ */}
          {/* TERMINAL */}
          {/* ============================================ */}

          <div className="character-modal__terminal">
            <span>
              root@fsociety:~$
            </span>

            <strong>
              cat{" "}
              {
                character.file
              }
              .profile
            </strong>

            <i />
          </div>

          {/* bottom */}

          <div className="character-modal__bottom">
            <span>
              FSOCIETY //
              PERSONNEL_DATABASE
            </span>

            <span>
              AES-256 //
              ENCRYPTED
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterModal;