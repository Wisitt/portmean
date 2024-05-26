// HeaderAndContent.js
'use client';

import styled from 'styled-components';
import { Subtract, NameMean, Smile, TextMeanLeft, Star } from '../../../public/icon/fistmean';

const HeaderAndContent = () => {
  return (
    <>
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-evenly w-full h-16 bg-white text-white p-0">
        {/* Logo */}
        <div className="flex items-center text-black">
          <h1 className="text-2xl md:text-4xl font-bold">MEANSAIMAII</h1>
        </div>
        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-center space-x-2 md:space-x-9 text-sm md:text-2xl text-black">
          <a href="#" className="hover:text-gray-300 text-[#6E2D27] font-black">HOME</a>
          <a href="#" className="hover:text-gray-300">CV</a>
          <a href="#" className="hover:text-gray-300">UX/UI</a>
          <a href="#" className="hover:text-gray-300">ARCHITECT</a> 
          <a href="#" className="hover:text-gray-300">GRAPHIC</a> 
          <a href="#" className="hover:text-gray-300">INTEREST</a> 
          <a href="#" className="hover:text-gray-300">CONTACT</a> 
        </nav>
      </header>

      {/* Content */}
      <section className="flex flex-col md:flex-row sm:justify-center  w-full h-screen bg-[#6E2D27] md:p-10">
        <div className="flex flex-col md:flex-row justify-start w-full lg:w-1/2 md:w-full md:p-10 sm:mt-40">
          <Subtract className="hidden md:block absolute left-0 top-40 max-w-[808.8px] max-h-[606.48px]" />
          <div className="relative w-full">
            <MainContainer className="absolute">
              <PolaroidFrame>
                <InnerFrame>
                  <PictureFrame />
                  <NameMean />
                </InnerFrame>
              </PolaroidFrame>
            </MainContainer>
            <MainContainer className="second-container absolute">
              <PolaroidFrame>
                <InnerFrame>
                  <PictureFrame className="second-picture-frame" />
                  <Smile />
                </InnerFrame>
              </PolaroidFrame>
            </MainContainer>
          </div>
        </div>
        <div className="flex justify-center w-full lg:w-1/2 p-10 lg:h-[93vh] sm:h-[40vh] relative md:hidden sm:hidden lg:inline">
          <div className="flex flex-col items-start sm:h-full text-4xl md:text-7xl  bottom-10 left-5 md:bottom-20 md:left-10 font-bold  p-[2.5rem]" style={{justifyContent:'space-between'}}>
            <div className="w-[30vw] ">
                <div className="flex items-start mt-10 justify-end">
                    <TextMeanLeft className="w-[50px] h-[50px]" />
                    <Star className="w-8 h-8 md:w-[50px] md:h-[50px]" />
                </div>
              <div className="flex lg:items-start md:items-center mt-10 justify-start">
                <Star className="w-20 h-20 md:w-[180px] md:h-[180px]" />
                <Star className="w-8 h-8 md:w-[50px] md:h-[50px]" />
              </div>
            </div>
            <div className="flex mt-5 flex-wrap">
              <div className="w-full">
                <h1 style={{fontSize:'3vw'}}>NICHAKARN</h1>
              </div>
                <h1 style={{fontSize:'3vw'}}>SOONTORNSUTEEWONG</h1>
              <Star className="ml-3 w-10 h-10 md:w-[71px] md:h-[71px]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Styled components
const MainContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 250px;
  left: 5rem;
  top: -8rem;
  filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.04));
  border-radius: 10px;
  z-index: 2;

  &.second-container {
    z-index: 1;
    transform: rotate(30deg);
    left: 18rem;
    top: -3rem;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 200px;
    left: 2rem;
    top: 8rem;

    &.second-container {
      left: 8.725rem;
      top: 12rem;
      transform: rotate(30deg);
    }
  }
`;

const PolaroidFrame = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 360px;
  left: 0px;
  top: 1px;
  background: #FFFFFF;
  box-shadow: 0px 0px 21.9258px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  @media (max-width: 768px) {
    min-width: 200px;
    min-height: 260px;
  }
`;

const InnerFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 15px;
  gap: 8px;
  width: 100%;
  height: 100%;
`;

const PictureFrame = styled.div`
  width: 100%;
  height: 100%;
  max-width: 270.72px;
  max-height: 270.43px;
  background: #D7D7D7;
  transition: background-image 0.3s ease-in-out;

  &:hover {
    background: url('/mean.svg') center center / cover no-repeat;
  }
  &.second-picture-frame:hover {
    background: url('/mean2.svg') center center / cover no-repeat;
  }
`;

export default HeaderAndContent;
