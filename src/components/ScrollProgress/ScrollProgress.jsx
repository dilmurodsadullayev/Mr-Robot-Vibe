import {
  useEffect,
  useRef,
  useState,
} from "react";

const sections = [
  {
    id: "home",
    number: "01",
  },
  {
    id: "about",
    number: "02",
  },
  {
    id: "characters",
    number: "03",
  },
  {
    id: "ratings",
    number: "04",
  },
  {
    id: "terminal",
    number: "05",
  },
];

function ScrollProgress() {
  const [
    progress,
    setProgress,
  ] = useState(0);

  const [
    activeSection,
    setActiveSection,
  ] = useState("home");

  const frameRef =
    useRef(null);

  const progressRef =
    useRef(0);

  const activeSectionRef =
    useRef("home");

  useEffect(() => {
    const updateScrollState = () => {
      frameRef.current = null;

      const documentHeight =
        document.documentElement
          .scrollHeight -
        window.innerHeight;

      const currentScroll =
        window.scrollY;

      const nextProgress =
        documentHeight <= 0
          ? 0
          : Math.min(
              Math.max(
                (
                  currentScroll /
                  documentHeight
                ) *
                  100,
                0,
              ),
              100,
            );

      const roundedProgress =
        Math.round(
          nextProgress,
        );

      /*
       * Faqat qiymat o'zgarganda
       * React state update qilamiz.
       */
      if (
        roundedProgress !==
        progressRef.current
      ) {
        progressRef.current =
          roundedProgress;

        setProgress(
          roundedProgress,
        );
      }

      /*
       * Current section
       */
      const viewportPoint =
        window.scrollY +
        window.innerHeight *
          0.35;

      let current =
        "home";

      sections.forEach(
        (section) => {
          const element =
            document.getElementById(
              section.id,
            );

          if (!element) {
            return;
          }

          if (
            element.offsetTop <=
            viewportPoint
          ) {
            current =
              section.id;
          }
        },
      );

      if (
        current !==
        activeSectionRef.current
      ) {
        activeSectionRef.current =
          current;

        setActiveSection(
          current,
        );
      }
    };

    const requestUpdate = () => {
      if (
        frameRef.current !==
        null
      ) {
        return;
      }

      frameRef.current =
        window.requestAnimationFrame(
          updateScrollState,
        );
    };

    updateScrollState();

    window.addEventListener(
      "scroll",
      requestUpdate,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      requestUpdate,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        requestUpdate,
      );

      window.removeEventListener(
        "resize",
        requestUpdate,
      );

      if (
        frameRef.current !==
        null
      ) {
        window.cancelAnimationFrame(
          frameRef.current,
        );
      }
    };
  }, []);

  const handleJump = (
    sectionId,
  ) => {
    const target =
      document.getElementById(
        sectionId,
      );

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <aside
      className="scroll-progress"
      aria-label="Page progress"
    >
      <div className="scroll-progress__meta">
        <span>
          PAGE
        </span>

        <strong>
          {String(
            progress,
          ).padStart(
            3,
            "0",
          )}
          %
        </strong>
      </div>

      <div className="scroll-progress__rail">
        <div
          className="scroll-progress__fill"
          style={{
            height:
              `${progress}%`,
          }}
        />

        <span
          className="scroll-progress__scanner"
          style={{
            top:
              `${progress}%`,
          }}
        />

        {sections.map(
          (section) => {
            const active =
              activeSection ===
              section.id;

            return (
              <button
                key={
                  section.id
                }
                type="button"
                className={`
                  scroll-progress__point
                  ${
                    active
                      ? "scroll-progress__point--active"
                      : ""
                  }
                `}
                onClick={() =>
                  handleJump(
                    section.id,
                  )
                }
                aria-label={
                  section.id
                }
                aria-current={
                  active
                    ? "true"
                    : undefined
                }
              >
                <span />

                <strong>
                  {
                    section.number
                  }
                </strong>
              </button>
            );
          },
        )}
      </div>

      <span className="scroll-progress__label">
        SYSTEM_SCROLL
      </span>
    </aside>
  );
}

export default ScrollProgress;