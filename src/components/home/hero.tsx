import { useEffect, useState } from "react";

import Star from "@/components/icons/star";
import smileCard from "@/assets/smile-card.jpg";
import Subtract from "@/components/icons/subtract";
import nichakarnCard from "@/assets/nichakarn-card.jpg";
import emptySmileCard from "@/assets/empty-smile-card.jpg";
import emptyNichakarnCard from "@/assets/empty-nichakarn-card.jpg";

const Hero = () => {
  const [isNichakarnCardHovered, setIsNichakarnCardHovered] = useState(false);
  const [isSmileCardHovered, setIsSmileCardHovered] = useState(false);

  const preloadImages = () => {
    const images = [nichakarnCard.src, smileCard.src];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };

  useEffect(() => {
    preloadImages();
  }, []);

  return (
    <section className="h-svh bg-primary overflow-hidden pt-[calc(68px+2.5rem)] md:pt-[calc(68px+5rem)] pb-10 md:pb-20 px-4">
      <div className="max-w-[1520px] h-full mx-auto flex flex-col gap-10 xl:gap-0 xl:flex-row">
        <div className="xl:w-[40%] xl:pt-16 flex xl:justify-center xl:block relative">
          <div className="absolute -left-24 xl:-left-52 top-0">
            <Subtract />
          </div>
          <div className="relative">
            <div
              onMouseEnter={() => setIsNichakarnCardHovered(true)}
              onMouseLeave={() => setIsNichakarnCardHovered(false)}
              className={`relative drop-shadow-[0_2.97px_11.13px_rgba(0,0,0,0.04)] z-10 rounded-[10px] w-[calc(383px*0.75)] md:w-[calc(383px*0.9)] xl:w-[383px] bg-no-repeat aspect-[3/3.7] md:hover:-rotate-3 transition-[transform_background] duration-200 ${isSmileCardHovered ? "md:-rotate-3" : ""}`}
              style={{
                backgroundImage: `url(${
                  isNichakarnCardHovered
                    ? nichakarnCard.src
                    : emptyNichakarnCard.src
                })`,
                backgroundSize: "100% 100%",
              }}
            />
            <div
              onMouseEnter={() => setIsSmileCardHovered(true)}
              onMouseLeave={() => setIsSmileCardHovered(false)}
              className={`absolute drop-shadow-[0_2.97px_11.13px_rgba(0,0,0,0.04)] rounded-[10px] w-[calc(383px*0.75)] md:w-[calc(383px*0.8)] xl:w-[383px] bg-no-repeat aspect-[3/3.7] hover:z-20 md:hover:rotate-[27deg] transition-[transform_background] duration-200 top-[25%] md:top-[32.5%] xl:top-[22.5%] left-[10rem] rotate-[30deg] ${isNichakarnCardHovered ? "md:rotate-[27deg]" : ""}`}
              style={{
                backgroundImage: `url(${
                  isSmileCardHovered ? smileCard.src : emptySmileCard.src
                })`,
                backgroundSize: "100% 100%",
              }}
            />
          </div>
        </div>
        <div className="xl:w-[60%] font-bold uppercase flex flex-col gap-4 items-start xl:items-end justify-end xl:justify-between h-full">
          <div className="relative inline md:self-end">
            <Star className="size-10 md:size-12 xl:size-[100px] absolute -top-[70%] xl:top-[70%] left-[5%] md:left-auto sm:right-[100%]" />
            <Star className="size-6 xl:size-8 absolute bottom-[160%] xl:top-[180%] right-[95%]" />
            <span className="text-stroke text-stroke-white text-transparent font-black text-6xl md:text-[80px]">
              SAIMAII
            </span>
            <Star className="size-5 absolute -top-3 -right-6" />
          </div>
          <h1 className="text-[clamp(1.7rem,5vw,4.5rem)] leading-tight">
            nichakarn
            <br />
            <span className="relative">
              soontornsuteewong
              <Star className="size-5 xl:size-10 absolute top-1/2 -translate-y-1/2 left-[calc(100%+1rem)]" />
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
