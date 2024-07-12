import React from "react";
import Image from "next/image";
import ImageHero from "@/components/assets/me.jpeg";
// import ImageLogoContrurama from "@/components/assets/logos/logo_Grupo-Occi.png";
const Hero = () => {
  return (
    <div className="">
      <div className="relative flex justify-center bg-background overflow-hidden p-7">
        <div className="relative z-50 flex lg:flex-row flex-col mt-40 lg:p-20 lg:max-w-screen-xl 2xl:max-w-screen-2xl pointer-events-none select-none">
          <div className=" flex flex-col justify-evenly">
            <div className=" w-11/12	  px-8 lg:mr-14">
              <h3 className="mb-8 text-left text-4xl font-semibold text-primary2-500 lg:text-4xl lg:font-semibold lg:leading-tight 2xl:text-7xl 2xl:font-semibold">
                Fullstack Developer
              </h3>
              <h1 className="mb-8 text-left text-5xl font-semibold text-primary1-500 lg:text-6xl lg:font-semibold lg:leading-tight 2xl:text-7xl 2xl:font-semibold">
                Alan Arevalo Varela
              </h1>
            </div>
          </div>
        </div>
        <Image
          src={ImageHero}
          alt="hero"
          className="h-auto w-auto lg:w-2/6 rounded-3xl	shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
