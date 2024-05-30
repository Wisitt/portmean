"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { useScrollUp } from "@/hooks/useScrollUp";
import { lingualLougneImgs } from "@/constants/uxui";

const LingualLougne = () => {
  const isScrollUp = useScrollUp();

  return (
    <main className="px-4 pt-[68px]">
      <div className="container relative flex flex-col items-center">
        <motion.div
          initial={{
            top: "1rem",
          }}
          animate={{
            top: !isScrollUp ? "-52px" : "1rem",
          }}
          transition={{
            duration: 0.2,
          }}
          className="absolute left-0"
        >
          <Link
            href="/uxui"
            className="hover:bg-primary duration-200 hover:text-white transition-colors border border-primary fixed text-primary items-center flex pl-2 pr-4 gap-1 py-2 rounded"
          >
            <svg
              className="size-5"
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
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back
          </Link>
        </motion.div>
        {lingualLougneImgs.map((img, i) => (
          <Image key={i} src={img} alt={"lingual lougne " + (i + 1)} />
        ))}
      </div>
    </main>
  );
};

export default LingualLougne;
