import ClubSection from "@/components/About/ClubSection";
import EventSection from "@/components/About/Events/EventSection";
import OrgSection from "@/components/About/OrgSection";
import Image from "next/image";

const Page = () => {
  return (
    <div className='min-h-screen overflow-x-hidden font-playfair'>
        <div className="h-[50vh] relative pt-24">
            <h1 className="text-center text-gold text-4xl lg:text-5xl relative font-bold">
                About the Club
            </h1> 
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 xl:-translate-y-1/12 z-20">
                <Image 
                    src={'/logos/logo2025.png'}
                    height={400}
                    width={400}
                    alt="PICT MUN LOGO"
                    className="xl:block hidden"
                />
                <Image 
                    src={'/logos/logo2025.png'}
                    height={250}
                    width={250}
                    alt="PICT MUN LOGO"
                    className="xl:hidden block"
                />
            </div>
        </div>
        <div className="relative bg-blue-dull">
            <ClubSection/>
        </div>
        <div className="relative bg-blue-dull">
            <OrgSection/>
        </div>
        <div id="Events" className="h-full">
            <h1 className="text-center text-gold text-5xl relative font-bold pt-24">
                Events
            </h1> 
            <EventSection/>
            <div className="h-[12vh] grow"></div>
        </div>
    </div>
  );
};

export default Page;