import {
  useState,
} from "react";

import {
  useTranslation,
} from "react-i18next";

function SecretIdentity({
  completeAction,
}) {
  const { t } =
    useTranslation(
      "secretAccess",
    );

  const [
    analyzed,
    setAnalyzed,
  ] = useState(false);

  const handleAnalyze = () => {
    if (analyzed) {
      return;
    }

    setAnalyzed(true);

    completeAction(
      "identity_analysis",
      5,
    );
  };

  return (
    <section className="secret-identity">
      {/* ============================= */}
      {/* Visual Scanner */}
      {/* ============================= */}

      <div className="secret-identity__visual">
        <div className="secret-identity__grid" />

        <div className="secret-identity__silhouette">
          <span>
            ?
          </span>
        </div>

        <div className="secret-identity__target">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="secret-identity__scan" />

        <div className="secret-identity__crosshair">
          <span />
          <span />
        </div>

        <div className="secret-identity__visual-top">
          <span>
            SUBJECT_SCAN
          </span>

          <strong>
            REC ●
          </strong>
        </div>

        <div className="secret-identity__visual-data">
          <span>
            FACE_MATCH
          </span>

          <strong>
            {analyzed
              ? "73.21%"
              : "??.??%"}
          </strong>
        </div>

        <span className="secret-identity__subject">
          {t(
            "os.identity.subject",
            {
              defaultValue:
                "SUBJECT_UNKNOWN",
            },
          )}
        </span>
      </div>

      {/* ============================= */}
      {/* Content */}
      {/* ============================= */}

      <div className="secret-identity__content">
        <span className="secret-module-kicker">
          //{" "}
          {t(
            "os.identity.kicker",
            {
              defaultValue:
                "IDENTITY_ANALYSIS",
            },
          )}
        </span>

        <h2>
          {t(
            "os.identity.title",
            {
              defaultValue:
                "WHO ARE YOU?",
            },
          )}
        </h2>

        <p>
          {t(
            "os.identity.description",
          )}
        </p>

        {/* ============================= */}
        {/* Not analyzed */}
        {/* ============================= */}

        {!analyzed && (
          <>
            <div className="secret-identity__pending">
              <div>
                <span>
                  FACE_SIGNATURE
                </span>

                <strong>
                  UNKNOWN
                </strong>
              </div>

              <div>
                <span>
                  BEHAVIOR_PROFILE
                </span>

                <strong>
                  WAITING
                </strong>
              </div>

              <div>
                <span>
                  TRUST_SCORE
                </span>

                <strong>
                  LOCKED
                </strong>
              </div>
            </div>

            <button
              type="button"
              className="secret-os-action"
              onClick={
                handleAnalyze
              }
            >
              <span>
                $
              </span>

              {t(
                "os.identity.analyze",
              )}

              <strong>
                +5 ACCESS
              </strong>
            </button>
          </>
        )}

        {/* ============================= */}
        {/* Analysis complete */}
        {/* ============================= */}

        {analyzed && (
          <div className="secret-identity__analysis">
            <div className="secret-identity__analysis-status">
              <span>
                ●
              </span>

              ANALYSIS_COMPLETE

              <strong>
                +5 ACCESS
              </strong>
            </div>

            <div className="secret-identity__result">
              <div>
                <span>
                  {t(
                    "os.identity.fields.identity",
                  )}
                </span>

                <strong>
                  {t(
                    "os.identity.fields.identityValue",
                  )}
                </strong>
              </div>

              <div>
                <span>
                  {t(
                    "os.identity.fields.threat",
                  )}
                </span>

                <strong>
                  {t(
                    "os.identity.fields.threatValue",
                  )}
                </strong>
              </div>

              <div>
                <span>
                  {t(
                    "os.identity.fields.trust",
                  )}
                </span>

                <strong>
                  {t(
                    "os.identity.fields.trustValue",
                  )}
                </strong>
              </div>

              <blockquote>
                {t(
                  "os.identity.result",
                )}
              </blockquote>
            </div>

            <div className="secret-identity__fingerprint">
              <span>
                ID_SIGNATURE
              </span>

              <strong>
                3F:A7:19:C2:
                88:FS:01
              </strong>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default SecretIdentity;