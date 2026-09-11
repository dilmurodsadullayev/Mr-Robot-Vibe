import {
  useTranslation,
} from "react-i18next";

function FinalProtocol({
  onReturn,
  onLogout,
}) {
  const { t } =
    useTranslation(
      "secretAccess",
    );

  return (
    <div className="secret-finale">
      {/* Background */}

      <div className="secret-finale__grid" />

      <div className="secret-finale__glow" />

      <div className="secret-finale__scan" />

      {/* Top */}

      <div className="secret-finale__top">
        <span>
          // FINAL_PROTOCOL
        </span>

        <strong>
          ROOT+ // 100%
        </strong>
      </div>

      {/* Main */}

      <div className="secret-finale__content">
        <div className="secret-finale__status">
          <i />

          <span>
            {t(
              "os.finale.protocolComplete",
            )}
          </span>
        </div>

        <h1
          className="glitch"
          data-text={t(
            "os.finale.title",
          )}
        >
          {t(
            "os.finale.title",
          )}
        </h1>

        <div className="secret-finale__message">
          <p>
            {t(
              "os.finale.line1",
            )}
          </p>

          <p>
            {t(
              "os.finale.line2",
            )}
          </p>

          <p>
            {t(
              "os.finale.line3",
            )}
          </p>
        </div>

        <div className="secret-finale__signature">
          <span>
            //
          </span>

          <strong>
            fsociety
          </strong>
        </div>

        {/* Stats */}

        <div className="secret-finale__stats">
          <div>
            <span>
              ACCESS
            </span>

            <strong>
              100%
            </strong>
          </div>

          <div>
            <span>
              CLEARANCE
            </span>

            <strong>
              ROOT+
            </strong>
          </div>

          <div>
            <span>
              NODE
            </span>

            <strong>
              FS_01
            </strong>
          </div>

          <div>
            <span>
              STATUS
            </span>

            <strong>
              COMPLETE
            </strong>
          </div>
        </div>

        {/* Terminal line */}

        <div className="secret-finale__terminal">
          <span>
            root@fsociety:~$
          </span>

          <strong>
            echo "hello, friend"
          </strong>

          <i />
        </div>

        {/* Actions */}

        <div className="secret-finale__actions">
          <button
            type="button"
            onClick={
              onReturn
            }
          >
            <span>
              ←
            </span>

            {t(
              "os.finale.return",
            )}
          </button>

          <button
            type="button"
            onClick={
              onLogout
            }
          >
            {t(
              "os.finale.exit",
            )}

            <span>
              ×
            </span>
          </button>
        </div>
      </div>

      <div className="secret-finale__footer">
        <span>
          FINAL_MESSAGE.txt
        </span>

        <span>
          SHA256 // VERIFIED
        </span>

        <span>
          ● SECURE
        </span>
      </div>
    </div>
  );
}

export default FinalProtocol;