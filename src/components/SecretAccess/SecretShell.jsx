import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  useTranslation,
} from "react-i18next";

import SecretSidebar from "./SecretSidebar";

import SecretDashboard from "./Dashboard/SecretDashboard";
import SecretIdentity from "./Identity/SecretIdentity";
import SecretNetwork from "./Network/SecretNetwork";
import SecretFiles from "./Files/SecretFiles";
import SecretDecrypt from "./Decrypt/SecretDecrypt";
import SecretLogs from "./Logs/SecretLogs";
import SecretTerminal from "./Terminal/SecretTerminal";

/* ========================================================= */
/* MODULE CONFIG */
/* ========================================================= */

const VALID_MODULES = [
  "dashboard",
  "identity",
  "network",
  "files",
  "decrypt",
  "logs",
  "terminal",
];

const MODULE_REQUIREMENTS = {
  dashboard: 0,
  identity: 0,
  network: 0,
  files: 40,
  decrypt: 60,
  logs: 0,
  terminal: 75,
};

/* ========================================================= */
/* SECRET SHELL */
/* ========================================================= */

function SecretShell({
  accessLevel,
  completedActions,
  completeAction,
  onLogout,
}) {
  const { t } =
    useTranslation(
      "secretAccess",
    );

  const [
    activeModule,
    setActiveModule,
  ] = useState(
    "dashboard",
  );

  const workspaceRef =
    useRef(null);

  /* ======================================================= */
  /* NAVIGATION */
  /* ======================================================= */

  const handleModuleChange =
    useCallback(
      (moduleId) => {
        if (
          !VALID_MODULES.includes(
            moduleId,
          )
        ) {
          setActiveModule(
            "dashboard",
          );

          return;
        }

        setActiveModule(
          moduleId,
        );
      },
      [],
    );

  /* ======================================================= */
  /* RESET WORKSPACE SCROLL */
  /* ======================================================= */

  useEffect(() => {
    if (
      !workspaceRef.current
    ) {
      return;
    }

    workspaceRef.current.scrollTop =
      0;

    workspaceRef.current.scrollLeft =
      0;
  }, [activeModule]);

  /* ======================================================= */
  /* CLEARANCE */
  /* ======================================================= */

  const getClearance = () => {
    if (
      accessLevel >= 100
    ) {
      return "ROOT+";
    }

    if (
      accessLevel >= 75
    ) {
      return "ROOT";
    }

    if (
      accessLevel >= 40
    ) {
      return "OPERATOR";
    }

    return "GUEST";
  };

  const clearance =
    getClearance();

  /* ======================================================= */
  /* CURRENT MODULE LOCK */
  /* ======================================================= */

  const currentRequirement =
    MODULE_REQUIREMENTS[
      activeModule
    ] ?? 0;

  const currentLocked =
    currentRequirement > 0 &&
    accessLevel <
      currentRequirement;

  /* ======================================================= */
  /* MODULE RENDERER */
  /* ======================================================= */

  const renderModule = () => {
    /*
     * Access yetarli bo'lmasa
     * avval lock screen chiqaramiz.
     */

    if (currentLocked) {
      return (
        <LockedModule
          moduleId={
            activeModule
          }
          title={t(
            `os.locked.${activeModule}.title`,
            {
              defaultValue:
                activeModule.toUpperCase(),
            },
          )}
          text={t(
            `os.locked.${activeModule}.description`,
            {
              defaultValue:
                "Higher clearance required.",
            },
          )}
          requirement={
            currentRequirement
          }
          current={
            accessLevel
          }
          t={t}
        />
      );
    }

    switch (
      activeModule
    ) {
      /* =================================================== */
      /* DASHBOARD */
      /* =================================================== */

      case "dashboard":
        return (
          <SecretDashboard
            accessLevel={
              accessLevel
            }
            completedActions={
              completedActions
            }
            onNavigate={
              handleModuleChange
            }
          />
        );

      /* =================================================== */
      /* IDENTITY */
      /* =================================================== */

      case "identity":
        return (
          <SecretIdentity
            completeAction={
              completeAction
            }
          />
        );

      /* =================================================== */
      /* NETWORK */
      /* =================================================== */

      case "network":
        return (
          <SecretNetwork
            completeAction={
              completeAction
            }
          />
        );

      /* =================================================== */
      /* CLASSIFIED FILES */
      /* =================================================== */

      case "files":
        return (
          <SecretFiles
            completedActions={
              completedActions
            }
            completeAction={
              completeAction
            }
          />
        );

      /* =================================================== */
      /* DECRYPT */
      /* =================================================== */

      case "decrypt":
        return (
          <SecretDecrypt
            completedActions={
              completedActions
            }
            completeAction={
              completeAction
            }
          />
        );

      /* =================================================== */
      /* LOGS */
      /* =================================================== */

      case "logs":
        return (
          <SecretLogs />
        );

      /* =================================================== */
      /* ROOT TERMINAL */
      /* =================================================== */

      case "terminal":
        return (
          <SecretTerminal
            accessLevel={
              accessLevel
            }
            completedActions={
              completedActions
            }
            completeAction={
              completeAction
            }
          />
        );

      /* =================================================== */
      /* FALLBACK */
      /* =================================================== */

      default:
        return (
          <SecretDashboard
            accessLevel={
              accessLevel
            }
            completedActions={
              completedActions
            }
            onNavigate={
              handleModuleChange
            }
          />
        );
    }
  };

  /* ======================================================= */
  /* RENDER */
  /* ======================================================= */

  return (
    <div className="secret-os">
      {/* =================================================== */}
      {/* TOP BAR */}
      {/* =================================================== */}

      <div className="secret-os__topbar">
        <div className="secret-os__window-controls">
          <span />
          <span />
          <span />
        </div>

        <div className="secret-os__path">
          root@fsociety
          <span>
            :
          </span>

          /private_node/
          {
            activeModule
          }
        </div>

        <div className="secret-os__clearance">
          <span>
            {
              clearance
            }
          </span>

          <i />

          <strong>
            {
              accessLevel
            }%
          </strong>
        </div>
      </div>

      {/* =================================================== */}
      {/* BODY */}
      {/* =================================================== */}

      <div className="secret-os__body">
        {/* ================================================= */}
        {/* SIDEBAR */}
        {/* ================================================= */}

        <SecretSidebar
          activeModule={
            activeModule
          }
          accessLevel={
            accessLevel
          }
          onChange={
            handleModuleChange
          }
          onLogout={
            onLogout
          }
        />

        {/* ================================================= */}
        {/* WORKSPACE */}
        {/* ================================================= */}

        <main className="secret-os__workspace">
          {/* Workspace header */}

          <div className="secret-os__workspace-header">
            <div>
              <span>
                {t(
                  "os.shell.privateNode",
                  {
                    defaultValue:
                      "PRIVATE_NODE",
                  },
                )}
                {" // "}
              </span>

              <strong>
                {t(
                  `os.menu.${activeModule}`,
                  {
                    defaultValue:
                      activeModule.toUpperCase(),
                  },
                )}
              </strong>
            </div>

            <div className="secret-os__workspace-status">
              <span>
                ●
              </span>

              {t(
                "os.shell.systemOnline",
                {
                  defaultValue:
                    "SYSTEM_ONLINE",
                },
              )}
            </div>
          </div>

          {/* Workspace content */}

          <div
            ref={
              workspaceRef
            }
            className="secret-os__workspace-content"
          >
            <div
              key={
                activeModule
              }
              className="secret-os__module-view"
            >
              {renderModule()}
            </div>
          </div>
        </main>
      </div>

      {/* =================================================== */}
      {/* STATUS BAR */}
      {/* =================================================== */}

      <div className="secret-os__statusbar">
        <span>
          AES-256
        </span>

        <span>
          {t(
            "os.shell.session",
            {
              defaultValue:
                "SESSION",
            },
          )}
          {" // "}
          0xF5C0
        </span>

        <span>
          {
            completedActions.length
          }
          {" "}
          {t(
            "os.shell.actions",
            {
              defaultValue:
                "ACTIONS",
            },
          )}
        </span>

        <span>
          {t(
            "os.shell.clearance",
            {
              defaultValue:
                "CLEARANCE",
            },
          )}
          {" // "}
          {
            clearance
          }
        </span>

        <span className="secret-os__statusbar-online">
          ●{" "}
          {t(
            "os.shell.secureConnection",
            {
              defaultValue:
                "SECURE CONNECTION",
            },
          )}
        </span>
      </div>
    </div>
  );
}

