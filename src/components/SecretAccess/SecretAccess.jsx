import {
  useCallback,
  useEffect,
  useState,
} from "react";

import SecretBoot from "./SecretBoot";
import SecretShell from "./SecretShell";

const BOOT_DURATION = 1700;

const STORAGE_KEY =
  "mr-robot-vibe-secret-progress";

const DEFAULT_PROGRESS = {
  accessLevel: 25,
  completedActions: [],
};

function loadProgress() {
  try {
    const saved =
      localStorage.getItem(
        STORAGE_KEY,
      );

    if (!saved) {
      return DEFAULT_PROGRESS;
    }

    const parsed =
      JSON.parse(saved);

    return {
      accessLevel:
        typeof parsed.accessLevel ===
        "number"
          ? Math.min(
              Math.max(
                parsed.accessLevel,
                25,
              ),
              100,
            )
          : 25,

      completedActions:
        Array.isArray(
          parsed.completedActions,
        )
          ? parsed.completedActions
          : [],
    };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

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

  const [
    progress,
    setProgress,
  ] = useState(
    loadProgress,
  );

  /* ============================= */
  /* Persist Progress */
  /* ============================= */

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(
        progress,
      ),
    );
  }, [progress]);

  /* ============================= */
  /* Secret Session */
  /* ============================= */

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
      if (
        event.key === "Escape"
      ) {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.clearTimeout(
        timer,
      );

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );

      document.body.style.overflow =
        previousOverflow;
    };
  }, [onClose]);

  /* ============================= */
  /* Complete Mission */
  /* ============================= */

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
      <div className="secret-access__noise" />

      <div className="secret-access__scanlines" />

      <div className="secret-access__glow" />

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