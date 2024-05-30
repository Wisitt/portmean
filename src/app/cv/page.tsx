import Image from "next/image";
import meInCv from "@/assets/me-in-cv.jpg";
import oldTelephoneImg from "@/assets/old-telephone.png";
import goldFish1Img from "@/assets/gold-fish-1.png";
import goldFish2Img from "@/assets/gold-fish-2.png";
import goldFish3Img from "@/assets/gold-fish-3.png";
import sharkImg from "@/assets/shark.png";
import flowerImg from "@/assets/flower.png";
import cvImg from "@/assets/cv.jpg";

const Cv = () => {
  return (
    <main>
      <div className="h-svh pt-[68px] px-4 overflow-hidden">
        <div className="max-w-[1520px] relative mx-auto gap-4 w-full h-full flex items-center">
          <div className="w-full max-w-[496px]">
            <div className="relative">
              <Image className="w-full" src={meInCv} alt="me in cv" />
              <Image
                className="absolute top-[7%] -left-[7%] z-10"
                src={goldFish1Img}
                alt="gold fish 1"
              />
              <Image
                className="absolute -bottom-[7%] -left-[18%] -z-10"
                src={goldFish2Img}
                alt="gold fish 2"
              />
              <Image
                className="absolute bottom-[22%] -right-[14%] z-10"
                src={goldFish3Img}
                alt="gold fish 3"
              />
            </div>
            <Image
              className="absolute top-0 -left-[169px]"
              src={oldTelephoneImg}
              alt="old telephone"
            />
          </div>
          <div className="bg-primary h-full flex justify-center p-4 font-bold text-5xl items-center gap-4 w-full relative after:bg-inherit after:left-full after:w-full after:h-full after:absolute">
            NICHAKARN’S <span>CV</span>
            <Image
              className="absolute left-10 top-20"
              src={sharkImg}
              alt="shark"
            />
          </div>
        </div>
        <Image
          className="absolute right-0 top-full -translate-y-[calc(608px/2+80px)]"
          src={flowerImg}
          alt="flower"
        />
      </div>
      <Image className="my-[68px] px-4 mx-auto" src={cvImg} alt="cv" />
    </main>
  );
};

export default Cv;
