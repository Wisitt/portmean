"use client";

import Link from "next/link";
import { useState } from "react";
import { useLenis } from "lenis/react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [isShow, setIsShow] = useState(false);
  const lenis = useLenis((lenis) => {
    setIsShow(lenis.scroll >= window.innerHeight);
  });

  const MotionLink = motion(Link);

  return (
    <AnimatePresence>
      {isShow && (
        <MotionLink
          href="#top"
          onClick={() => lenis?.scrollTo("#top")}
          initial={{
            scale: 0.95,
            opacity: 0,
            pointerEvents: "none",
          }}
          animate={{
            scale: 1,
            opacity: 1,
            pointerEvents: "all",
          }}
          exit={{
            scale: 0.95,
            opacity: 0,
            pointerEvents: "none",
          }}
          className="fixed z-50 bottom-8 bg-white p-4 rounded-full mix-blend-difference right-8"
        >
          <svg
            className="stroke-black"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m5 12 7-7 7 7" />
            <path d="M12 19V5" />
          </svg>
        </MotionLink>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
