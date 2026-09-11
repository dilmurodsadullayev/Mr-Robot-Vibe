import {
  useTranslation,
} from "react-i18next";

import secretLogs from "../../../data/secret/secretLogs";

function SecretDashboard({
  accessLevel,
  completedActions,
  onNavigate,
}) {
  const { t } =
    useTranslation(
      "secretAccess",
    );

  const getNextClearance =
    () => {
      if (
        accessLevel >=
        75
      ) {
        return "ROOT";
      }

      if (
        accessLevel >=
        40
      ) {
        return "OPERATOR";
      }

      return "LEVEL_02";
    };

  return (
    <div className="secret-dashboard">
      {/* ============================= */}
      {/* Hero */}
      {/* ============================= */}

      <div className="secret-dashboard__hero">
        <div>
          <span>
            // PRIVATE NETWORK
          </span>

          <h1>
            {t(
              "os.dashboard.welcome",
            )}
          </h1>

          <p>
            {t(
              "os.dashboard.description",
            )}
          </p>
        </div>

        {/* Access Ring */}

        <div className="secret-dashboard__access-ring">
          <div
            style={{
              "--access-level":
                `${
                  accessLevel *
                  3.6
                }deg`,
            }}
          >
            <strong>
              {
                accessLevel
              }%
            </strong>

            <span>
              {t(
                "os.access.label",
                {
                  defaultValue:
                    "ACCESS",
                },
              )}
            </span>
          </div>
        </div>
      </div>

      {/* ============================= */}
      {/* Stats */}
      {/* ============================= */}

      <div className="secret-dashboard__stats">
        <StatCard
          label={t(
            "os.dashboard.stats.nodes",
          )}
          value="04"
          sub="01 UNKNOWN"
        />

        <StatCard
          label={t(
            "os.dashboard.stats.files",
          )}
          value="05"
          sub="03 LOCKED"
        />

        <StatCard
          label={t(
            "os.dashboard.stats.alerts",
          )}
          value="01"
          sub="TRACE_SIGNAL"
          danger
        />

        <StatCard
          label={t(
            "os.dashboard.stats.actions",
          )}
          value={
            completedActions.length
          }
          sub="SESSION"
        />
      </div>

      {/* ============================= */}
      {/* Quick Actions */}
      {/* ============================= */}

      <div className="secret-dashboard__quick-actions">
        <button
          type="button"
          onClick={() =>
            onNavigate(
              "identity",
            )
          }
        >
          <span>
            01
          </span>

          <div>
            <strong>
              {t(
                "os.menu.identity",
              )}
            </strong>

            <small>
              IDENTITY_ANALYSIS
            </small>
          </div>

          <i>
            →
          </i>
        </button>

        <button
          type="button"
          onClick={() =>
            onNavigate(
              "network",
            )
          }
        >
          <span>
            02
          </span>

          <div>
            <strong>
              {t(
                "os.menu.network",
              )}
            </strong>

            <small>
              NETWORK_SCAN
            </small>
          </div>

          <i>
            →
          </i>
        </button>

        <button
          type="button"
          onClick={() =>
            onNavigate(
              "logs",
            )
          }
        >
          <span>
            03
          </span>

          <div>
            <strong>
              {t(
                "os.menu.logs",
              )}
            </strong>

            <small>
              EVENT_STREAM
            </small>
          </div>

          <i>
            →
          </i>
        </button>
      </div>

      {/* ============================= */}
      {/* Lower */}
      {/* ============================= */}

      <div className="secret-dashboard__lower">
        {/* Progress */}

        <section className="secret-dashboard__progress-panel">
          <div className="secret-panel-title">
            <span>
              //
            </span>

            <strong>
              {t(
                "os.dashboard.progress",
              )}
            </strong>
          </div>

          <div className="secret-dashboard__progress-track">
            <div
              style={{
                width:
                  `${accessLevel}%`,
              }}
            />
          </div>

          <div className="secret-dashboard__progress-meta">
            <span>
              {t(
                "os.dashboard.labels.guest",
                {
                  defaultValue:
                    "GUEST",
                },
              )}
            </span>

            <span>
              {t(
                "os.dashboard.labels.operator",
                {
                  defaultValue:
                    "OPERATOR",
                },
              )}
            </span>

            <span>
              {t(
                "os.dashboard.labels.root",
                {
                  defaultValue:
                    "ROOT",
                },
              )}
            </span>
          </div>

          <div className="secret-dashboard__next-level">
            <span>
              {t(
                "os.dashboard.labels.nextClearance",
                {
                  defaultValue:
                    "NEXT CLEARANCE",
                },
              )}
            </span>

            <strong>
              {getNextClearance()}
            </strong>
          </div>
        </section>

        {/* Events */}

        <section className="secret-dashboard__events">
          <div className="secret-panel-title">
            <span>
              //
            </span>

            <strong>
              {t(
                "os.dashboard.labels.liveEvents",
                {
                  defaultValue:
                    "LIVE EVENTS",
                },
              )}
            </strong>
          </div>

          <div className="secret-dashboard__event-list">
            {secretLogs
              .slice(
                0,
                4,
              )
              .map(
                (log) => (
                  <div
                    key={
                      log.id
                    }
                    className={`
                      secret-event
                      secret-event--${log.type}
                    `}
                  >
                    <span>
                      {
                        log.time
                      }
                    </span>

                    <i />

                    <strong>
                      {
                        log.message
                      }
                    </strong>
                  </div>
                ),
              )}
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  sub,
  danger = false,
}) {
  return (
    <article
      className={`
        secret-stat-card

        ${
          danger
            ? "secret-stat-card--danger"
            : ""
        }
      `}
    >
      <span>
        {label}
      </span>

      <strong>
        {value}
      </strong>

      <small>
        {sub}
      </small>
    </article>
  );
}

export default SecretDashboard;