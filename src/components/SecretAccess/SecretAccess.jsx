import {
  useCallback,
  useEffect,
  useState,
} from "react";

import SecretBoot from "./SecretBoot";
import SecretShell from "./SecretShell";

const BOOT_DURATION = 1700;

function SecretAccess({
  open,
  onClose,
}) {
  if (!open) {
    return null;
  }

  return (
    <SecretAccessSession
      onClose={onClose}
    />
  );
}

function SecretAccessSession({
  onClose,
}) {
  const [
    bootCompleted,
    setBootCompleted,
  ] = useState(false);

  /*
   * Access level va completed actions
   * endi bitta state ichida.
   *
   * Shu bilan nested setState yo'q.
   */
  const [
    progress,
    setProgress,
  ] = useState({
    accessLevel: 25,
    completedActions: [],
  });

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    const timer =
      window.setTimeout(() => {
        setBootCompleted(true);
      }, BOOT_DURATION);

    const handleKeyDown = (
      event,
    ) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.clearTimeout(timer);

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );

      document.body.style.overflow =
        previousOverflow;
    };
  }, [onClose]);

  const completeAction =
    useCallback(
      (
        actionId,
        reward = 5,
      ) => {
        setProgress(
          (current) => {
            if (
              current.completedActions.includes(
                actionId,
              )
            ) {
              return current;
            }

            return {
              accessLevel:
                Math.min(
                  current.accessLevel +
                    reward,
                  100,
                ),

              completedActions: [
                ...current.completedActions,
                actionId,
              ],
            };
          },
        );
      },
      [],
    );

  return (
    <div className="secret-access">
      {/* Background effects */}

      <div className="secret-access__noise" />

      <div className="secret-access__scanlines" />

      <div className="secret-access__glow" />

      {/* Content */}

      {!bootCompleted ? (
        <SecretBoot />
      ) : (
        <SecretShell
          accessLevel={
            progress.accessLevel
          }
          completedActions={
            progress.completedActions
          }
          completeAction={
            completeAction
          }
          onLogout={
            onClose
          }
        />
      )}
    </div>
  );
}

export default SecretAccess;