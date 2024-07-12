import Image from "next/image";
import Hero from "@/components/sections/hero/Hero"
import Technologies from "@/components/sections/technologies/Technologies"
import About from "@/components/sections/about/About";
import AboutImage from "@/components/assets/aboutImage.jpeg"
import Projects from "@/components/sections/projects/Projects";
import Contact from "@/components/sections/contact/Contact";


export default function Home() {
  return (
    <main>
      <div id="inicio"> <Hero /></div>
      <div id="sobre-mi"> <About
        title="Who I am?"
        body1="I am a dedicated and driven engineer, constantly seeking to enhance my professional and personal skills. Recognizing that there is always more to learn, I actively pursue opportunities for growth and improvement. I apply my extensive knowledge and expertise to every project I undertake, ensuring high-quality outcomes. I am open to diverse perspectives and value collaborative efforts, thriving in both leadership and supportive team roles."
        imageAbout={AboutImage}
        leftImage={true}
        withoutButton={true}
      />
      </div>
      <div id="tecnologias"> <Technologies/></div>
      <div id="proyectos"> <Projects/></div>
      <div id="contacto"> <Contact/></div>
    </main>
  );
}
