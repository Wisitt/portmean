import Image from "next/image";
import { motion } from "framer-motion";

import Education from "./education";
import Experience from "./experience";
import noiseImg from "@/assets/noise.jpg";
import { EndCardOption } from "@/types/end-card";
import educationImg from "@/assets/education.jpg";
import experienceImg from "@/assets/experience.jpg";
import { EducationAndExperienceStep } from "@/types/experience-list";

const EndCard = ({
  step,
  option,
  setOption,
  activeExperience,
}: {
  step: EducationAndExperienceStep;
  option: EndCardOption;
  setOption: (option: EndCardOption) => void;
  activeExperience: number;
}) => {
  return (
    <motion.div
      id="end-card"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.2,
      }}
      className="bg-black w-full max-w-[624px] flex flex-col items-center h-full px-12 py-6"
    >
      <h3 className="text-4xl font-black uppercase mb-6">
        {step === "end" && <>{option === "" ? "PLEASE SELECT" : option}</>}
      </h3>
      <div
        style={{
          overflow: option ? "hidden" : "initial",
        }}
        className="flex flex-col h-full w-full"
      >
        {!option ? (
          <>
            <div
              onClick={() => setOption("education")}
              className="h-full flex flex-col justify-center items-center relative cursor-pointer group transition-opacity duration-200 outline outline-2 outline-white/0 hover:outline-white/100 hover:z-20"
            >
              <h4 className="text-4xl z-30 font-black text-transparent transition-opacity duration-200 text-stroke-1 text-stroke-white group-hover:opacity-0">
                EDUCATION
              </h4>
              <Image
                draggable={false}
                className="absolute mix-blend-multiply group-hover:opacity-0 opacity-[0.03] left-0 z-20 h-full"
                src={noiseImg}
                alt="noise"
              />
              <div className="bg-gradient-to-br z-10 group-hover:opacity-0 transition-opacity duration-200 from-black/100 to-black/0 backdrop-blur inset-0 absolute" />
              <Image
                className="absolute saturate-0 group-hover:saturate-100 w-full h-full object-cover"
                src={educationImg}
                alt="education"
              />
            </div>
            <div
              onClick={() => setOption("experience")}
              className="h-full flex flex-col justify-center items-center relative cursor-pointer group transition-colors duration-200 outline outline-2 outline-transparent hover:outline-white hover:z-10"
            >
              <h4 className="text-4xl z-20 font-black text-transparent transition-opacity duration-200 text-stroke-1 text-stroke-white group-hover:opacity-0">
                EXPERIENCE
              </h4>
              <Image
                draggable={false}
                className="absolute mix-blend-multiply group-hover:opacity-0 opacity-[0.03] left-0 z-20 h-full"
                src={noiseImg}
                alt="noise"
              />
              <div className="bg-gradient-to-br group-hover:opacity-0 transition-opacity duration-200 from-black/100 to-black/0 backdrop-blur inset-0 absolute z-10" />
              <Image
                className="absolute saturate-0 group-hover:saturate-100 w-full h-full object-cover"
                src={experienceImg}
                alt="experience"
              />
            </div>
          </>
        ) : option === "education" ? (
          <Education />
        ) : (
          <Experience activeExperience={activeExperience} />
        )}
      </div>
      <h3 className="text-4xl font-black mt-6">
        {step === "end" && (
          <>{option === "" ? "COMMING SOON" : "NOW SHOWING"}</>
        )}
      </h3>
    </motion.div>
  );
};

export default EndCard;
