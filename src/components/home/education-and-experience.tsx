/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

import styles from "../../styles/Home.module.css";

const EducationAndExperience = () => {
  const [showImage, setShowImage] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };
  const handleClick = () => {
    setShowImage(!showImage);
  };

  return (
    <section
      className="flex flex-col"
      style={{
        backgroundImage: "url(/film.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute right-24 ">
        <h1 className="font-inter font-bold text-6xl md:text-8xl lg:text-4xl text-outline-white mb-10 md:mb-40 mt-10 ">
          EDUCATION & EXPERIENCE
        </h1>
      </div>
      <div className="flex justify-end items-center bg-opacity-50 h-[103vh] w-full">
        {!showImage && (
          <div className="absolute left-40 z-10 fade-in">
            <button
              onClick={handleClick}
              className="font-inter font-bold text-6xl md:text-8xl lg:text-4xl mb-10 md:mb-40 mt-10 "
            >
              PLEASE CLICK ON THE CAMERA
            </button>
          </div>
        )}
        {!showImage && (
          <div className="left justify-end bg-opacity-50  h-[103vh] w-full fade-in">
            <div className="h-[103vh]">
              {/* <div className="absolute" >
              <img src="./camera-foot.svg" alt="Camera Icon" className='h-[103vh]'/>
            </div>   */}
              <img src="./camera.svg" alt="Camera Icon" className="h-[103vh]" />
            </div>
          </div>
        )}
        {showImage && (
          <div className="left justify-end bg-opacity-50 relative h-[103vh] w-full fade-in">
            <div className="h-[103vh]">
              <div className={styles.container}>
                <h1 className={styles.title}>PLEASE SELECT</h1>
                <div className={styles.options}>
                  <div
                    className={styles.option}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                  >
                    <div className={styles.imageContainer}>
                      {hovered ? (
                        <img
                          src="/edu2.svg"
                          alt="Education Icon"
                          className={styles.icon}
                        />
                      ) : (
                        <img
                          src="/edu.svg"
                          alt="Education Icon"
                          className={styles.icon}
                        />
                      )}
                      <div className={styles.overlay}></div>
                      <div className={styles.textOverlay}>
                        <span className="font-inter font-bold text-6xl md:text-8xl lg:text-4xl text-outline-white2">
                          EDUCATION
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={styles.option}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                  >
                    <div className={styles.imageContainer}>
                      {hovered ? (
                        <img
                          src="/exp2.svg"
                          alt="Experience Icon"
                          className={styles.icon}
                        />
                      ) : (
                        <img
                          src="/exp.svg"
                          alt="Experience Icon"
                          className={styles.icon}
                        />
                      )}
                      <div className={styles.overlay}></div>
                      <div className={styles.textOverlay}>
                        <span className="font-inter font-bold text-6xl md:text-8xl lg:text-4xl text-outline-white2">
                          EXPERIENCE
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className={styles.comingSoon}>COMING SOON</h2>
              </div>
              <img
                src="./film-view1.svg"
                alt="Camera Icon"
                className="h-[103vh]"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EducationAndExperience;
