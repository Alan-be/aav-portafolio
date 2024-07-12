"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Asegúrate de haber instalado framer-motion

const navigation = [
  { name: "Home", path: "#inicio" },
  { name: "About", path: "#sobre-mi" },
  { name: "Technologies", path: "#tecnologias" },
  { name: "Projects", path: "#proyectos" },
  { name: "Contact", path: "#contacto" },
];

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState("Inicio");

  useEffect(() => {
    const routeName = window.location.hash;
    const selectedItem = navigation.find((item) => item.path === routeName);
    if (selectedItem) {
      setSelectedLink(selectedItem.name);
    }
  }, []);

  const handleNavLinkClick = (name) => {
    setSelectedLink(name);
    const section = document.querySelector(
      name.toLowerCase().replace(/\s+/g, "-")
    );
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="align-center fixed left-0 top-0 z-[100] mx-auto my-4 flex w-full justify-center">
      <div className="w-11/12 rounded-full bg-white p-2 shadow-lg md:w-3/4 lg:w-1/2 lg:p-4">
        <ul className="flex items-center justify-evenly lg:justify-evenly">
          {navigation.map((item) => {
            const isSelected = item.name === selectedLink;
            return (
              <li
                key={item.name}
                onClick={() => handleNavLinkClick(item.name)}
                className="relative cursor-pointer"
              >
                <a href={item.path}>
                  <motion.span
                    className={`relative text-sm leading-6 no-underline ${
                      isSelected
                        ? "font-semibold text-primary2-500"
                        : "text-neutral-500"
                    }`}
                    whileHover={{ scale: 1.1, color: "#ff4500" }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.span>
                  {isSelected && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-primary2-500"
                      layoutId="underline"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
