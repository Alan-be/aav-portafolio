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
    <div className="bg-neutrales-200 p-4 rounded-lg shadow-lg flex justify-between items-center space-x-4">
      {detailsProjects.map((id) => (
        <a
          key={id}
          href={id.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <div className="relative group bg-white rounded-lg overflow-hidden border-2 border-neutrales-300 transition-all hover:shadow-2xl hover:scale-105">
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
      <br />
    </div>
  );
};

export const CardLoading = () => {
  return (
    <div className="p-4 sm:w-full md:w-1/4 lg:w-2/6 xl:w-1/4">
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
