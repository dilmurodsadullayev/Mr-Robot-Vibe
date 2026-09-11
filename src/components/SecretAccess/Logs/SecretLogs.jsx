import {
  useTranslation,
} from "react-i18next";

import secretLogs from "../../../data/secret/secretLogs";

function SecretLogs() {
  const { t } =
    useTranslation(
      "secretAccess",
    );

  return (
    <div className="secret-logs">
      <div className="secret-logs__header">
        <span className="secret-module-kicker">
          // EVENT_STREAM
        </span>

        <h2>
          {t(
            "os.logs.title",
          )}
        </h2>

        <p>
          {t(
            "os.logs.description",
          )}
        </p>
      </div>

      <div className="secret-logs__terminal">
        <div className="secret-logs__terminal-header">
          <span>
            SESSION_LOG
          </span>

          <span>
            ● LIVE
          </span>
        </div>

        <div className="secret-logs__lines">
          {secretLogs.map(
            (log) => (
              <div
                key={
                  log.id
                }
                className={`
                  secret-log-line
                  secret-log-line--${log.type}
                `}
              >
                <span>
                  [
                  {
                    log.time
                  }
                  ]
                </span>

                <span>
                  {
                    log.type.toUpperCase()
                  }
                </span>

                <strong>
                  {
                    log.message
                  }
                </strong>
              </div>
            ),
          )}

          <div className="secret-log-line">
            <span>
              [
              LIVE
              ]
            </span>

            <span>
              INFO
            </span>

            <strong>
              WAITING_FOR_EVENT
              <i />
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecretLogs;