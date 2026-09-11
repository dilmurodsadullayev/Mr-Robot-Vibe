import {
  useRef,
  useState,
} from "react";

import {
  useTranslation,
} from "react-i18next";

const INITIAL_LINES = [
  {
    id: 1,
    type: "system",
    text:
      "FSOCIETY ROOT TERMINAL v1.0",
  },
  {
    id: 2,
    type: "system",
    text:
      'Type "help" to list available commands.',
  },
];

function SecretTerminal({
  accessLevel,
  completedActions,
  completeAction,
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
  ] = useState(
    INITIAL_LINES,
  );

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

    switch (normalized) {
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
              "final     - execute final protocol",
          },
          {
            type: "output",
            text:
              "clear     - clear terminal",
          },
        ]);
        break;

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
        ]);
        break;

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
        ]);
        break;

      case "nodes":
        addLines([
          {
            type: "output",
            text:
              "FS_NODE_01       ONLINE      98%",
          },
          {
            type: "output",
            text:
              "ECORP_GATEWAY    MONITORED   74%",
          },
          {
            type: "output",
            text:
              "RELAY_05         UNSTABLE    41%",
          },
          {
            type: "warning",
            text:
              "UNKNOWN_NODE     ENCRYPTED   ???",
          },
        ]);
        break;

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
            type: "output",
            text:
              "FS-005  final_message.txt [ROOT]",
          },
        ]);
        break;

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
        ]);
        break;

      case "final":
        if (
          !completedActions.includes(
            "final_protocol",
          )
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
          {
            type: "output",
            text:
              "YOU WERE NEVER JUST VISITING THE SYSTEM.",
          },
          {
            type: "output",
            text:
              "YOU WERE PART OF IT.",
          },
        ]);
        break;

      case "clear":
        setLines([]);

        break;

      default:
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
  };

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
      <div className="secret-terminal__header">
        <div>
          <span className="secret-module-kicker">
            // ROOT_TERMINAL
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
            CLEARANCE
          </span>

          <strong>
            ROOT
          </strong>

          <i />
        </div>
      </div>

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
            value={command}
            onChange={(
              event,
            ) =>
              setCommand(
                event.target.value,
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