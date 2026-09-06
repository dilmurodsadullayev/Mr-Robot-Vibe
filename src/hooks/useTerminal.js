import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function useTerminal() {
  const { t } = useTranslation("terminal");

  /*
   * Initial terminal lines use IDs 1, 2, 3.
   * New dynamically-created lines start from ID 4.
   */
  const lineIdRef = useRef(3);

  const [lines, setLines] = useState(() => [
    {
      id: 1,
      type: "system",
      text: t("welcome.line1"),
    },
    {
      id: 2,
      type: "output",
      text: t("welcome.line2"),
    },
    {
      id: 3,
      type: "output",
      text: t("welcome.line3"),
    },
  ]);

  const [input, setInput] = useState("");

  const [
    commandHistory,
    setCommandHistory,
  ] = useState([]);

  const [
    historyCursor,
    setHistoryCursor,
  ] = useState(null);

  /*
   * Create one terminal line.
   *
   * This function is only used while handling user actions,
   * not while React is rendering.
   */
  const createLine = (type, text) => {
    lineIdRef.current += 1;

    return {
      id: lineIdRef.current,
      type,
      text,
    };
  };

  /*
   * Convert multiple strings into terminal line objects.
   */
  const createOutputLines = (
    texts,
    type = "output",
  ) => {
    return texts.map((text) =>
      createLine(type, text),
    );
  };

  /*
   * Parse and execute a command.
   */
  const getCommandOutput = (
    command,
    historyBeforeCommand,
  ) => {
    switch (command) {
      case "help":
        return createOutputLines([
          t("commands.help.title"),
          "",
          t("commands.help.help"),
          t("commands.help.whoami"),
          t("commands.help.about"),
          t("commands.help.fsociety"),
          t("commands.help.status"),
          t("commands.help.history"),
          t("commands.help.clear"),
          t("commands.help.friend"),
        ]);

      case "whoami":
        return createOutputLines([
          t("commands.whoami.line1"),
          t("commands.whoami.line2"),
          t("commands.whoami.line3"),
          t("commands.whoami.line4"),
        ]);

      case "about":
        return createOutputLines([
          t("commands.about.line1"),
          "",
          t("commands.about.line2"),
          t("commands.about.line3"),
          "",
          t("commands.about.line4"),
        ]);

      case "fsociety":
        return createOutputLines(
          [
            t("commands.fsociety.line1"),
            "",
            t("commands.fsociety.line2"),
            t("commands.fsociety.line3"),
            t("commands.fsociety.line4"),
          ],
          "success",
        );

      case "status":
        return createOutputLines([
          t("commands.status.line1"),
          t("commands.status.line2"),
          t("commands.status.line3"),
          t("commands.status.line4"),
          t("commands.status.line5"),
        ]);

      case "history":
        if (historyBeforeCommand.length === 0) {
          return [
            createLine(
              "output",
              t("commands.history.empty"),
            ),
          ];
        }

        return historyBeforeCommand.map(
          (historyCommand, index) =>
            createLine(
              "output",
              `${String(index + 1).padStart(
                2,
                "0",
              )}  ${historyCommand}`,
            ),
        );

      case "friend":
        return createOutputLines(
          [
            t("commands.friend.line1"),
            t("commands.friend.line2"),
            t("commands.friend.line3"),
          ],
          "success",
        );

      default:
        return [
          createLine(
            "error",
            t("commands.unknown", {
              command,
            }),
          ),

          createLine(
            "output",
            t("commands.unknownHint"),
          ),
        ];
    }
  };

  /*
   * Run the current command.
   */
  const executeCommand = () => {
    const rawCommand = input.trim();

    if (!rawCommand) {
      return;
    }

    const command =
      rawCommand.toLowerCase();

    const historyBeforeCommand =
      commandHistory;

    const newHistory = [
      ...commandHistory,
      rawCommand,
    ];

    setCommandHistory(newHistory);

    setHistoryCursor(null);

    setInput("");

    /*
     * Clear only removes displayed lines.
     * Command history remains available.
     */
    if (command === "clear") {
      setLines([]);

      return;
    }

    const commandLine = createLine(
      "command",
      rawCommand,
    );

    const outputLines =
      getCommandOutput(
        command,
        historyBeforeCommand,
      );

    setLines((currentLines) => [
      ...currentLines,
      commandLine,
      ...outputLines,
    ]);
  };

  /*
   * Keyboard controls.
   *
   * Enter     -> execute
   * ArrowUp   -> previous command
   * ArrowDown -> next command
   */
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      executeCommand();

      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (commandHistory.length === 0) {
        return;
      }

      const nextCursor =
        historyCursor === null
          ? commandHistory.length - 1
          : Math.max(
              0,
              historyCursor - 1,
            );

      setHistoryCursor(nextCursor);

      setInput(
        commandHistory[nextCursor],
      );

      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (historyCursor === null) {
        return;
      }

      const nextCursor =
        historyCursor + 1;

      if (
        nextCursor >=
        commandHistory.length
      ) {
        setHistoryCursor(null);

        setInput("");

        return;
      }

      setHistoryCursor(nextCursor);

      setInput(
        commandHistory[nextCursor],
      );
    }
  };

  return {
    lines,
    input,
    setInput,
    executeCommand,
    handleKeyDown,
  };
}

export default useTerminal;