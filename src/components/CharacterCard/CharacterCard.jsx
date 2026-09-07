import { useTranslation } from "react-i18next";

function CharacterCard({
  character,
  index,
  onOpen,
}) {
  const { t } =
    useTranslation("characters");

  return (
    <button
      type="button"
      className="character-card"
      onClick={() => onOpen(character)}
    >
      <div className="character-card__media">
        <div
          className="character-card__image"
          style={{
            backgroundImage: `
              linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.02),
                rgba(0, 0, 0, 0.82)
              ),
              url("${character.image}")
            `,
          }}
        />

        <div className="character-card__shade" />

        <div className="character-card__noise" />

        <div className="character-card__scan" />

        <div className="character-card__corners">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="character-card__top">
          <span>
            {String(index + 1).padStart(
              2,
              "0",
            )}
          </span>

          <span>
            {character.id}
          </span>
        </div>

        <div className="character-card__tracking">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="character-card__status">
          <span className="character-card__status-dot">
            ●
          </span>

          {t(character.statusKey)}
        </div>
      </div>

      <div className="character-card__content">
        <span className="character-card__file">
          {character.file}
        </span>

        <h3 className="character-card__name">
          {character.name}
        </h3>

        <p className="character-card__role">
          {t(character.roleKey)}
        </p>

        <div className="character-card__footer">
          <span>
            {t(
              character.affiliationKey,
            )}
          </span>

          <span className="character-card__open">
            {t("actions.open")} →
          </span>
        </div>
      </div>
    </button>
  );
}

export default CharacterCard;