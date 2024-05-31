"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import holdingTelevisionImg from "@/assets/holding-television.png";

const Contact = () => {
  return (
    <div className="px-4">
      <div className="text-black py-[68px] relative container px-0 flex justify-center h-svh flex-col">
        <h2 className="text-4xl font-bold mb-20">
          NICHAKARN SOONTORNSUTEEONG (MEAN)
        </h2>
        <div className="flex flex-col gap-4 text-[28px]">
          <p>(+66)80-6143623</p>
          <p>nichakarn.soon33@gmail.com</p>
          <p>
            65/183 Chateau Intown Phaholyothin 32,
            <br />
            Soi Phaholyothin 32, Senanikhom, Chatuchak,
            <br />
            Bangkok 10900
          </p>
        </div>
        <motion.div
          initial={{
            top: "-100vh",
          }}
          animate={{
            top: 0,
          }}
          className="absolute -z-10 right-[calc(496px/1.5)]"
          transition={{
            duration: 1.5,
            type: "spring",
          }}
        >
          <div className="bg-white opacity-100 h-screen w-screen fixed"></div>
          <Image
            className="fixed"
            src={holdingTelevisionImg}
            alt="holding television"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
