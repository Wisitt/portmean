"use client";

import { MouseEvent, useState } from "react";

import Camera from "./camera";
import EndCard from "./end-card";
import noiseImg from "@/assets/noise.jpg";
import { EndCardOption } from "@/types/end-card";
import ExperienceNavigator from "./experience-navigator";
import { experienceList } from "@/constants/experience-list";
import { EducationAndExperienceStep } from "@/types/experience-list";

const EducationAndExperience = () => {
  const [step, setStep] = useState<EducationAndExperienceStep>("start");
  const [option, setOption] = useState<EndCardOption>("");
  const [activeExperience, setActiveExperience] = useState(1);

  const handleSectionClick = (e: MouseEvent<HTMLElement>) => {
    if (step !== "end") return;
    const target = e.target as HTMLElement;
    if (option === "education") {
      if (!document.getElementById("end-card")?.contains(target)) {
        setOption("");
      }
    } else {
      if (
        !document.getElementById("end-card")?.contains(target) &&
        !document.getElementById("experience-navigator")?.contains(target)
      ) {
        setOption("");
        setActiveExperience(1);
      }
    }
  };

  return (
    <section
      onClick={handleSectionClick}
      className="overflow-hidden h-screen bg-blend-multiply py-20 px-4"
      style={{
        background: `#272727 url(${noiseImg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-[1520px] flex mx-auto h-full">
        <div className="w-[65%] flex flex-col h-full justify-center">
          {step !== "end" ? (
            <h1 className="font-black text-4xl">
              {step === "start" && "PLEASE CLICK ON THE CAMERA"}
              {step === "again" &&
                "PLEASE CLICK ON AGAIN TO SHOWING INFORMATION"}
            </h1>
          ) : (
            <div className="flex h-full z-10">
              <EndCard
                step={step}
                option={option}
                setOption={setOption}
                activeExperience={activeExperience}
              />
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
            <Camera step={step} setStep={setStep} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAndExperience;
