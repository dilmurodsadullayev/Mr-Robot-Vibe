import {
  useCallback,
  useState,
} from "react";

import { useTranslation } from "react-i18next";

import CharacterCard from "../../components/CharacterCard/CharacterCard";
import CharacterModal from "../../components/CharacterModal/CharacterModal";

import characters from "../../data/characters";

import useScrollReveal from "../../hooks/useScrollReveal";

function CharactersSection() {
  const { t } =
    useTranslation("characters");

  const [
    selectedCharacter,
    setSelectedCharacter,
  ] = useState(null);

  const {
    elementRef,
    isVisible,
  } = useScrollReveal();

  const openCharacter =
    useCallback((character) => {
      setSelectedCharacter(
        character,
      );
    }, []);

  const closeCharacter =
    useCallback(() => {
      setSelectedCharacter(null);
    }, []);

  return (
    <>
      <section
        id="characters"
        ref={elementRef}
        className={`
          characters-section
          ${
            isVisible
              ? "characters-section--visible"
              : ""
          }
        `}
      >
        {/* ============================= */}
        {/* Background */}
        {/* ============================= */}

        <div className="characters-section__grid" />

        <div
          className="
            characters-section__glow
            characters-section__glow--one
          "
        />

        <div
          className="
            characters-section__glow
            characters-section__glow--two
          "
        />

        <div className="characters-section__ghost">
          SUBJECTS
        </div>

        {/* ============================= */}
        {/* Main Container */}
        {/* ============================= */}

        <div className="characters-section__container">
          {/* ============================= */}
          {/* Top Header */}
          {/* ============================= */}

          <div className="characters-section__header">
            <span>
              {t("number")}
            </span>

            <div />

            <span>
              PERSONNEL_DATABASE
            </span>
          </div>

          {/* ============================= */}
          {/* Intro */}
          {/* ============================= */}

          <div className="characters-section__intro">
            <div className="characters-section__label">
              <span />

              {t("label")}
            </div>

            <h2 className="characters-section__title">
              <span>
                {t("title")}
              </span>

              <span
                className="
                  glitch
                  characters-section__highlight
                "
                data-text={t(
                  "titleHighlight",
                )}
              >
                {t(
                  "titleHighlight",
                )}
              </span>
            </h2>

            <p className="characters-section__description">
              {t("description")}
            </p>
          </div>

          {/* ============================= */}
          {/* Database Status */}
          {/* ============================= */}

          <div className="characters-database">
            <div>
              <span>
                DATABASE
              </span>

              <strong>
                ONLINE
              </strong>
            </div>

            <div>
              <span>
                SUBJECTS
              </span>

              <strong>
                {String(
                  characters.length,
                ).padStart(
                  2,
                  "0",
                )}
              </strong>
            </div>

            <div>
              <span>
                ACCESS
              </span>

              <strong>
                RESTRICTED
              </strong>
            </div>

            <div>
              <span>
                ENCRYPTION
              </span>

              <strong>
                AES-256
              </strong>
            </div>
          </div>

          {/* ============================= */}
          {/* Character Cards */}
          {/* ============================= */}

          <div className="characters-grid">
            {characters.map(
              (
                character,
                index,
              ) => (
                <CharacterCard
                  key={character.id}
                  character={character}
                  index={index}
                  onOpen={
                    openCharacter
                  }
                />
              ),
            )}
          </div>
        </div>

        {/* ============================= */}
        {/* Vertical Decoration */}
        {/* ============================= */}

        <div className="characters-section__vertical">
          FSOCIETY //
          SUBJECT_TRACKING
        </div>
      </section>

      {/* ============================= */}
      {/* Character Modal */}
      {/* ============================= */}

      <CharacterModal
        character={
          selectedCharacter
        }
        onClose={
          closeCharacter
        }
      />
    </>
  );
}

export default CharactersSection;