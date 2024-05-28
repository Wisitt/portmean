"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

import noiseImg from "../../assets/noise.jpg";
import cameraImg from "../../assets/camera.png";
import fullCameraImg from "../../assets/full-camera.png";
import experienceImg from "../../assets/experience.jpg";
import educationImg from "../../assets/education.jpg";
import Education from "./education";
import Experience from "./experience";
import { experienceList } from "@/constants/experience-list";
import ExperienceNavigator from "./experience-navigator";

const EducationAndExperience = () => {
  const [step, setStep] = useState<"start" | "again" | "end">("start");
  const [option, setOption] = useState<"education" | "experience" | "">("");
  const [activeExperience, setActiveExperience] = useState(1);

  return (
    <section
      className="overflow-hidden h-screen bg-blend-multiply py-20 px-4"
      style={{
        background: `#272727 url(${noiseImg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-[1520px] flex mx-auto h-full">
        <div className="w-[65%] flex flex-col h-full justify-center">
          <h1 className="font-black text-4xl">
            {step === "start" && "PLEASE CLICK ON THE CAMERA"}
            {step === "again" && "PLEASE CLICK ON AGAIN TO SHOWING INFORMATION"}
          </h1>
          {step === "end" && (
            <div className="flex h-full z-10">
              <motion.div
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
                  {step === "end" && (
                    <>{option === "" ? "PLEASE SELECT" : option}</>
                  )}
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
              {option === "experience" && (
                <ExperienceNavigator
                  activeExperience={activeExperience}
                  experienceListLength={experienceList.length}
                  setActiveExperience={setActiveExperience}
                />
              )}
            </div>
          )}
        </div>
        <div className="w-[35%]">
          <h2 className="font-black text-end text-4xl text-transparent text-stroke text-stroke-white">
            EDUCATION & EXPERIENCE
          </h2>
          <div className="flex flex-col pt-16 justify-center h-full items-end">
            <div className="relative">
              <motion.div
                initial={{
                  opacity: 0,
                  pointerEvents: "none",
                }}
                animate={{
                  opacity: step === "start" ? 1 : 0,
                  pointerEvents: step === "start" ? "all" : "none",
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                <Image
                  draggable={false}
                  className="cursor-pointer"
                  onClick={() => setStep("again")}
                  src={cameraImg}
                  alt="camera"
                />
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  pointerEvents: "none",
                }}
                animate={{
                  opacity: step === "again" || step === "end" ? 1 : 0,
                  pointerEvents:
                    step === "again" || step === "end" ? "all" : "none",
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                <Image
                  draggable={false}
                  onClick={() => setStep("end")}
                  className="absolute top-0 cursor-pointer"
                  src={fullCameraImg}
                  alt="full camera"
                />
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  pointerEvents: "none",
                }}
                animate={{
                  opacity: step === "again" || step === "end" ? 1 : 0,
                  pointerEvents:
                    step === "again" || step === "end" ? "all" : "none",
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                style={{
                  clipPath:
                    "polygon(60% 0, 100% 45%, 100% 48.5%, 60% 100%, 0 100%, 0 0)",
                }}
                className="bg-gradient-to-r from-white/40 to-black/40 h-[200vh] absolute top-1/2 -translate-y-1/2 w-screen right-[95.5%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAndExperience;
