import React from "react";
import Image from "next/image";
import imageOne from "@/components/assets/image.png";
import imageTwo from "@/components/assets/image_copy.png";

import { Card } from "antd";

const { Meta } = Card;

const detailsProjects = [
  {
    title: "Grupo Occi",
    url: "https://grupo-occi-web-2-0-fhod9lo3y-menteproductivas-projects.vercel.app/",
    description: "Website with integration to notion, tailwind and express.js",
    img: imageOne,
  },
  {
    title: "Regeneravital",
    url: "https://regenera-vital-web-app-2-0.vercel.app/",
    description:
      "Website with integration to notion, tailwind, paypal and express.js",
    img: imageTwo,
  },
];

const Cards = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-wrap justify-between items-center gap-4">
      {detailsProjects.map((id) => (
        <a
          key={id}
          href={id.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 md:flex-none md:w-1/2 lg:w-1/3"
        >
          <div className="relative group bg-white rounded-lg overflow-hidden border-2 border-primary2-400 transition-all hover:shadow-2xl hover:scale-105">
            <Image
              src={id.img}
              alt={id.title}
              objectFit="contain"
              className="w-full h-64 object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />

            <div className="absolute inset-0 flex justify-center items-center bg-primary1-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
              <div className="text-center p-4">
                <h3 className="text-lg font-bold text-primary2-50">
                  {id.title}
                </h3>
                <p className="text-secondary1-100">{id.description}</p>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export const CardLoading = () => {
  return (
    <div className="p-4 w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
      <Card
        hoverable
        cover={<div className="h-64 animate-pulse bg-gray-200"></div>}
        className="rounded-lg border border-gray-300 shadow-md"
      >
        <Meta
          title={<div className="text-xs uppercase text-neutral-500">...</div>}
        />
      </Card>
    </div>
  );
};

export default Cards;
