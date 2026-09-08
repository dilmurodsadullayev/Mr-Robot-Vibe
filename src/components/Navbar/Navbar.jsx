import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const navItems = [
  {
    key: "home",
    href: "#home",
    fallback: "HOME",
  },
  {
    key: "identity",
    href: "#about",
    fallback: "IDENTITY",
  },
  {
    key: "characters",
    href: "#characters",
    fallback: "CHARACTERS",
  },
  {
    key: "ratings",
    href: "#ratings",
    fallback: "RATINGS",
  },
  {
    key: "terminal",
    href: "#terminal",
    fallback: "TERMINAL",
  },
];

function Navbar() {
  const { t } = useTranslation("navbar");

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("home");

  /* ============================= */
  /* Close mobile menu with ESC */
  /* ============================= */

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
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
    };
  }, [menuOpen]);

  /* ============================= */
  /* Detect active section */
  /* ============================= */

  useEffect(() => {
    const sections = navItems
      .map((item) => {
        const id =
          item.href.replace(
            "#",
            "",
          );

        return document.getElementById(
          id,
        );
      })
      .filter(Boolean);

    if (sections.length === 0) {
      return undefined;
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visibleEntries =
            entries.filter(
              (entry) =>
                entry.isIntersecting,
            );

          if (
            visibleEntries.length === 0
          ) {
            return;
          }

          const mostVisible =
            visibleEntries.reduce(
              (current, entry) =>
                entry.intersectionRatio >
                current.intersectionRatio
                  ? entry
                  : current,
            );

          setActiveSection(
            mostVisible.target.id,
          );
        },
        {
          rootMargin:
            "-25% 0px -60% 0px",

          threshold: [
            0,
            0.1,
            0.25,
            0.5,
          ],
        },
      );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* ============================= */
  /* Navigation */
  /* ============================= */

  const handleNavigation = (
    event,
    href,
  ) => {
    event.preventDefault();

    const target =
      document.querySelector(href);

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(
      null,
      "",
      href,
    );

    setActiveSection(
      href.replace("#", ""),
    );

    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      {/* ============================= */}
      {/* Animated red signal line */}
      {/* ============================= */}

      <div className="navbar__signal-line" />

      {/* ============================= */}
      {/* Navbar main container */}
      {/* ============================= */}

      <div className="navbar__container">
        {/* ============================= */}
        {/* Brand */}
        {/* ============================= */}

        <a
          href="#home"
          className="navbar__brand"
          onClick={(event) =>
            handleNavigation(
              event,
              "#home",
            )
          }
        >
          <span className="navbar__brand-mark">
            //
          </span>

          <span className="navbar__brand-text">
            {t("brand", {
              defaultValue:
                "MR.ROBOT_VIBE",
            })}
          </span>

          <span className="navbar__brand-status">
            ●
          </span>
        </a>

        {/* ============================= */}
        {/* Desktop Navigation */}
        {/* ============================= */}

        <nav
          className="navbar__desktop"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const sectionId =
              item.href.replace(
                "#",
                "",
              );

            const isActive =
              activeSection ===
              sectionId;

            return (
              <a
                key={item.key}
                href={item.href}
                className={`
                  nav-link
                  ${
                    isActive
                      ? "nav-link--active"
                      : ""
                  }
                `}
                onClick={(event) =>
                  handleNavigation(
                    event,
                    item.href,
                  )
                }
              >
                {t(
                  `links.${item.key}`,
                  {
                    defaultValue:
                      item.fallback,
                  },
                )}
              </a>
            );
          })}
        </nav>

        {/* ============================= */}
        {/* Right controls */}
        {/* ============================= */}

        <div className="navbar__actions">
          {/* system status */}

          <div className="navbar__system-status">
            <span className="navbar__system-dot">
              ●
            </span>

            <span>
              SYS_ONLINE
            </span>
          </div>

          {/* language */}

          <LanguageSwitcher />

          {/* ============================= */}
          {/* Mobile menu button */}
          {/* ============================= */}

          <button
            type="button"
            className={`
              navbar__menu-button
              ${
                menuOpen
                  ? "navbar__menu-button--open"
                  : ""
              }
            `}
            onClick={() =>
              setMenuOpen(
                (current) =>
                  !current,
              )
            }
            aria-label={
              menuOpen
                ? t("menu.close", {
                    defaultValue:
                      "Close menu",
                  })
                : t("menu.open", {
                    defaultValue:
                      "Open menu",
                  })
            }
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* ============================= */}
      {/* Mobile Navigation */}
      {/* ============================= */}

      <div
        className={`
          navbar-mobile
          ${
            menuOpen
              ? "navbar-mobile--open"
              : ""
          }
        `}
      >
        {/* noise */}

        <div className="navbar-mobile__noise" />

        {/* header */}

        <div className="navbar-mobile__header">
          <span>
            NAVIGATION_PROTOCOL
          </span>

          <span className="navbar-mobile__access">
            ACCESS_GRANTED
          </span>
        </div>

        {/* links */}

        <nav className="navbar-mobile__links">
          {navItems.map(
            (item, index) => {
              const sectionId =
                item.href.replace(
                  "#",
                  "",
                );

              const isActive =
                activeSection ===
                sectionId;

              return (
                <a
                  key={item.key}
                  href={item.href}
                  className={`
                    navbar-mobile__link
                    ${
                      isActive
                        ? "navbar-mobile__link--active"
                        : ""
                    }
                  `}
                  onClick={(event) =>
                    handleNavigation(
                      event,
                      item.href,
                    )
                  }
                >
                  <span className="navbar-mobile__number">
                    {String(
                      index + 1,
                    ).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <span>
                    {t(
                      `links.${item.key}`,
                      {
                        defaultValue:
                          item.fallback,
                      },
                    )}
                  </span>

                  <span className="navbar-mobile__arrow">
                    →
                  </span>
                </a>
              );
            },
          )}
        </nav>

        {/* footer */}

        <div className="navbar-mobile__footer">
          <span>
            FSOCIETY // NAV
          </span>

          <span>
            ENCRYPTED
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;