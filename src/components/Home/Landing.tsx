"use client";

import { useState } from "react";
import { GithubGlobe } from "../githubGlobe";
import TailwindButton from "../ui/tailwindcss-button";
import { Vortex } from "../ui/Vortex";
import Image from "next/image";
import RegisterLoadingModal from "./registerLoadingModal";

const Landing = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <>
      <Vortex
        backgroundColor="#174A3A"
        rangeY={800}
        particleCount={50}
        baseHue={150}
        className="relative flex h-screen w-screen items-center justify-end flex-col overflow-hidden"
      >
        <div className="absolute z-20 h-fit w-full flex flex-col gap-4 justify-center items-center top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-playfair text-gold">
          <Image
            src={"/logos/logo2025.png"}
            height={200}
            width={200}
            alt="PICT MUN LOGO"
            className="md:block hidden"
          />
          <Image
            src={"/logos/logo2025.png"}
            height={100}
            width={100}
            alt="PICT MUN LOGO"
            className="md:hidden block"
          />
          <p className="text-5xl md:text-8xl pointer-events-none">PICT MUN</p>
          <p className="text-xl md:text-3xl pointer-events-none">
            Think • Discuss • Prosper
          </p>

          <TailwindButton
            text="Register"
            cls="px-8 py-1"
            onClick={() => setShowRegisterModal(true)}
            aria-label="Open registration teaser"
          />
        </div>

        <GithubGlobe />
      </Vortex>

      {showRegisterModal && (
        <RegisterLoadingModal onClose={() => setShowRegisterModal(false)} />
      )}
    </>
  );
};

export default Landing;