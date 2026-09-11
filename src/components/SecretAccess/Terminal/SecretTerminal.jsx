import {
  useRef,
  useState,
} from "react";

import {
  useTranslation,
} from "react-i18next";

function SecretTerminal({
  accessLevel,
  completedActions,
  completeAction,
  onFinalProtocol,
}) {
  const { t } =
    useTranslation(
      "secretAccess",
    );

  const [
    command,
    setCommand,
  ] = useState("");

  const [
    lines,
    setLines,
  ] = useState(() => [
    {
      id: 1,
      type: "system",
      text: t(
        "os.terminal.intro",
      ),
    },

    {
      id: 2,
      type: "system",
      text: t(
        "os.terminal.helpHint",
      ),
    },
  ]);

  const nextId =
    useRef(3);

  const addLines = (
    newLines,
  ) => {
    setLines(
      (current) => [
        ...current,

        ...newLines.map(
          (line) => ({
            id:
              nextId.current++,

            ...line,
          }),
        ),
      ],
    );
  };

  /* ============================= */
  /* Commands */
  /* ============================= */

  const runCommand = (
    rawCommand,
  ) => {
    const normalized =
      rawCommand
        .trim()
        .toLowerCase();

    if (!normalized) {
      return;
    }

    addLines([
      {
        type: "command",

        text:
          `root@fsociety:~$ ${rawCommand}`,
      },
    ]);

    switch (
      normalized
    ) {
      /* HELP */

      case "help":
        addLines([
          {
            type: "output",
            text:
              "help      - available commands",
          },
          {
            type: "output",
            text:
              "whoami    - current identity",
          },
          {
            type: "output",
            text:
              "status    - system status",
          },
          {
            type: "output",
            text:
              "nodes     - network nodes",
          },
          {
            type: "output",
            text:
              "files     - classified storage",
          },
          {
            type: "output",
            text:
              "access    - clearance level",
          },
          {
            type: "output",
            text:
              "history   - session history",
          },
          {
            type: "output",
            text:
              "date      - system timestamp",
          },
          {
            type: "output",
            text:
              "echo      - print text",
          },
          {
            type: "output",
            text:
              "final     - execute final protocol",
          },
          {
            type: "output",
            text:
              "clear     - clear terminal",
          },
        ]);

        break;

      /* WHOAMI */

      case "whoami":
        addLines([
          {
            type: "success",
            text:
              "friend",
          },

          {
            type: "output",
            text:
              "IDENTITY: VARIABLE",
          },

          {
            type: "output",
            text:
              "CLEARANCE: ROOT",
          },

          {
            type: "output",
            text:
              "NODE: FS_01",
          },
        ]);

        break;

      /* STATUS */

      case "status":
        addLines([
          {
            type: "success",
            text:
              "SYSTEM ONLINE",
          },

          {
            type: "output",
            text:
              "ENCRYPTION: AES-256",
          },

          {
            type: "output",
            text:
              "PRIVATE NODE: ACTIVE",
          },

          {
            type: "output",
            text:
              "TRACE STATUS: MONITORED",
          },

          {
            type: "output",
            text:
              `ACCESS: ${accessLevel}%`,
          },
        ]);

        break;

      /* NODES */

      case "nodes":
        addLines([
          {
            type: "output",
            text:
              "FS_NODE_01       ONLINE       98%",
          },

          {
            type: "output",
            text:
              "ECORP_GATEWAY    MONITORED    74%",
          },

          {
            type: "output",
            text:
              "RELAY_05         UNSTABLE     41%",
          },

          {
            type: "warning",
            text:
              "UNKNOWN_NODE     ENCRYPTED    ???",
          },
        ]);

        break;

      /* FILES */

      case "files":
        addLines([
          {
            type: "output",
            text:
              "FS-001  identity_fragment.txt",
          },

          {
            type: "output",
            text:
              "FS-002  node_report.log",
          },

          {
            type: "success",
            text:
              "FS-003  red_wheelbarrow.enc [DECRYPTED]",
          },

          {
            type: "warning",
            text:
              "FS-004  corrupted_memory.dat",
          },

          {
            type: "success",
            text:
              "FS-005  final_message.txt [ROOT]",
          },
        ]);

        break;

      /* ACCESS */

      case "access":
        addLines([
          {
            type: "success",
            text:
              `ACCESS LEVEL: ${accessLevel}%`,
          },

          {
            type: "output",
            text:
              `COMPLETED ACTIONS: ${completedActions.length}`,
          },

          {
            type: "output",
            text:
              "CLEARANCE: ROOT",
          },
        ]);

        break;

      /* HISTORY */

      case "history":
        addLines([
          {
            type: "output",
            text:
              "[01] IDENTITY_ANALYSIS",
          },

          {
            type: "output",
            text:
              "[02] NETWORK_SCAN",
          },

          {
            type: "output",
            text:
              "[03] KEY_EXTRACTION",
          },

          {
            type: "output",
            text:
              "[04] FS-003_DECRYPTION",
          },
        ]);

        break;

      /* DATE */

      case "date":
        addLines([
          {
            type: "output",
            text:
              new Date()
                .toLocaleString(),
          },
        ]);

        break;

      /* CLEAR */

      case "clear":
        setLines([]);

        break;

      /* FINAL */

      case "final": {
        const alreadyCompleted =
          completedActions.includes(
            "final_protocol",
          );

        if (
          !alreadyCompleted
        ) {
          completeAction(
            "final_protocol",
            25,
          );
        }

        addLines([
          {
            type: "warning",
            text:
              "EXECUTING FINAL_PROTOCOL...",
          },

          {
            type: "output",
            text:
              "VERIFYING ROOT CLEARANCE...",
          },

          {
            type: "success",
            text:
              "ROOT CLEARANCE: 100%",
          },

          {
            type: "success",
            text:
              "FINAL_MESSAGE UNLOCKED",
          },

          {
            type: "output",
            text:
              "HELLO, FRIEND.",
          },
        ]);

        window.setTimeout(
          () => {
            onFinalProtocol();
          },
          1200,
        );

        break;
      }

      default: {
        /*
         * echo hello
         */

        if (
          normalized.startsWith(
            "echo ",
          )
        ) {
          addLines([
            {
              type: "output",

              text:
                rawCommand
                  .trim()
                  .slice(5),
            },
          ]);

          break;
        }

        addLines([
          {
            type: "error",

            text:
              `command not found: ${normalized}`,
          },

          {
            type: "output",

            text:
              'type "help" for available commands',
          },
        ]);
      }
    }
  };

  /* ============================= */
  /* Submit */
  /* ============================= */

  const handleSubmit = (
    event,
  ) => {
    event.preventDefault();

    const value =
      command.trim();

    if (!value) {
      return;
    }

    setCommand("");

    runCommand(
      value,
    );
  };

  return (
    <div className="secret-terminal">
      {/* Header */}

      <div className="secret-terminal__header">
        <div>
          <span className="secret-module-kicker">
            //{" "}
            {t(
              "os.terminal.kicker",
            )}
          </span>

          <h2>
            {t(
              "os.terminal.title",
            )}
          </h2>

          <p>
            {t(
              "os.terminal.description",
            )}
          </p>
        </div>

        <div className="secret-terminal__root">
          <span>
            {t(
              "os.terminal.clearance",
            )}
          </span>

          <strong>
            ROOT
          </strong>

          <i />
        </div>
      </div>

      {/* Terminal */}

      <div className="secret-terminal__window">
        <div className="secret-terminal__window-bar">
          <div>
            <span />
            <span />
            <span />
          </div>

          <strong>
            root@fsociety
          </strong>

          <span>
            AES-256
          </span>
        </div>

        <div className="secret-terminal__output">
          {lines.map(
            (line) => (
              <div
                key={
                  line.id
                }
                className={`
                  secret-terminal__line
                  secret-terminal__line--${line.type}
                `}
              >
                {
                  line.text
                }
              </div>
            ),
          )}
        </div>

        <form
          className="secret-terminal__input"
          onSubmit={
            handleSubmit
          }
        >
          <label>
            root@fsociety
            <span>
              :
            </span>
            ~$
          </label>

          <input
            type="text"
            value={
              command
            }
            onChange={(
              event,
            ) =>
              setCommand(
                event.target
                  .value,
              )
            }
            autoComplete="off"
            spellCheck="false"
            autoFocus
          />

          <i />
        </form>
      </div>
    </div>
  );
}

export default SecretTerminal;