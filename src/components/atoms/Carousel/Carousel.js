import React from "react";
import { Carousel } from "antd";
import logo1 from "@/components/assets/id3HrHqy7j_logos.svg";
import logo2 from "@/components/assets/expressjs-icon.svg";
import logo3 from "@/components/assets/nodejs-icon.svg";
import logo4 from "@/components/assets/mysql-icon.svg";
import Image from "next/image";

const contentStyle = {
  color: "red",
  lineHeight: "160px",
  textAlign: "center",
  background: "black",
  padding: "3%",
  width: "100%",
};

const techDetails = [
  {
    name: "Next.js",
    description: "The React framework for production",
    logo: logo1,
    exampleCode: "const next = () => <h1>Welcome to Next.js!</h1>;",
  },
  {
    name: "Express",
    description: "Fast, unopinionated, minimalist web framework for Node.js",
    logo: logo2,
    exampleCode:
      "app.get('/', function (req, res) { res.send('Hello World') })",
  },
  {
    name: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
    logo: logo3,
    exampleCode: "console.log('Running on Node.js')",
  },
  {
    name: "MySQL",
    description:
      "MySQL is a popular open-source relational database management system",
    logo: logo4,
    exampleCode: "SELECT * FROM users;",
  },
];

const CarouselComponent = () => {
  return (
    <Carousel
      autoplay
      className="w-full shadow-2xl rounded-lg overflow-hidden"
      effect="fade"
    >
      {techDetails.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center h-96 bg-gradient-to-b from-primary2-100 to-primary2-300"
        >
          <div className="p-6 text-center">
            <div className="relative h-32 w-32 mx-auto">
              <Image
                src={tech.logo}
                alt={tech.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="text-xl font-bold text-primary1-500 mt-2">
              {tech.name}
            </h3>
            <p className="text-md text-neutrales-800">{tech.description}</p>
            <pre className="text-sm bg-semantico-info-900 text-neutrales-900 p-3 mt-3 rounded-lg shadow-md">
              <code className="text-white">{tech.exampleCode}</code>
            </pre>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
