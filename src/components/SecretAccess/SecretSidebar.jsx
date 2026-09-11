import {
  useTranslation,
} from "react-i18next";

const menuItems = [
  {
    id: "dashboard",
    number: "01",
    icon: "◫",
  },
  {
    id: "identity",
    number: "02",
    icon: "◉",
  },
  {
    id: "network",
    number: "03",
    icon: "⌘",
  },
  {
    id: "files",
    number: "04",
    icon: "▣",
  },
  {
    id: "decrypt",
    number: "05",
    icon: "◇",
  },
  {
    id: "logs",
    number: "06",
    icon: "≡",
  },
  {
    id: "terminal",
    number: "07",
    icon: ">_",
  },
];

function SecretSidebar({
  activeModule,
  accessLevel,
  onChange,
  onLogout,
}) {
  const { t } =
    useTranslation(
      "secretAccess",
    );

  const getRequirement = (
    id,
  ) => {
    switch (id) {
      case "files":
        return 40;

      case "decrypt":
        return 60;

      case "terminal":
        return 75;

      default:
        return 0;
    }
  };

  return (
    <aside className="secret-os-sidebar">
      {/* ============================= */}
      {/* Brand / HOME */}
      {/* ============================= */}

      <button
        type="button"
        className="secret-os-sidebar__brand secret-os-sidebar__brand-button"
        onClick={() =>
          onChange(
            "dashboard",
          )
        }
      >
        <span>
          //
        </span>

        <div>
          <strong>
            FSOCIETY
          </strong>

          <small>
            PRIVATE_NODE
          </small>
        </div>
      </button>

      {/* Navigation label */}

      <div className="secret-os-sidebar__label">
        {t(
          "os.shell.navigation",
          {
            defaultValue:
              "NAVIGATION",
          },
        )}
      </div>

      {/* ============================= */}
      {/* Navigation */}
      {/* ============================= */}

      <nav className="secret-os-sidebar__nav">
        {menuItems.map(
          (item) => {
            const isActive =
              activeModule ===
              item.id;

            const requirement =
              getRequirement(
                item.id,
              );

            const isLocked =
              requirement > 0 &&
              accessLevel <
                requirement;

            return (
              <button
                key={
                  item.id
                }
                type="button"
                className={`
                  secret-os-sidebar__item

                  ${
                    isActive
                      ? "secret-os-sidebar__item--active"
                      : ""
                  }

                  ${
                    isLocked
                      ? "secret-os-sidebar__item--locked"
                      : ""
                  }
                `}
                onClick={() =>
                  onChange(
                    item.id,
                  )
                }
              >
                <span className="secret-os-sidebar__number">
                  {
                    item.number
                  }
                </span>

                <span className="secret-os-sidebar__icon">
                  {
                    item.icon
                  }
                </span>

                <strong>
                  {t(
                    `os.menu.${item.id}`,
                    {
                      defaultValue:
                        item.id.toUpperCase(),
                    },
                  )}
                </strong>

                {isLocked ? (
                  <span className="secret-os-sidebar__lock">
                    {requirement}%
                  </span>
                ) : (
                  <span className="secret-os-sidebar__arrow">
                    →
                  </span>
                )}
              </button>
            );
          },
        )}
      </nav>

      {/* ============================= */}
      {/* Logout */}
      {/* ============================= */}

      <button
        type="button"
        className="secret-os-sidebar__logout"
        onClick={
          onLogout
        }
      >
        <span>
          08
        </span>

        <strong>
          {t(
            "os.menu.logout",
          )}
        </strong>

        <span>
          ×
        </span>
      </button>

      {/* ============================= */}
      {/* Footer */}
      {/* ============================= */}

      <div className="secret-os-sidebar__footer">
        <span>
          NODE
        </span>

        <strong>
          FS_01
        </strong>

        <i />
      </div>
    </aside>
  );
}

export default SecretSidebar;