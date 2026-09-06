import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import useTerminal from "../../hooks/useTerminal";
import TerminalLine from "./TerminalLine";

function Terminal() {
  const { t } = useTranslation("terminal");

  const {
    lines,
    input,
    setInput,
    executeCommand,
    handleKeyDown,
  } = useTerminal();

  const inputRef = useRef(null);
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    const terminalBody = terminalBodyRef.current;

    if (!terminalBody) {
      return;
    }

    terminalBody.scrollTop =
      terminalBody.scrollHeight;
  }, [lines]);

  const focusTerminal = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className="terminal-window"
      onClick={focusTerminal}
      role="presentation"
    >
      {/* Top bar */}

      <div className="terminal-window__header">
        <div className="terminal-window__controls">
          <span className="terminal-control terminal-control--red" />
          <span className="terminal-control" />
          <span className="terminal-control" />
        </div>

        <div className="terminal-window__title">
          {t("window.title")}
        </div>

        <div className="terminal-window__status">
          <span className="terminal-window__status-dot">
            ●
          </span>

          {t("window.status")}
        </div>
      </div>

      {/* Terminal output */}

      <div
        ref={terminalBodyRef}
        className="terminal-window__body"
      >
        {lines.map((line) => (
          <TerminalLine
            key={line.id}
            line={line}
          />
        ))}

        {/* Input */}

        <div className="terminal-input">
          <span className="terminal-input__user">
            {t("window.user")}
          </span>

          <span className="terminal-input__separator">
            @
          </span>

          <span className="terminal-input__host">
            {t("window.host")}
          </span>

          <span className="terminal-input__separator">
            :
          </span>

          <span className="terminal-input__path">
            ~$
          </span>

          <input
            ref={inputRef}
            value={input}
            onChange={(event) =>
              setInput(event.target.value)
            }
            onKeyDown={handleKeyDown}
            className="terminal-input__field"
            type="text"
            autoComplete="off"
            spellCheck="false"
            aria-label={t("window.placeholder")}
            placeholder={t("window.placeholder")}
          />

          <span className="terminal-input__cursor" />
        </div>
      </div>

      {/* footer */}

      <div className="terminal-window__footer">
        <span>
          AES-256
        </span>

        <span>
          127.0.0.1
        </span>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            executeCommand();
          }}
          className="terminal-window__execute"
        >
          EXECUTE ↵
        </button>
      </div>
    </div>
  );
}

export default Terminal;