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
    <div className="flex flex-col items-center space-y-8 bg-background px-8 py-28 md:px-20  lg:flex-row lg:space-x-8 lg:space-y-0 lg:px-40">
      <div className="bg-white p-8 grid grid-cols-4 gap-4 rounded-lg shadow-xl border border-gray-200">
        <div className="flex flex-col items-center space-y-3">
          <lord-icon
            src="https://cdn.lordicon.com/nzixoeyk.json"
            trigger="hover"
            style={{ width: "100px", height: "100px" }}
          ></lord-icon>
          <span className="text-sm font-medium text-gray-700">
            alanarevalo1910@gmail.com
          </span>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <lord-icon
            src="https://cdn.lordicon.com/rsvfayfn.json"
            trigger="hover"
            style={{ width: "100px", height: "100px" }}
          ></lord-icon>
          <span className="text-sm font-medium text-gray-700">
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
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <a href="https://github.com/Alan-be" className="text-primary1-500">
            <lord-icon
              src="https://cdn.lordicon.com/kthelypq.json"
              trigger="hover"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
            <span className="text-sm font-medium">Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
