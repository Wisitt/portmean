import { useEffect, useRef } from "react";

import { experienceList } from "@/constants/experience-list";

const Experience = ({ activeExperience }: { activeExperience: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeExperience) {
      const experienceElement = document.getElementById(
        `experience${activeExperience}`
      );
      if (!experienceElement) return;
      if (experienceElement.scrollTop > 0) {
        experienceElement.scroll({
          top: 0,
        });
      }
    }
  }, [activeExperience]);

  return (
    <div
      ref={cardRef}
      className="text-black h-full transition-transform duration-200"
      style={{
        transform: `translateY(calc(-${cardRef.current?.offsetHeight}px*${activeExperience - 1}))`,
      }}
    >
      {experienceList.map((experience, i) => (
        <div
          id={`experience${i + 1}`}
          className="bg-white overflow-auto font-black flex flex-col gap-12 text-[28px] h-full p-7"
          key={i}
        >
          <p>
            {experience.start} - {experience.end}
          </p>
          <div className="text-[32px] flex flex-col gap-4">
            <p className="text-primary">{experience.typeOfEmployment}</p>
            <p>{experience.position}</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-primary text-[32px]">Role</p>
            <ul className="list-disc flex flex-col pl-8 gap-4 font-normal">
              {experience.responsibilities.map((responsibility) => (
                <li className="pl-2" key={responsibility}>
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
          <p>{experience.workAt}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
