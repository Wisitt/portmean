import { motion } from "framer-motion";

const ExperienceNavigator = ({
  experienceListLength,
  setActiveExperience,
  activeExperience,
}: {
  experienceListLength: number;
  setActiveExperience: (experience: number) => void;
  activeExperience: number;
}) => {
  return (
    <motion.div
      id="experience-navigator"
      initial={{ opacity: 0, pointerEvents: "none" }}
      animate={{ opacity: 1, pointerEvents: "all" }}
      exit={{ opacity: 0, pointerEvents: "none" }}
      className="flex flex-col justify-center px-6 gap-6"
    >
      {Array.from(Array(experienceListLength).keys()).map((i) => (
        <button
          id={`experience-button-${i + 1}`}
          key={i}
          onClick={() => setActiveExperience(i + 1)}
          className={`size-5 rounded-full transition-colors duration-200 ${activeExperience === i + 1 ? "bg-primary" : "bg-[#D9D9D9]"}`}
        />
      ))}
    </motion.div>
  );
};

export default ExperienceNavigator;
