"use client";

import { ImagesSlider } from "../ui/images-slider";

const OurNewsletter = () => {
  const images = [
    'images/inquisitor/Issue18.png',
    'images/inquisitor/Issue17.jpeg',
    'images/inquisitor/Issue16.jpg',
    'images/inquisitor/Issue15.png',
  ];

  return (
    <div className="relative h-full flex flex-col gap-12 font-playfair bg-blue-dull p-8">
      <div className="text-center relative" data-aos="fade-up">
        <h1 className="text-3xl lg:text-4xl text-gold">Our Newsletter - The Inquisitor</h1>
      </div>

      <div className="relative flex flex-col md:grid md:grid-cols-2 h-full gap-[75px] px-6">
        
        {/* Image Side */}
        <div
          className="col-span-1 w-full flex justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="relative w-auto min-h-[400px] aspect-[5/7]">
            <ImagesSlider
              className="w-auto h-full max-h-[550px] rounded-2xl object-contain"
              images={images}
            >
              <div></div>
            </ImagesSlider>
          </div>
        </div>

        {/* Text Side */}
        <div
          className="col-span-1 w-full h-full flex items-center justify-center text-center md:px-8"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <p className="leading-7 text-base lg:text-xl text-slate-200 text-left">
            The Inquisitor is the official, bimonthly magazine of PICTMUN offering perspicacious perspectives on global affairs, diplomacy, and geopolitics. It serves as a platform for our members to explore and analyze pressing concerns, providing readers with thought-provoking articles.
            <br /><br />
            Our magazine is crafted by a team of passionate students committed to delivering high-quality content. Each edition features a diverse range of articles that inspire critical thinking and intellectual curiosity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurNewsletter;
