import Link from "next/link";
import { GithubGlobe } from "../githubGlobe";
import TailwindButton from "../ui/tailwindcss-button";
import { Vortex } from "../ui/Vortex";
import Image from "next/image";


const Landing = () => {
  return (
    <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={50}
        baseHue={10}
        className="flex h-screen items-center flex-col justify-end md:px-6 overflow-hidden py-4 w-full shadow-2xl"
      >
        <div className="absolute z-20 h-fit w-full flex flex-col gap-4 justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 font-playfair text-gold">
          <Image 
            src={'/logos/golden-logo.webp'}
            height={250}
            width={250}
            alt="PICT MUN LOGO"
            className="md:block hidden"
          />
          <Image 
            src={'/logos/golden-logo.webp'}
            height={150}
            width={150}
            alt="PICT MUN LOGO"
            className="md:hidden block"
          />
          <p className="text-6xl md:text-9xl pointer-events-none">PICT MUN</p>
          <p className="text-xl md:text-4xl pointer-events-none">Think Discuss Prosper</p>
          <Link target="_blank" href={"https://linktr.ee/pictmun"}>
            <TailwindButton text="Register" cls="px-8 py-1"/>
          </Link>
        </div>
        <GithubGlobe/>
    </Vortex>    
  )
}

export default Landing
