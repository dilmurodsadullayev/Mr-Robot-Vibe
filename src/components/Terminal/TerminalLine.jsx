function TerminalLine({ line }) {
  const classNames = {
    command: "terminal-line terminal-line--command",
    output: "terminal-line terminal-line--output",
    system: "terminal-line terminal-line--system",
    error: "terminal-line terminal-line--error",
    success: "terminal-line terminal-line--success",
  };

  return (
    <div className={classNames[line.type] || classNames.output}>
      {line.type === "command" && (
        <>
          <span className="terminal-line__prompt">
            anonymous@fsociety
          </span>

          <span className="terminal-line__separator">
            :
          </span>

          <span className="terminal-line__path">
            ~$
          </span>
        </>
      )}

      <span className="terminal-line__text">
        {line.text}
      </span>
    </div>
  );
}

export default TerminalLine;