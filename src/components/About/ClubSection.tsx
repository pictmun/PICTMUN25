"use client"; 
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const ClubSection = () => {
  useEffect(() => {
    AOS.init({
      once: true,       // Animate only once
      duration: 800,    // Duration in ms (overrideable per element too)
      easing: "ease-in-out", // Easing function
    });
  }, []);

  return (
    <div className="relative h-full flex flex-col gap-12 font-playfair bg-blue-dull p-8">
      <div className="text-center relative">
        <h1 className="text-3xl lg:text-4xl text-gold"></h1>
      </div>
      <div className="relative flex flex-col-reverse lg:grid lg:grid-cols-2 h-full gap-[75px] px-6">
        <div className="col-span-1 text-center" data-aos="fade-up" data-aos-delay="100">
          <div className="w-full h-full flex flex-col lg:px-8">
            <div className="grow lg:block hidden"></div>
            <p className="leading-7 text-base lg:text-xl text-slate-200 text-left">
            Welcome to PICT Model United Nations (MUN), where the power of dialogue and the art of diplomacy come together to address the most pressing global issues. Guided by our motto, Think. Discuss. Prosper., we are committed to fostering an environment where thoughtful discussion and open-minded debate pave the way for innovative solutions. 
              <br /><br />
              At PICT MUN, we believe that every conversation has the potential to inspire change and that by engaging in meaningful dialogue, our members can contribute to a more peaceful and prosperous world.
            </p>
            <div className="grow"></div>
          </div>
        </div>

        <div className="col-span-1 w-full h-fit flex justify-center" data-aos="fade-up" data-aos-delay="200">
          <Image
            src="/images/About/1.JPG"
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

export default ClubSection;
