import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const SECRET_SEQUENCE = [
  "f",
  "s",
  "o",
  "c",
  "i",
  "e",
  "t",
  "y",
];

function useSecretSequence() {
  const [unlocked, setUnlocked] =
    useState(false);

  const currentIndexRef =
    useRef(0);

  const reset =
    useCallback(() => {
      currentIndexRef.current = 0;

      setUnlocked(false);
    }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.ctrlKey ||
        event.metaKey ||
        event.altKey
      ) {
        return;
      }

      const target =
        event.target;

      const isTyping =
        target instanceof
          HTMLInputElement ||
        target instanceof
          HTMLTextAreaElement;

      if (isTyping) {
        return;
      }

      const pressedKey =
        event.key.toLowerCase();

      const expectedKey =
        SECRET_SEQUENCE[
          currentIndexRef.current
        ];

      if (
        pressedKey === expectedKey
      ) {
        currentIndexRef.current += 1;

        if (
          currentIndexRef.current ===
          SECRET_SEQUENCE.length
        ) {
          currentIndexRef.current = 0;

          setUnlocked(true);
        }

        return;
      }

      currentIndexRef.current =
        pressedKey ===
        SECRET_SEQUENCE[0]
          ? 1
          : 0;
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, []);

  return {
    unlocked,
    reset,
  };
}

export default useSecretSequence;