/* ========================================================= */
/* LOCKED MODULE */
/* ========================================================= */

function LockedModule({
  moduleId,
  title,
  text,
  requirement,
  current,
  t,
}) {
  const percentage =
    Math.min(
      (
        current /
        requirement
      ) *
        100,
      100,
    );

  return (
    <div className="secret-locked-module">
      {/* lock radar */}

      <div className="secret-locked-module__signal">
        <div className="secret-locked-module__icon">
          🔒
        </div>

        <span />
        <span />
      </div>

      {/* label */}

      <span className="secret-module-kicker">
        //{" "}
        {t(
          "os.locked.label",
          {
            defaultValue:
              "MODULE_LOCKED",
          },
        )}
      </span>

      {/* title */}

      <h2>
        {title}
      </h2>

      {/* description */}

      <p>
        {text}
      </p>

      {/* access progress */}

      <div className="secret-locked-module__progress">
        <div>
          <span>
            {t(
              "os.access.label",
              {
                defaultValue:
                  "ACCESS",
              },
            )}
          </span>

          <strong>
            {current}% /
            {" "}
            {
              requirement
            }%
          </strong>
        </div>

        <div className="secret-locked-module__track">
          <span
            style={{
              width:
                `${percentage}%`,
            }}
          />
        </div>
      </div>

      {/* requirement */}

      <div className="secret-locked-module__requirement">
        {t(
          "os.locked.requirement",
          {
            defaultValue:
              "REQUIREMENT",
          },
        )}
        {" // "}

        <strong>
          ACCESS_
          {
            requirement
          }%
        </strong>
      </div>

      <small className="secret-locked-module__module-id">
        MODULE //
        {" "}
        {moduleId.toUpperCase()}
      </small>
    </div>
  );
}

export default SecretShell;