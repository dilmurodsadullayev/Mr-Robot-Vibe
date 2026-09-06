import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const steps = [
  "boot",
  "connecting",
  "identity",
  "access",
  "ready",
];

function getStepIndex(progress) {
  if (progress < 20) {
    return 0;
  }

  if (progress < 45) {
    return 1;
  }

  if (progress < 70) {
    return 2;
  }

  if (progress < 90) {
    return 3;
  }

  return 4;
}

function IntroLoader({ onComplete }) {
  const { t } = useTranslation("introLoader");

  const [progress, setProgress] = useState(0);
  const [closing, setClosing] = useState(false);

  const closingTimeoutRef = useRef(null);
  const completeTimeoutRef = useRef(null);

  const stepIndex = getStepIndex(progress);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((current) => {
        const next = current + 2;

        if (next >= 100) {
          clearInterval(progressInterval);

          closingTimeoutRef.current = setTimeout(() => {
            setClosing(true);
          }, 350);

          completeTimeoutRef.current = setTimeout(() => {
            onComplete();
          }, 900);

          return 100;
        }

        return next;
      });
    }, 35);

    return () => {
      clearInterval(progressInterval);

      if (closingTimeoutRef.current) {
        clearTimeout(closingTimeoutRef.current);
      }

      if (completeTimeoutRef.current) {
        clearTimeout(completeTimeoutRef.current);
      }
    };
  }, [onComplete]);

  return (
    <div
      className={`
        intro-loader
        ${closing ? "intro-loader--closing" : ""}
      `}
    >
      <div className="noise" />

      <div className="intro-loader__content">
        <div
          className="intro-loader__brand glitch"
          data-text="FSOCIETY"
        >
          FSOCIETY
        </div>

        <div className="intro-loader__terminal">
          <span className="text-red-600">
            root@fsociety
          </span>

          <span className="text-zinc-600">
            :
          </span>

          <span className="text-zinc-400">
            ~$
          </span>

          <span className="text-zinc-300">
            ./boot_system.sh
          </span>

          <span className="terminal-cursor" />
        </div>

        <p className="intro-loader__status">
          {t(steps[stepIndex])}
        </p>

        <div className="intro-loader__progress">
          <div
            className="intro-loader__progress-bar"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <div className="intro-loader__meta">
          <span>
            SYS/FSCTY/01
          </span>

          <span>
            {String(progress).padStart(3, "0")}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default IntroLoader;