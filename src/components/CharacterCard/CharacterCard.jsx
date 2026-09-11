import {
  useTranslation,
} from "react-i18next";

function CharacterCard({
  character,
  index,
  onOpen,
}) {
  const { t } =
    useTranslation(
      "characters",
    );

  if (!character) {
    return null;
  }

  const subjectNumber =
    String(
      index + 1,
    ).padStart(
      3,
      "0",
    );

  return (
    <button
      type="button"
      className="character-card"
      onClick={() =>
        onOpen(character)
      }
      style={{
        "--character-delay":
          `${index * 0.075}s`,
      }}
    >
      {/* ================================================ */}
      {/* MEDIA */}
      {/* ================================================ */}

      <div className="character-card__media">
        <img
          className="character-card__image"
          src={
            character.image
          }
          alt={
            character.name
          }
          loading="lazy"
          decoding="async"
          draggable="false"
        />

        {/* cinematic image layers */}

        <div className="character-card__image-overlay" />

        <div className="character-card__vignette" />

        <div className="character-card__noise" />

        <div className="character-card__scan" />

        {/* corner targeting */}

        <span className="character-card__corner character-card__corner--tl" />
        <span className="character-card__corner character-card__corner--tr" />
        <span className="character-card__corner character-card__corner--bl" />
        <span className="character-card__corner character-card__corner--br" />

        {/* top metadata */}

        <div className="character-card__media-top">
          <span>
            SUBJECT_
            {
              subjectNumber
            }
          </span>

          <strong>
            REC
            <i />
          </strong>
        </div>

        {/* tracking */}

        <div className="character-card__tracking">
          <span />

          TRACKING
        </div>

        {/* file code */}

        <div className="character-card__file-code">
          {
            character.file
          }
        </div>
      </div>

      {/* ================================================ */}
      {/* CONTENT */}
      {/* ================================================ */}

      <div className="character-card__content">
        {/* number */}

        <div className="character-card__subject-line">
          <span>
            SUBJECT_
            {
              subjectNumber
            }
          </span>

          <i />
        </div>

        {/* name */}

        <h3>
          {
            character.name
          }
        </h3>

        {/* role */}

        <p className="character-card__role">
          {t(
            character.roleKey,
          )}
        </p>

        {/* separator */}

        <div className="character-card__separator" />

        {/* footer */}

        <footer className="character-card__footer">
          <div>
            <span>
              AFFILIATION
            </span>

            <strong>
              {t(
                character.affiliationKey,
              )}
            </strong>
          </div>

          <span className="character-card__open">
            {t(
              "actions.open",
            )}

            <i>
              →
            </i>
          </span>
        </footer>
      </div>
    </button>
  );
}

export default CharacterCard;