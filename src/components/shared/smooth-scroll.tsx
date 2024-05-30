"use client";

import { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default SmoothScroll;
