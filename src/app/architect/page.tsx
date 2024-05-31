import Image from "next/image";

import structureImg from "@/assets/architecture-and-interior/structure.jpg";
import {
  khaoyaiResort,
  japaneseBedroom,
  sampleImgs,
  creativeSpacePerformanceHub,
  adaptiveReuse,
  ramathibodisriayuthyaMedicalCenter,
} from "@/constants/architect";

const Architect = () => {
  return (
    <main className="text-black py-[68px] container flex flex-col gap-[150px]">
      <div className="h-screen flex text-5xl gap-4 justify-center font-bold items-center">
        <div className="max-w-[400px] w-full">
          <Image src={structureImg} alt="structure" />
        </div>
        <div className="flex flex-col items-center gap-12">
          <h2 className="flex-col gap-5 flex">
            ARCHITECTURE
            <span className="ml-52 flex gap-5 text-primary">
              & <span className="text-black">INTERIOR</span>
            </span>
          </h2>
          <div className="grid gap-4 grid-cols-4 grid-rows-2">
            {sampleImgs.map((sampleImg, i) => (
              <Image key={i} src={sampleImg} alt={`sample ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h3 className="text-4xl font-bold">CREATIVE SPACE PERFORMANCE HUB</h3>
        <div className="grid grid-rows-3 grid-cols-3 gap-4 *:h-full *:w-full">
          <Image
            src={creativeSpacePerformanceHub.img1}
            className="row-span-3"
            alt="adaptive reuse 1"
          />
          <Image
            src={creativeSpacePerformanceHub.img2}
            className="row-span-3"
            alt="adaptive reuse 2"
          />
          <Image
            src={creativeSpacePerformanceHub.img3}
            alt="adaptive reuse 3"
          />
          <Image
            src={creativeSpacePerformanceHub.img4}
            alt="adaptive reuse 4"
          />
          <Image
            src={creativeSpacePerformanceHub.img5}
            alt="adaptive reuse 5"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h3 className="text-4xl font-bold">ADAPTIVE REUSE</h3>
        <div className="grid grid-rows-12 grid-cols-3 gap-4 *:h-full *:w-full">
          <Image
            src={adaptiveReuse.img1}
            alt="adaptive reuse 1"
            className="row-span-12"
          />
          <Image
            src={adaptiveReuse.img2}
            alt="adaptive reuse 2"
            className="row-span-3"
          />
          <Image
            src={adaptiveReuse.img6}
            alt="adaptive reuse 6"
            className="row-span-4"
          />
          <Image
            src={adaptiveReuse.img3}
            alt="adaptive reuse 3"
            className="row-span-3"
          />
          <Image
            src={adaptiveReuse.img7}
            alt="adaptive reuse 7"
            className="row-span-4"
          />
          <Image
            src={adaptiveReuse.img4}
            alt="adaptive reuse 4"
            className="row-span-3"
          />
          <Image
            src={adaptiveReuse.img8}
            alt="adaptive reuse 8"
            className="row-span-4"
          />
          <Image
            src={adaptiveReuse.img5}
            alt="adaptive reuse 5"
            className="row-span-3"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h3 className="text-4xl font-bold">
          RAMATHIBODISRIAYUTHYA MEDICAL CENTER
        </h3>
        <div className="grid grid-rows-12 grid-cols-3 gap-4 *:w-full *:h-full">
          <Image
            src={ramathibodisriayuthyaMedicalCenter.img1}
            alt="ramathibodisriayuthya medical center 1"
            className="row-span-12"
          />
          <Image
            src={ramathibodisriayuthyaMedicalCenter.img2}
            alt="ramathibodisriayuthya medical center 2"
            className="row-span-3"
          />
          <Image
            src={ramathibodisriayuthyaMedicalCenter.img6}
            alt="ramathibodisriayuthya medical center 6"
            className="row-span-4"
          />
          <Image
            src={ramathibodisriayuthyaMedicalCenter.img3}
            alt="ramathibodisriayuthya medical center 3"
            className="row-span-3"
          />
          <Image
            src={ramathibodisriayuthyaMedicalCenter.img7}
            alt="ramathibodisriayuthya medical center 7"
            className="row-span-4"
          />
          <Image
            src={ramathibodisriayuthyaMedicalCenter.img4}
            alt="ramathibodisriayuthya medical center 4"
            className="row-span-3"
          />
          <Image
            src={ramathibodisriayuthyaMedicalCenter.img8}
            alt="ramathibodisriayuthya medical center 8"
            className="row-span-4"
          />
          <Image
            src={ramathibodisriayuthyaMedicalCenter.img5}
            alt="ramathibodisriayuthya medical center 5"
            className="row-span-3"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h3 className="text-4xl font-bold">KHAOYAI RESORT</h3>
        <div className="grid grid-cols-3 grid-rows-3 gap-4 *:w-full *:h-full">
          <Image src={khaoyaiResort.img1} alt="khaoyai resort 1" />
          <Image src={khaoyaiResort.img4} alt="khaoyai resort 4" />
          <Image
            src={khaoyaiResort.img7}
            alt="khaoyai resort 7"
            className="row-span-3"
          />
          <Image src={khaoyaiResort.img2} alt="khaoyai resort 2" />
          <Image src={khaoyaiResort.img5} alt="khaoyai resort 5" />
          <Image src={khaoyaiResort.img3} alt="khaoyai resort 3" />
          <Image src={khaoyaiResort.img6} alt="khaoyai resort 6" />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h3 className="text-4xl font-bold">JAPANESE BEDROOM</h3>
        <div className="grid grid-cols-3 grid-rows-3 gap-4 *:w-full *:h-full">
          <Image src={japaneseBedroom.img1} alt="japanese bedroom 1" />
          <Image src={japaneseBedroom.img2} alt="japanese bedroom 2" />
          <Image
            src={japaneseBedroom.img3}
            alt="japanese bedroom 3"
            className="row-span-3"
          />
          <Image src={japaneseBedroom.img4} alt="japanese bedroom 4" />
          <Image src={japaneseBedroom.img5} alt="japanese bedroom 5" />
          <Image src={japaneseBedroom.img6} alt="khaoyai resort 6" />
          <Image src={japaneseBedroom.img7} alt="japanese bedroom 7" />
        </div>
      </div>
    </main>
  );
};

export default Architect;
