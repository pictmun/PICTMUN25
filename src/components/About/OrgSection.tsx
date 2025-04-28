import Image from "next/image";

const OrgSection = () => {
  const images = [
    'images/inquisitor/Issue18.png',
    'images/inquisitor/Issue17.jpeg',
    'images/inquisitor/Issue16.jpg',
    'images/inquisitor/Issue15.png',
  ];

  return (
    <div className="relative h-full flex flex-col gap-12 font-playfair p-8">
      <div className="text-center relative" data-aos="fade-up">
        <h1 className="text-3xl lg:text-4xl text-gold"></h1>
      </div>

      <div className="relative flex flex-col lg:grid lg:grid-cols-2 h-full gap-[75px] px-6">
        
        {/* Image Side */}
        <div className="col-span-1 w-full h-fit flex justify-center" data-aos="fade-up" data-aos-delay="200">
            <Image
                src="/images/About/2.JPG"
                height={350}
                width={500}
                alt="about"
                className="rounded-lg shadow-lg"
            />
        </div>

        {/* Text Side */}
        <div
          className="col-span-1 w-full h-full flex items-center justify-center text-center lg:px-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="leading-7 text-base lg:text-xl text-slate-200 text-left">
            Our organization is built on the universal principle of tolerance, emphasizing the importance of understanding and respecting diverse perspectives. Through our events, conferences, and workshops, we encourage our members to think critically, discuss passionately, and work collaboratively towards common goals. 
            <br /><br />
            Whether you are a seasoned delegate or new to the world of MUN, PICT MUN is a platform where you can hone your skills, broaden your horizons, and become a part of a global community dedicated to making a difference. Join us as we explore the power of dialogue and work towards a brighter future for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrgSection;
