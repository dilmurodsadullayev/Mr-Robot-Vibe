import { useEffect, useState } from "react";

function useMouseParallax() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 2;

      setPosition({
        x,
        y,
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove,
      );
    };
  }, []);

  return position;
}

export default useMouseParallax;