import {
  useState,
} from "react";

import {
  useTranslation,
} from "react-i18next";

const SECRET_KEYS = [
  "F",
  "S",
  "O",
  "C",
  "I",
  "E",
  "T",
  "Y",
];

function SecretSignalHint() {
  const { t } =
    useTranslation(
      "secretAccess",
    );

  const [
    expanded,
    setExpanded,
  ] = useState(false);

  return (
    <div
      className={`
        secret-signal
        ${
          expanded
            ? "secret-signal--expanded"
            : ""
        }
      `}
    >
      {/* Expanded panel */}

      <div className="secret-signal__panel">
        <div className="secret-signal__panel-noise" />

        <div className="secret-signal__panel-header">
          <div>
            <span className="secret-signal__tiny-dot" />

            <span>
              {t(
                "hint.signal",
              )}
            </span>
          </div>

          <button
            type="button"
            onClick={() =>
              setExpanded(false)
            }
            aria-label={t(
              "hint.close",
            )}
          >
            ×
          </button>
        </div>

        <div className="secret-signal__classification">
          //{" "}
          {t(
            "hint.classified",
          )}
        </div>

        <h3>
          {t(
            "hint.title",
          )}
        </h3>

        <p>
          {t(
            "hint.description",
          )}
        </p>

        <div className="secret-signal__sequence-label">
          <span>
            {t(
              "hint.keyboard",
            )}
          </span>

          <span>
            {t(
              "hint.instruction",
            )}
          </span>
        </div>

        <div className="secret-signal__keys">
          {SECRET_KEYS.map(
            (key, index) => (
              <kbd
                key={`${key}-${index}`}
                style={{
                  "--secret-key-delay":
                    `${index * 0.06}s`,
                }}
              >
                {key}
              </kbd>
            ),
          )}
        </div>

        <div className="secret-signal__command">
          <span>
            root@visitor:~$
          </span>

          <strong>
            {t(
              "hint.sequence",
            ).toLowerCase()}
          </strong>

          <i />
        </div>

        <div className="secret-signal__note">
          <span>
            !
          </span>

          <p>
            {t(
              "hint.note",
            )}
          </p>
        </div>

        <div className="secret-signal__panel-footer">
          <span>
            FSOCIETY
          </span>

          <span>
            SIGNAL_0x01
          </span>
        </div>
      </div>

      {/* Floating beacon */}

      <button
        type="button"
        className="secret-signal__beacon"
        onClick={() =>
          setExpanded(
            (current) =>
              !current,
          )
        }
        aria-label={t(
          "hint.open",
        )}
        aria-expanded={
          expanded
        }
      >
        <div className="secret-signal__radar">
          <span className="secret-signal__radar-ring secret-signal__radar-ring--one" />

          <span className="secret-signal__radar-ring secret-signal__radar-ring--two" />

          <span className="secret-signal__radar-ring secret-signal__radar-ring--three" />

          <span className="secret-signal__radar-line" />

          <span className="secret-signal__core">
            ?
          </span>
        </div>

        <div className="secret-signal__beacon-text">
          <span>
            {t(
              "hint.status",
            )}
          </span>

          <strong>
            FS_01
          </strong>
        </div>
      </button>
    </div>
  );
}

export default SecretSignalHint;