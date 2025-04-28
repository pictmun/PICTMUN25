"use client"; // If you are using Next.js app router
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutClub = () => {
  useEffect(() => {
    AOS.init({
      once: true,       // Animate only once
      duration: 800,    // Duration in ms (overrideable per element too)
      easing: "ease-in-out", // Easing function
    });
  }, []);

  return (
    <div className="relative h-full flex flex-col gap-12 font-playfair bg-blue-dull p-8">
      <div className="text-center relative" data-aos="fade-up">
        <h1 className="text-3xl lg:text-4xl text-gold">About the Club</h1>
      </div>
      <div className="relative flex flex-col-reverse md:grid md:grid-cols-2 h-full gap-[75px] px-6">
        <div className="col-span-1 text-center" data-aos="fade-right" data-aos-delay="100">
          <div className="w-full h-full flex flex-col md:px-8">
            <div className="grow md:block hidden"></div>
            <p className="leading-7 text-base lg:text-xl text-slate-200 text-left">
              PICTMUN is a prestigious club where students immerse themselves in the art of diplomacy, debate, and international relations. The club provides a dynamic environment for delegates to engage in discussions on global issues, develop critical thinking skills, and refine public speaking.
              <br /><br />
              Our conferences attract a diverse group of passionate students, all eager to contribute and propose innovative solutions to pressing global challenges.
              We pride ourselves in fostering an intellectually stimulating atmosphere that incorporates learning, leadership, and the pursuit of excellence
            </p>
            <div className="grow"></div>
          </div>
        </div>

        <div className="col-span-1 w-full h-fit flex justify-center" data-aos="fade-up" data-aos-delay="200">
          <Image
            src="/images/Home/IMG_1447.JPG"
            height={350}
            width={500}
            alt="about"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutClub;
