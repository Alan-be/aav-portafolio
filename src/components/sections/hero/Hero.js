import React from "react";
import Image from "next/image";
import ImageHero from "@/components/assets/me.jpeg";
// import ImageLogoContrurama from "@/components/assets/logos/logo_Grupo-Occi.png";
const Hero = () => {
  return (
    <div className="">
      <div className="relative flex justify-center bg-background overflow-hidden p-7">
        <div className="relative z-50 flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-10 lg:mt-40 lg:p-20 lg:max-w-screen-xl 2xl:max-w-screen-2xl pointer-events-none select-none">
          <div className="flex flex-col justify-evenly items-center lg:items-start text-center lg:text-left">
            <div className="w-full lg:w-11/12 px-8 lg:mr-14">
              <h3 className="mb-8 text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-primary2-500 lg:leading-tight">
                Fullstack Developer
              </h3>
              <h1 className="text-4xl lg:text-5xl 2xl:text-6xl font-bold text-primary1-500 lg:leading-tight">
                Alan Arevalo Varela
              </h1>
            </div>
          </div>
          <Image
            src={ImageHero}
            alt="hero"
            className="mt-5 lg:mt-0 h-auto max-w-full lg:w-2/6 rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
