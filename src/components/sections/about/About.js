import Image from "next/image";
import React from "react";

const About = ({ title, body1, imageAbout, leftImage, withoutButton }) => {
  return (
    <div className=" flex flex-col items-center space-y-8 bg-background px-8 py-28 md:px-20  lg:flex-row lg:space-x-8 lg:space-y-0 lg:px-40">
      {leftImage && (
        <div className="flex flex-1 justify-center  lg:justify-center">
          <Image
            src={imageAbout}
            className="lg:w-4/5 rounded-2xl shadow-2xl"
            alt="image nosotros"
            width={500}
            height={500}
          />
        </div>
      )}
      <div className="flex flex-1 flex-col space-y-4  text-left  ">
        <h1 className="border-b-4  border-primary2-500 text-xl font-semibold text-primary1-500 lg:border-b-0 lg:text-4xl lg:font-semibold">
          {title}
        </h1>
        <div className="flex w-1/4 lg:mt-8 "></div>
        <div className="space-y-4">
          <p className="text-base font-normal text-primary1-900 lg:text-pretty lg:text-xl">
            {body1}
          </p>
        </div>
        {!withoutButton && (
          <div className="lg:mt-15 mt-16 flex flex-row items-center space-x-2 font-bold text-black  ">
            <Link
              href="/"
              className="flex flex-row items-center justify-center space-x-2 font-bold text-primary1-500 lg:mt-9 lg:p-2 lg:pl-1 lg:hover:rounded lg:hover:bg-primary1-50 lg:hover:p-2"
            >
              <FaArrowRight className="mr-2 text-base text-primary2-500 lg:text-lg" />
              SABER MÁS
            </Link>
          </div>
        )}
      </div>
      {!leftImage && (
        <div className="flex flex-1 justify-center lg:justify-end">
          <Image
            src={imageAbout}
            className="w-full"
            alt="image nosotros"
            width={500}
            height={500}
          />
        </div>
      )}
    </div>
  );
};

export default About;
