import { ImagesSlider } from "@/components/ui/images-slider";
import { Timeline } from "@/components/ui/timeline"

const EventSection = () => {
  const conference=[
        '/images/Events/Conference/1.JPG',
        '/images/Events/Conference/2.JPG',
        '/images/Events/Conference/3.jpg',
  ];
  const intra=[
        '/images/Events/Intra/1.jpg',
        '/images/Events/Intra/2.jpg',
        '/images/Events/Intra/3.jpg',
  ];
  const adlib=[
        '/images/Events/Adlib/1.jpg',
        '/images/Events/Adlib/2.jpg',
        '/images/Events/Adlib/3.jpg',
  ];
  const FEinduction=[
        '/images/Events/Conference/1.JPG',
        '/images/Events/Conference/2.JPG',
        '/images/Events/Conference/3.jpg',
  ];
  const data = [
    {
        title: "PICTMUN Conference",
        content: (
            <div className="text-slate-200 flex flex-col gap-4 h-full ">
                <div className="grid grid-cols-2 gap-4 h-[300px]">
                    <ImagesSlider
                        className="w-auto h-full max-h-[550px] rounded-2xl object-contain"
                        images={conference}
                        >
                        <div></div>
                    </ImagesSlider>
                    <ImagesSlider
                        className="w-auto h-full max-h-[550px] rounded-2xl object-contain"
                        images={conference}
                        >
                        <div></div>
                    </ImagesSlider>
                </div>
                <p>PICT MUN conference is one of the most anticipated MUN conferences in the Pune circuit. At PICT MUN, we strive to create an environment that fosters thoughtful dialogue, mutual respect, and intellectual growth. Delegates from all over the country and even abroad, convene on the hottest of agendas; all driven by a shared passion for diplomacy, debate, and global cooperation. Whether you are a seasoned MUN-er; or a newbie, the PICT MUN promises to be an experience that will leave you forever enthralled!</p>
            </div>
        )
    },
    {
        title: "PICT Intra-MUN",
        content: (
            <div className="text-slate-200 flex flex-col gap-4 h-full ">
                <div className="grid grid-cols-2 gap-4 h-[300px]">
                    <ImagesSlider
                        className="w-auto h-full max-h-[550px] rounded-2xl object-contain"
                        images={intra}
                        >
                        <div></div>
                    </ImagesSlider>
                    <ImagesSlider
                        className="w-auto h-full max-h-[550px] rounded-2xl object-contain"
                        images={intra}
                        >
                        <div></div>
                    </ImagesSlider>
                </div>
                <p>PICT Intra MUN is an exclusive event for the students of PICT. Its underlying intent is to deepen the understanding of the United Nations and foster leadership, public speaking and diplomacy skills of the students. The event is an invigorating embodiment of the motto which we hold very dear to our hearts - think, discuss, prosper.</p>
            </div>
        )
    },
    {
        title: "AdLib",
        content: (
            <div className="text-slate-200 flex flex-col gap-4 h-full ">
                <div className="grid grid-cols-2 gap-4 h-[300px]">
                    <ImagesSlider
                        className="w-auto h-full max-h-[550px] rounded-2xl object-contain"
                        images={adlib}
                        >
                        <div></div>
                    </ImagesSlider>
                    <ImagesSlider
                        className="w-auto h-full max-h-[550px] rounded-2xl object-contain"
                        images={adlib}
                        >
                        <div></div>
                    </ImagesSlider>
                </div>
                <p>ADLIB is an annual convivial competition organised by the PICT MUN, exclusively for PICTians. It consists of multiple stages crafted to simulate events like press conferences, UN committees, roles of journalists and diplomats. After managing to succeed the initial rounds, the participants head towards exhilarating stages that challenge their mettle, to test journalistic skills and strategic communication techniques in them.</p>
            </div>
        )
    },
    {
        title: "FE Induction",
        content: (
            <div className="text-slate-200 flex flex-col gap-4 h-full ">
                <div className="grid grid-cols-2 gap-4 h-[300px]">
                    <ImagesSlider
                        className="w-auto h-full max-h-[550px] rounded-2xl object-contain"
                        images={FEinduction}
                        >
                        <div></div>
                    </ImagesSlider>
                    <ImagesSlider
                        className="w-auto h-full max-h-[550px] rounded-2xl object-contain"
                        images={FEinduction}
                        >
                        <div></div>
                    </ImagesSlider>
                </div>
                <p>FE Induction lays the foundation for welcoming newly admitted first year students into PICT MUN. It provides a platform for existing team members to share their experiences and journey of diplomacy, through the various club activities. The team impressive track record is unveiled through achievements and accolades. This serves as both a testament to the team past successes and an inspiring beacon for the future.</p>
            </div>
        )
    },
  ]
  return (
    <div className="relative w-full overflow-clip text-base lg:text-xl">
      <Timeline data={data} />
    </div>
  )
}

export default EventSection
