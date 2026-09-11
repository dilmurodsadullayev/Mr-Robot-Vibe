import {
  useMemo,
  useState,
} from "react";

import {
  useTranslation,
} from "react-i18next";

import secretFiles from "../../../data/secret/secretFiles";

function SecretFiles({
  completedActions,
  completeAction,
}) {
  const { t } =
    useTranslation(
      "secretAccess",
    );

  const [
    selectedId,
    setSelectedId,
  ] = useState(
    secretFiles[0].id,
  );

  const missionCompleted =
    completedActions.includes(
      "classified_file_mission",
    );

  const selectedFile =
    useMemo(
      () =>
        secretFiles.find(
          (file) =>
            file.id ===
            selectedId,
        ) ??
        secretFiles[0],
      [selectedId],
    );

  const handleExtractKey =
    () => {
      if (
        selectedFile.id !==
        "FS-003"
      ) {
        return;
      }

      completeAction(
        "classified_file_mission",
        20,
      );
    };

  return (
    <div className="secret-files">
      {/* Header */}

      <div className="secret-files__header">
        <div>
          <span className="secret-module-kicker">
            // CLASSIFIED_STORAGE
          </span>

          <h2>
            {t(
              "os.files.title",
            )}
          </h2>

          <p>
            {t(
              "os.files.description",
            )}
          </p>
        </div>

        <div className="secret-files__storage">
          <span>
            STORAGE
          </span>

          <strong>
            05 FILES
          </strong>

          <small>
            AES-256
          </small>
        </div>
      </div>

      {/* Layout */}

      <div className="secret-files__layout">
        {/* File list */}

        <div className="secret-files__list">
          <div className="secret-files__list-header">
            <span>
              ID
            </span>

            <span>
              FILE
            </span>

            <span>
              STATUS
            </span>
          </div>

          {secretFiles.map(
            (file) => {
              const active =
                file.id ===
                selectedFile.id;

              return (
                <button
                  type="button"
                  key={
                    file.id
                  }
                  className={`
                    secret-file-row
                    secret-file-row--${file.status}
                    ${
                      active
                        ? "secret-file-row--active"
                        : ""
                    }
                  `}
                  onClick={() =>
                    setSelectedId(
                      file.id,
                    )
                  }
                >
                  <span>
                    {
                      file.id
                    }
                  </span>

                  <div>
                    <strong>
                      {
                        file.name
                      }
                    </strong>

                    <small>
                      {
                        file.type
                      }
                      {" // "}
                      {
                        file.size
                      }
                    </small>
                  </div>

                  <span>
                    {file.status ===
                    "open"
                      ? "OPEN"
                      : file.status ===
                          "mission"
                        ? missionCompleted
                          ? "KEY FOUND"
                          : "ENCRYPTED"
                        : file.status ===
                            "corrupted"
                          ? "CORRUPTED"
                          : "ROOT"}
                  </span>
                </button>
              );
            },
          )}
        </div>

        {/* Viewer */}

        <div className="secret-file-viewer">
          <div className="secret-file-viewer__topbar">
            <span>
              FILE_VIEWER
            </span>

            <strong>
              {
                selectedFile.id
              }
            </strong>
          </div>

          <div className="secret-file-viewer__meta">
            <div>
              <span>
                NAME
              </span>

              <strong>
                {
                  selectedFile.name
                }
              </strong>
            </div>

            <div>
              <span>
                TYPE
              </span>

              <strong>
                {
                  selectedFile.type
                }
              </strong>
            </div>

            <div>
              <span>
                SIZE
              </span>

              <strong>
                {
                  selectedFile.size
                }
              </strong>
            </div>
          </div>

          <div className="secret-file-viewer__content">
            {selectedFile.status ===
              "corrupted" ? (
              <div className="secret-file-viewer__corrupted">
                <span>
                  ████ █ ███ █████
                </span>

                <strong>
                  DATA_CORRUPTED
                </strong>

                <span>
                  ██ █████ █ ████
                </span>
              </div>
            ) : selectedFile.status ===
              "root" ? (
              <div className="secret-file-viewer__locked">
                <span>
                  🔒
                </span>

                <strong>
                  ROOT_CLEARANCE_REQUIRED
                </strong>
              </div>
            ) : (
              <>
                <span>
                  root@fsociety:
                  /storage/
                  {
                    selectedFile.id
                  }$
                </span>

                <pre>
                  {
                    selectedFile.content
                  }
                </pre>
              </>
            )}
          </div>

          {selectedFile.id ===
            "FS-003" && (
            <div className="secret-file-viewer__mission">
              {!missionCompleted ? (
                <>
                  <div>
                    <span>
                      MISSION
                    </span>

                    <strong>
                      {t(
                        "os.files.mission.title",
                      )}
                    </strong>

                    <p>
                      {t(
                        "os.files.mission.description",
                      )}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="secret-os-action"
                    onClick={
                      handleExtractKey
                    }
                  >
                    <span>
                      $
                    </span>

                    {t(
                      "os.files.mission.action",
                    )}

                    <strong>
                      +20 ACCESS
                    </strong>
                  </button>
                </>
              ) : (
                <div className="secret-files__key">
                  <span>
                    ● KEY_EXTRACTED
                  </span>

                  <strong>
                    HELLO_FRIEND
                  </strong>

                  <p>
                    DECRYPTION_MODULE //
                    READY
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SecretFiles;