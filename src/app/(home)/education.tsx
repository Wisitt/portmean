import { educationList } from "@/constants/education-list";

const Education = () => {
  return (
    <div className="text-black h-full">
      {educationList.map((education, i) => (
        <div
          className="bg-white font-black flex flex-col gap-12 text-[28px] h-full p-7"
          key={i}
        >
          <p>
            {education.startYear} - {education.endYear}
          </p>
          <div className="text-[32px] flex flex-col gap-4">
            <p className="text-primary">{education.position}</p>
            <p>{education.degree}</p>
            <p>{education.department}</p>
          </div>
          <p>{education.from}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
