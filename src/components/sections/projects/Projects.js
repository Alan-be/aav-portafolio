import React from "react";
import Cards from "../../atoms/Card/Card";

const Projects = () => {
  return (
    <div className="bg-gray-50 px-8 py-10 md:px-20 lg:px-40">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-8 text-left text-4xl font-semibold text-primary1-500 lg:text-6xl lg:font-semibold lg:leading-tight 2xl:text-7xl 2xl:font-semibold">
          Some Projects
        </h1>
      </div>
      <Cards className="w-full" />
    </div>
  );
};

export default Projects;