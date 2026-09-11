import { useTranslation } from "react-i18next";

function Footer() {
  const { t } =
    useTranslation("footer");

  const year =
    new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__signal-line" />

      <div className="footer__container">
        {/* ============================================= */}
        {/* TOP */}
        {/* ============================================= */}

        <div className="footer__top">
          {/* Brand */}

          <div className="footer__brand">
            <div className="footer__brand-name">
              <span>
                //
              </span>

              <strong>
                MR.ROBOT_VIBE
              </strong>

              <i />
            </div>

            <p>
              {t(
                "description",
                {
                  defaultValue:
                    "Mr. Robot atmosferasidan ilhomlangan interaktiv va norasmiy fan loyiha.",
                },
              )}
            </p>

            <div className="footer__status">
              <span />

              <strong>
                {t(
                  "status",
                  {
                    defaultValue:
                      "TIZIM FAOL",
                  },
                )}
              </strong>

              <small>
                // AES-256
              </small>
            </div>
          </div>

          {/* Creator */}

          <div className="footer__creator">
            <span className="footer__label">
              {t(
                "creator.label",
                {
                  defaultValue:
                    "YARATUVCHI",
                },
              )}
            </span>

            <div className="footer__creator-card">
              <div className="footer__creator-icon">
                <CodeIcon />
              </div>

              <div>
                <strong>
                  DIMODEV
                </strong>

                <span>
                  {t(
                    "creator.role",
                    {
                      defaultValue:
                        "WEB DEVELOPER",
                    },
                  )}
                </span>
              </div>
            </div>

            <p>
              {t(
                "creator.text",
                {
                  defaultValue:
                    "Dizayn, frontend arxitektura va interaktiv tajriba.",
                },
              )}
            </p>
          </div>
        </div>

        {/* ============================================= */}
        {/* TECHNOLOGY STACK */}
        {/* ============================================= */}

        <div className="footer__tech">
          <div className="footer__tech-header">
            <span>
              {t(
                "technology.label",
                {
                  defaultValue:
                    "TEXNOLOGIYALAR",
                },
              )}
            </span>

            <i />

            <strong>
              STACK // 04
            </strong>
          </div>

          <div className="footer__tech-grid">
            <TechItem
              icon={
                <ReactIcon />
              }
              name="React"
              detail="UI ENGINE"
            />

            <TechItem
              icon={
                <ViteIcon />
              }
              name="Vite"
              detail="BUILD SYSTEM"
            />

            <TechItem
              icon={
                <TailwindIcon />
              }
              name="Tailwind CSS"
              detail="STYLE SYSTEM"
            />

            <TechItem
              icon={
                <GlobeIcon />
              }
              name="i18next"
              detail="UZ / EN"
            />
          </div>
        </div>

        {/* ============================================= */}
        {/* BOTTOM */}
        {/* ============================================= */}

        <div className="footer__bottom">
          <div className="footer__copyright">
            <span>
              © {year}
            </span>

            <strong>
              DIMODEV
            </strong>
          </div>

          <div className="footer__system-meta">
            <span>
              {t(
                "connection",
                {
                  defaultValue:
                    "ANONIM KIRISH",
                },
              )}
            </span>

            <i />

            <span>
              REACT_NODE
            </span>

            <i />

            <span>
              FS_01
            </span>
          </div>

          <div className="footer__fan-note">
            <span>
              {t(
                "fanProject",
                {
                  defaultValue:
                    "Muxlislar tomonidan yaratilgan norasmiy loyiha.",
                },
              )}
            </span>

            <strong>
              ● ONLINE
            </strong>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ========================================================= */
/* TECHNOLOGY ITEM */
/* ========================================================= */

function TechItem({
  icon,
  name,
  detail,
}) {
  return (
    <div className="footer-tech-card">
      <div className="footer-tech-card__icon">
        {icon}
      </div>

      <div>
        <strong>
          {name}
        </strong>

        <span>
          {detail}
        </span>
      </div>

      <i>
        →
      </i>
    </div>
  );
}

/* ========================================================= */
/* ICONS */
/* ========================================================= */

function CodeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M8 9 4 12l4 3M16 9l4 3-4 3M14 5l-4 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="1.7"
        fill="currentColor"
      />

      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        transform="rotate(60 12 12)"
      />

      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        transform="rotate(120 12 12)"
      />
    </svg>
  );
}

function ViteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M3 5.5 12 21 21 5.5 15.5 6.5 12 3l-3.5 3.5L3 5.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      <path
        d="m13.5 6-4 7h3l-2 5 5-8h-3l1-4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M4 10c2.7-4 5.3-4 8 0 2-3 4-3 6 0M6 14c2-3 4-3 6 0 2-3 4-3 6 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <path
        d="M3 12h18M12 3c2.4 2.5 3.5 5.5 3.5 9S14.4 18.5 12 21M12 3c-2.4 2.5-3.5 5.5-3.5 9S9.6 18.5 12 21"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export default Footer;