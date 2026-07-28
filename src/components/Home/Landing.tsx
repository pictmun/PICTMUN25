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

        {/* Hero Content */}
        <div
          className="
  absolute
  z-20
  w-full
  flex
  flex-col
  items-center
  justify-center
  px-4
  left-1/2
  -translate-x-1/2
  -translate-y-1/2

  top-[32%]
  sm:top-[40%]
  md:top-[42%]
  lg:top-[43%]
"
        >

          {/* Logo */}
          <Image
            src="/logos/logo2026.png"
            width={220}
            height={220}
            alt="PICT MUN LOGO"
            className="
  w-50
  sm:w-32
  md:w-40
  lg:w-44
  xl:w-52
  h-auto
  translate-y-0
  sm:translate-y-5
  -translate-x-1
"
          />


          {/* Text + Button Group */}
          <div
  className="
    flex
    flex-col
    items-center
    gap-2
    sm:gap-3
    md:gap-4

    -translate-y-1
    sm:-translate-y-5
    md:-translate-y-10
  "
>

            <p
              className="
                pointer-events-none
                text-5xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                xl:text-7xl
                font-playfair
                text-center
                leading-tight
                text-gold
              "
            >
              PICT MUN
            </p>


            <p
              className="
                pointer-events-none
                text-base
                sm:text-base
                md:text-lg
                lg:text-xl
                xl:text-2xl
                text-center
                px-4
                text-gold
              "
            >
              Think • Discuss • Prosper
            </p>


            <TailwindButton
              text="Register"
              cls="
px-5 py-1.5 text-xs
sm:px-6 sm:py-2 sm:text-sm
md:text-base
"
              onClick={() => setShowRegisterModal(true)}
              aria-label="Open registration teaser"
            />

          </div>


        </div>


        {/* Globe */}
        <GithubGlobe />

      </Vortex>


      {showRegisterModal && (
        <RegisterLoadingModal
          onClose={() => setShowRegisterModal(false)}
        />
      )}
    </>
  );
};

export default Landing;