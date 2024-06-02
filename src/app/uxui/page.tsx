import Link from "next/link";
import Image from "next/image";

import iphoneImg from "@/assets/iphone.png";
import macbookImg from "@/assets/macbook.png";
import ColorPalette from "./color-palette";
import illustration1Img from "@/assets/illustration-1.png";
import illustration2Img from "@/assets/illustration-2.png";

const Uxui = () => {
  return (
    <div className="pt-[68px] overflow-hidden h-screen container place-content-center text-center grid md:grid-cols-2 gap-4 text-black text-3xl font-bold">
      <Link
        href="/uxui/lingual-lougne"
        className="group p-12 flex flex-col gap-[25px] items-center relative"
      >
        <div className="h-8 lg:h-9 overflow-hidden">
          <div className="group-hover:-translate-y-8 lg:group-hover:-translate-y-9 transition-transform duration-200">
            <h2>WEBSITE</h2>
            <h2 className="text-[#004743]">LINGUAL LOUGNE</h2>
          </div>
        </div>
        <div className="relative">
          <Image className="" src={iphoneImg} alt="iphone" />
          <div className="group-hover:opacity-100 duration-200 opacity-0 absolute top-0 left-[calc(100%+39px)]">
            <ColorPalette
              colors={[
                "#001E1E",
                "#004743",
                "#ABD1C6",
                "#D9D9D9",
                "#FFFFFF",
                "#F6BA35",
              ]}
              axis="y"
            />
          </div>
        </div>
        <Image
          className="group-hover:opacity-100 duration-200 opacity-0 absolute left-[1.7%] -bottom-[13%]"
          src={illustration1Img}
          alt="illustration 1"
        />
      </Link>
      <Link
        href="/uxui/keef"
        className="group p-12 flex flex-col gap-[25px] items-center cursor-pointer relative"
      >
        <div className="h-8 lg:h-9 overflow-hidden">
          <div className="group-hover:-translate-y-8 lg:group-hover:-translate-y-9 transition-transform duration-200">
            <h2>MOBILE APPLICATION</h2>
            <h2 className="text-[#4C5C6C]">KEEF</h2>
          </div>
        </div>
        <div className="relative">
          <Image src={macbookImg} alt="macbook" />
          <div className="group-hover:opacity-100 duration-200 opacity-0 absolute top-[calc(100%+25px)] left-0">
            <ColorPalette
              colors={[
                "#272622",
                "#3A3A3A",
                "#58534F",
                "#4C5C6C",
                "#91887F",
                "#CECDC9",
              ]}
            />
          </div>
        </div>
        <Image
          className="group-hover:opacity-100 duration-200 opacity-0 absolute -right-[9%] -bottom-[14%]"
          src={illustration2Img}
          alt="illustration 2"
        />
      </Link>
    </div>
  );
};

export default Uxui;
