import { useLenis } from "lenis/react";
import { useRef, useState } from "react";

export const useScrollUp = () => {
  const scrollY = useRef(0);
  useLenis((lenis) => {
    setIsScrollUp(lenis.scroll <= 68 || lenis.scroll <= scrollY.current);
    scrollY.current = lenis.scroll;
  });
  const [isScrollUp, setIsScrollUp] = useState(true);

  return isScrollUp;
};
