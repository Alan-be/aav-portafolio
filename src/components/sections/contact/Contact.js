"use client";
import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/xdjxvujz.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center space-y-8 bg-background px-8 py-28 sm:px-10 md:px-20 lg:flex-col lg:space-x-8 lg:space-y-0 lg:px-40 justify-center">
        <h1 className="mb-8 text-left text-4xl font-semibold text-primary1-500 lg:text-6xl lg:font-semibold lg:leading-tight 2xl:text-7xl 2xl:font-semibold">
          Contact
        </h1>
        <div className="bg-white p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-lg shadow-xl border border-gray-200">
          <div className="flex flex-col items-center space-y-3">
            <lord-icon
              src="https://cdn.lordicon.com/nzixoeyk.json"
              trigger="hover"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
            <h3 className="lg:text-xl font-bold text-primary1-500 mt-2">
              alanarevalo1910@gmail.com
            </h3>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <lord-icon
              src="https://cdn.lordicon.com/rsvfayfn.json"
              trigger="hover"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
            <span className="text-xl font-bold text-primary1-500 mt-2">
              +52 436 1200195
            </span>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <a
              href="https://www.linkedin.com/in/alan-arevalo-varela/"
              className="text-primary1-500"
            >
              <lord-icon
                src="https://cdn.lordicon.com/ppyvfomi.json"
                trigger="hover"
                style={{ width: "100px", height: "100px" }}
              ></lord-icon>
            </a>
            <span className="text-xl font-bold text-primary1-500 mt-2">
              LinkedIn
            </span>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <a href="https://github.com/Alan-be" className="text-primary1-500">
              <lord-icon
                src="https://cdn.lordicon.com/kthelypq.json"
                trigger="hover"
                style={{ width: "100px", height: "100px" }}
              ></lord-icon>
            </a>
            <span className="text-xl font-bold text-primary1-500 mt-2">
              Github
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
