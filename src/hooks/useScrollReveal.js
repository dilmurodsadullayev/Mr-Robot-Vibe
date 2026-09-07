import {
  useEffect,
  useRef,
  useState,
} from "react";

function useScrollReveal(options = {}) {
  const elementRef = useRef(null);

  const [isVisible, setIsVisible] =
    useState(false);

  useEffect(() => {
    const element =
      elementRef.current;

    if (!element) {
      return undefined;
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting
          ) {
            setIsVisible(true);

            observer.unobserve(
              entry.target,
            );
          }
        },
        {
          threshold:
            options.threshold ??
            0.15,

          rootMargin:
            options.rootMargin ??
            "0px 0px -60px 0px",
        },
      );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [
    options.threshold,
    options.rootMargin,
  ]);

  return {
    elementRef,
    isVisible,
  };
}

export default useScrollReveal;