import { MouseEvent, useEffect } from "react";
import { Variants, motion, useAnimation } from "framer-motion";

import Star from "@/icons/star";
import Subtract from "@/icons/subtract";
import smileCard from "@/assets/smile-card.jpg";
import nichakarnCard from "@/assets/nichakarn-card.jpg";
import emptySmileCard from "@/assets/empty-smile-card.jpg";
import emptyNichakarnCard from "@/assets/empty-nichakarn-card.jpg";

const createVariants = (
  emptySrc: string,
  showSrc: string,
  startRotate: number,
  zIndexEmpty: number = 0
) =>
  ({
    empty: {
      backgroundImage: `url(${emptySrc})`,
      rotate: startRotate,
      scale: 1,
      zIndex: zIndexEmpty,
    },
    show: {
      backgroundImage: `url(${showSrc})`,
      rotate: startRotate - 3,
      scale: 1.025,
      zIndex: 2,
    },
  }) as Variants;

const Hero = () => {
  const nichakarnCardControls = useAnimation();
  const smileCardControls = useAnimation();

  const nichakarnCardVariants = createVariants(
    emptyNichakarnCard.src,
    nichakarnCard.src,
    0,
    1
  );

  const smileCardVariants = createVariants(
    emptySmileCard.src,
    smileCard.src,
    30
  );

  const preloadImages = () => {
    const images = [nichakarnCard.src, smileCard.src];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };

  const handleClick = async (e: MouseEvent) => {
    const target = e.target as HTMLDivElement;

    nichakarnCardControls.start("empty");
    smileCardControls.start("empty");

    if (target.id === "smile-card") {
      smileCardControls.start("show");
    } else if (target.id === "nichakarn-card") {
      nichakarnCardControls.start("show");
    }
  };

  useEffect(() => {
    preloadImages();
  }, []);

  return (
    <section
      onClick={handleClick}
      className="h-screen bg-primary overflow-hidden pt-[calc(68px+2.5rem)] md:pt-[calc(68px+5rem)] pb-10 md:pb-20 px-4"
    >
      <div className="container h-full flex flex-col gap-10 xl:gap-0 xl:flex-row">
        <div className="xl:w-[40%] xl:pt-16 flex xl:justify-center xl:block relative">
          <div className="absolute -left-24 xl:-left-52 top-0">
            <Subtract />
          </div>
          <div className="relative *:bg-contain *:drop-shadow-[0_2.97px_11.13px_rgba(0,0,0,0.04)] *:transition-[background-image] *:aspect-[3/3.7] *:rounded-[10px] *:w-[calc(383px*0.75)] *:md:w-[calc(383px*0.9)] *:xl:w-[383px]">
            <motion.div
              id="nichakarn-card"
              variants={nichakarnCardVariants}
              className="relative"
              initial="empty"
              whileHover="show"
              animate={nichakarnCardControls}
            />
            <motion.div
              id="smile-card"
              variants={smileCardVariants}
              className="absolute left-[10rem] top-[25%] md:top-[32.5%] xl:top-[22.5%]"
              initial="empty"
              whileHover="show"
              animate={smileCardControls}
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
