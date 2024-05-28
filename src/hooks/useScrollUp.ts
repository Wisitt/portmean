import { useEffect, useRef, useState } from "react";

export const useScrollUp = () => {
  const scrollY = useRef(0);

  const [isScrollUp, setIsScrollUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollUp(window.scrollY <= 68 || window.scrollY <= scrollY.current);
      scrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrollUp;
};
