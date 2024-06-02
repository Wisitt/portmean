import Image from "next/image";

import handImg from "@/assets/hand.png";
import foilImg from "@/assets/foil.png";
import Woman from "@/icons/woman";
import splineImg from "@/assets/interest/spline.png";
import procreate1Img from "@/assets/interest/procreate1.png";
import nomadImg from "@/assets/interest/nomad.png";
import threeDPrintingImg from "@/assets/interest/3d-printing.png";
import adobeIllustrator1Img from "@/assets/interest/adobe-illustrator1.png";
import adobeIllustrator2Img from "@/assets/interest/adobe-illustrator2.png";
import adobeIllustrator3Img from "@/assets/interest/adobe-illustrator3.png";
import adobeIllustrator4Img from "@/assets/interest/adobe-illustrator4.png";
import adobePhotoshopImg from "@/assets/interest/adobe-photoshop.png";
import rhinocerosImg from "@/assets/interest/rhinoceros.png";
import procreate2Img from "@/assets/interest/procreate2.png";

const Interest = () => {
  return (
    <div className="overflow-hidden">
      <div className="h-screen pt-[68px] container relative flex flex-col justify-center items-center text-black">
        <div className="absolute top-[68px] -z-10 -left-[50px]">
          <Image src={handImg} alt="hand" />
        </div>
        <div className="absolute top-[68px] -z-10 -right-44 h-[calc(100vh-68px)]">
          <Image className="h-full object-cover" src={foilImg} alt="foil" />
        </div>
        <div className="flex items-center justify-end gap-20 w-full">
          <div>
            <h2 className="text-5xl font-bold">INTERESTED WITH</h2>
            <div className="grid md:grid-cols-[repeat(3,250px)] mt-12 text-[32px] font-bold *:bg-primary *:aspect-square text-white *:grid *:place-content-center gap-4">
              <div>DRAWING</div>
              <div>3D</div>
              <div>ILLUSTRATOR</div>
            </div>
          </div>
          <Woman />
        </div>
      </div>
      <div className="grid grid-cols-4 text-black text-2xl py-[68px] grid-rows-3 gap-x-4 gap-y-8 container">
        <div className="row-span-2 flex flex-col gap-6">
          <Image
            className="h-full w-full object-contain"
            src={splineImg}
            alt="spline"
          />
          <h3 className="text-center">Spline</h3>
        </div>
        <div className="flex flex-col gap-6">
          <Image className="shadow" src={procreate1Img} alt="procreate 1" />
          <h3 className="text-center">Procreate</h3>
        </div>
        <div className="flex flex-col gap-6">
          <Image className="shadow" src={nomadImg} alt="nomad" />
          <h3 className="text-center">Nomad</h3>
        </div>
        <div className="flex flex-col gap-6">
          <Image className="shadow" src={threeDPrintingImg} alt="3d printing" />
          <h3 className="text-center">3d printing</h3>
        </div>
        <div className="flex flex-col gap-6">
          <Image
            className="shadow"
            src={adobeIllustrator1Img}
            alt="adobe illustrator 1"
          />
          <h3 className="text-center">Adobe Illustrator</h3>
        </div>
        <div className="flex flex-col gap-6">
          <Image
            className="shadow"
            src={adobeIllustrator2Img}
            alt="adobe illustrator 2"
          />
          <h3 className="text-center">Adobe Illustrator</h3>
        </div>
        <div className="flex flex-col gap-6">
          <Image
            className="shadow"
            src={adobeIllustrator3Img}
            alt="adobe illustrator 3"
          />
          <h3 className="text-center">Adobe Illustrator</h3>
        </div>
        <div className="flex flex-col gap-6">
          <Image
            className="shadow"
            src={adobeIllustrator4Img}
            alt="adobe illustrator 4"
          />
          <h3 className="text-center">Adobe Illustrator</h3>
        </div>
        <div className="flex flex-col gap-6">
          <Image
            className="shadow"
            src={adobePhotoshopImg}
            alt="adobe photoshop"
          />
          <h3 className="text-center">Adobe Photoshop</h3>
        </div>
        <div className="flex flex-col gap-6">
          <Image className="shadow" src={rhinocerosImg} alt="rhinoceros" />
          <h3 className="text-center">Rhinoceros</h3>
        </div>
        <div className="flex flex-col gap-6">
          <Image className="shadow" src={procreate2Img} alt="procreate 2" />
          <h3 className="text-center">Procreate</h3>
        </div>
      </div>
    </div>
  );
};

export default Interest;
