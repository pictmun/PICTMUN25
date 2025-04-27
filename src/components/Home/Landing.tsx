import { GithubGlobe } from "../githubGlobe";
import { Vortex } from "../ui/Vortex";


const Landing = () => {
  return (
    <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={50}
        baseHue={10}
        className="flex h-screen items-center flex-col justify-end md:px-6 overflow-hidden py-4 w-full"
      >
        <div className="absolute z-20 pointer-events-none h-fit w-full flex flex-col gap-4 justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-playfair text-gold">
          <p className="text-6xl md:text-9xl">PICT MUN</p>
          <p className="text-xl md:text-4xl">Think Discuss Prosper</p>
        </div>
        <GithubGlobe/>
    </Vortex>    
  )
}

export default Landing
