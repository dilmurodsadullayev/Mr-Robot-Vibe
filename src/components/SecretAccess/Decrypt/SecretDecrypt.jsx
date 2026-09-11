import {
  useState,
} from "react";

import {
  useTranslation,
} from "react-i18next";

const CORRECT_KEY =
  "hello_friend";

function SecretDecrypt({
  completedActions,
  completeAction,
}) {
  const { t } =
    useTranslation(
      "secretAccess",
    );

  const alreadyCompleted =
    completedActions.includes(
      "decrypt_fs003",
    );

  const [
    key,
    setKey,
  ] = useState("");

  const [
    error,
    setError,
  ] = useState(false);

  const [
    success,
    setSuccess,
  ] = useState(
    alreadyCompleted,
  );

  const handleSubmit = (
    event,
  ) => {
    event.preventDefault();

    if (success) {
      return;
    }

    const normalized =
      key
        .trim()
        .toLowerCase()
        .replaceAll(
          " ",
          "_",
        );

    if (
      normalized !==
      CORRECT_KEY
    ) {
      setError(true);

      return;
    }

    setError(false);
    setSuccess(true);

    completeAction(
      "decrypt_fs003",
      15,
    );
  };

  return (
    <div className="secret-decrypt">
      <div className="secret-decrypt__header">
        <span className="secret-module-kicker">
          // DECRYPTION_ENGINE
        </span>

        <h2>
          {t(
            "os.decrypt.title",
          )}
        </h2>

        <p>
          {t(
            "os.decrypt.description",
          )}
        </p>
      </div>

      <div className="secret-decrypt__layout">
        {/* Cipher */}

        <div className="secret-decrypt__cipher">
          <div className="secret-decrypt__window-title">
            <span>
              FS-003
            </span>

            <strong>
              ENCRYPTED
            </strong>
          </div>

          <pre>
{`7A 31 46 C9 0F 11 A8 42
91 DD 27 5E 0A FF 73 18
C4 22 69 01 DE 88 13 A7
4F 2C 19 B0 75 01 CC 42`}
          </pre>

          <div className="secret-decrypt__hash">
            <span>
              SHA256
            </span>

            <strong>
              7F9A...C201
            </strong>
          </div>
        </div>

        {/* Form */}

        <div className="secret-decrypt__console">
          {!success ? (
            <>
              <span>
                PASSPHRASE_REQUIRED
              </span>

              <h3>
                {t(
                  "os.decrypt.challenge",
                )}
              </h3>

              <p>
                {t(
                  "os.decrypt.hint",
                )}
              </p>

              <form
                onSubmit={
                  handleSubmit
                }
              >
                <label>
                  root@fsociety:~$
                </label>

                <div>
                  <span>
                    decrypt --key
                  </span>

                  <input
                    type="text"
                    value={key}
                    onChange={(
                      event,
                    ) => {
                      setKey(
                        event.target
                          .value,
                      );

                      if (error) {
                        setError(
                          false,
                        );
                      }
                    }}
                    placeholder="___________"
                    autoComplete="off"
                  />
                </div>

                {error && (
                  <p className="secret-decrypt__error">
                    ×{" "}
                    {t(
                      "os.decrypt.error",
                    )}
                  </p>
                )}

                <button
                  type="submit"
                  className="secret-os-action"
                >
                  <span>
                    $
                  </span>

                  {t(
                    "os.decrypt.action",
                  )}

                  <strong>
                    +15 ACCESS
                  </strong>
                </button>
              </form>
            </>
          ) : (
            <div className="secret-decrypt__success">
              <div>
                ✓
              </div>

              <span>
                DECRYPTION_COMPLETE
              </span>

              <h3>
                ACCESS GRANTED
              </h3>

              <p>
                {t(
                  "os.decrypt.success",
                )}
              </p>

              <div className="secret-decrypt__message">
                <span>
                  DECRYPTED_MESSAGE
                </span>

                <blockquote>
                  Hello, friend.
                  The terminal was
                  waiting for you.
                </blockquote>
              </div>

              <strong>
                ROOT TERMINAL //
                UNLOCKED
              </strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SecretDecrypt;