import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import ClassifiedField from "../../components/ClassifiedField/ClassifiedField";
import useScrollReveal from "../../hooks/useScrollReveal";

const PROFILE_CHANGE_DELAY = 4500;
const GLITCH_SWITCH_DELAY = 180;
const GLITCH_END_DELAY = 520;

const profiles = ["elliot", "mrrobot"];

function IdentitySection() {
  const { t } = useTranslation("identity");

  const { elementRef, isVisible } = useScrollReveal();

  const [activeProfile, setActiveProfile] =
    useState("elliot");

  const [isGlitching, setIsGlitching] =
    useState(false);

  const switchProfile = useCallback((profile) => {
    setIsGlitching(true);

    window.setTimeout(() => {
      setActiveProfile(profile);
    }, GLITCH_SWITCH_DELAY);

    window.setTimeout(() => {
      setIsGlitching(false);
    }, GLITCH_END_DELAY);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsGlitching(true);

      const switchTimeout = window.setTimeout(() => {
        setActiveProfile((current) =>
          current === "elliot"
            ? "mrrobot"
            : "elliot",
        );
      }, GLITCH_SWITCH_DELAY);

      const endTimeout = window.setTimeout(() => {
        setIsGlitching(false);
      }, GLITCH_END_DELAY);

      return () => {
        window.clearTimeout(switchTimeout);
        window.clearTimeout(endTimeout);
      };
    }, PROFILE_CHANGE_DELAY);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const profile = {
    name: t(
      `profiles.${activeProfile}.name`,
    ),

    role: t(
      `profiles.${activeProfile}.role`,
    ),

    status: t(
      `profiles.${activeProfile}.status`,
    ),

    threat: t(
      `profiles.${activeProfile}.threat`,
    ),

    network: t(
      `profiles.${activeProfile}.network`,
    ),

    location: t(
      `profiles.${activeProfile}.location`,
    ),

    quote: t(
      `profiles.${activeProfile}.quote`,
    ),

    description: t(
      `profiles.${activeProfile}.description`,
    ),
  };

  return (
    <section
      id="about"
      ref={elementRef}
      className={`
        identity-section
        ${
          isVisible
            ? "identity-section--visible"
            : ""
        }
      `}
    >
      {/* background effects */}

      <div className="identity-section__grid" />

      <div className="identity-section__glow" />

      <div className="identity-section__ghost">
        IDENTITY
      </div>

      {/* main container */}

      <div className="identity-section__container">
        {/* top header */}

        <div className="identity-section__header">
          <span className="identity-section__number">
            {t("number")}
          </span>

          <div className="identity-section__header-line" />

          <span className="identity-section__classification">
            {t("label")}
          </span>
        </div>

        {/* two column layout */}

        <div className="identity-section__layout">
          {/* ===================== */}
          {/* LEFT / IMAGE */}
          {/* ===================== */}

          <div
            className={`
              identity-portrait
              ${
                isGlitching
                  ? "identity-portrait--glitch"
                  : ""
              }
            `}
          >
            {/* Elliot */}

            <div
              className={`
                identity-portrait__image
                identity-portrait__image--elliot
                ${
                  activeProfile === "elliot"
                    ? "is-active"
                    : ""
                }
              `}
            />

            {/* Mr Robot */}

            <div
              className={`
                identity-portrait__image
                identity-portrait__image--mrrobot
                ${
                  activeProfile === "mrrobot"
                    ? "is-active"
                    : ""
                }
              `}
            />

            {/* overlays */}

            <div className="identity-portrait__dark-overlay" />

            <div className="identity-portrait__noise" />

            <div className="identity-portrait__scan-line" />

            {/* camera corners */}

            <div className="identity-portrait__corners">
              <span />
              <span />
              <span />
              <span />
            </div>

            {/* top metadata */}

            <div className="identity-portrait__top">
              <span>
                {t("image.camera")}
              </span>

              <span className="identity-portrait__rec">
                REC ●
              </span>
            </div>

            {/* face target */}

            <div className="identity-portrait__target">
              <span />
              <span />
              <span />
              <span />
            </div>

            {/* redacted face line */}

            <div className="identity-portrait__redacted">
              █████████████
            </div>

            {/* bottom metadata */}

            <div className="identity-portrait__bottom">
              <span>
                {t("image.blocked")}
              </span>

              <span>
                {t("image.signal")}
              </span>
            </div>

            {/* profile label */}

            <div className="identity-portrait__profile">
              <span>
                ACTIVE_SUBJECT
              </span>

              <strong>
                {profile.name}
              </strong>
            </div>
          </div>

          {/* ===================== */}
          {/* RIGHT / INFORMATION */}
          {/* ===================== */}

          <div className="identity-content">
            <div className="identity-content__label">
              <span />

              {t("label")}
            </div>

            <h2 className="identity-content__title">
              <span>
                {t("title")}
              </span>

              <span
                className="
                  glitch
                  identity-content__highlight
                "
                data-text={t(
                  "titleHighlight",
                )}
              >
                {t("titleHighlight")}
              </span>
            </h2>

            <p className="identity-content__description">
              {t("description")}
            </p>

            {/* Profile switch */}

            <div className="identity-switcher">
              {profiles.map((profileName) => {
                const isActive =
                  activeProfile ===
                  profileName;

                return (
                  <button
                    key={profileName}
                    type="button"
                    className={`
                      identity-switcher__button
                      ${
                        isActive
                          ? "identity-switcher__button--active"
                          : ""
                      }
                    `}
                    onClick={() => {
                      if (!isActive) {
                        switchProfile(
                          profileName,
                        );
                      }
                    }}
                  >
                    <span className="identity-switcher__status">
                      {isActive
                        ? "●"
                        : "○"}
                    </span>

                    {t(
                      `profiles.${profileName}.name`,
                    )}
                  </button>
                );
              })}
            </div>

            {/* active subject */}

            <div className="identity-subject">
              <div>
                <span className="identity-subject__small">
                  {t("toggleLabel")}
                </span>

                <div className="identity-subject__name">
                  {profile.name}
                </div>
              </div>

              <div className="identity-subject__file">
                {activeProfile === "elliot"
                  ? "FS-01-ELLIOT"
                  : "FS-02-MRROBOT"}
              </div>
            </div>

            {/* fields */}

            <div className="identity-fields">
              <ClassifiedField
                label={t("fields.name")}
                value={profile.name}
              />

              <ClassifiedField
                label={t("fields.role")}
                value={profile.role}
              />

              <ClassifiedField
                label={t("fields.status")}
                value={profile.status}
              />

              <ClassifiedField
                label={t("fields.threat")}
                value={profile.threat}
                danger={
                  activeProfile ===
                  "mrrobot"
                }
              />

              <ClassifiedField
                label={t("fields.location")}
                value={profile.location}
              />

              <ClassifiedField
                label={t("fields.network")}
                value={profile.network}
              />
            </div>

            {/* Description */}

            <div className="identity-note">
              <span className="identity-note__label">
                // PROFILE_NOTE
              </span>

              <p>
                {profile.description}
              </p>
            </div>

            {/* Quote */}

            <blockquote className="identity-quote">
              <span className="identity-quote__mark">
                "
              </span>

              <p>
                {profile.quote}
              </p>

              <span className="identity-quote__author">
                — {profile.name}
              </span>
            </blockquote>
          </div>
        </div>
      </div>

      <div className="identity-section__vertical-text">
        FSOCIETY // DUAL_IDENTITY_DATABASE
      </div>
    </section>
  );
}

export default IdentitySection;