"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isShow, setIsShow] = useState(false);

  const handleScrollToTop = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsShow(window.scrollY >= window.innerHeight);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isShow && (
        <motion.button
          onClick={handleScrollToTop}
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
          className="fixed bottom-8 bg-white p-4 rounded-full mix-blend-difference right-8"
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
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
