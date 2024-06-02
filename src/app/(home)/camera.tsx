import Image from "next/image";
import { motion } from "framer-motion";
import cameraImg from "@/assets/camera.png";
import fullCameraImg from "@/assets/full-camera.png";

const Camera = ({
  step,
  setStep,
}: {
  step: "start" | "again" | "end";
  setStep: (step: "start" | "again" | "end") => void;
}) => {
  return (
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
          pointerEvents: step === "again" || step === "end" ? "all" : "none",
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
          pointerEvents: step === "again" || step === "end" ? "all" : "none",
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
  );
};

export default Camera;
