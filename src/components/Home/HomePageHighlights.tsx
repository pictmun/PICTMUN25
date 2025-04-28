"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const HomePageHighlights = () => {
  const highlights = [
    {
        id: 1,
        title: "Highlight 1",
        description: "This is the Highlight 1.",
        image: "images/Home/IMG_1525.JPG",
      },
      {
        id: 2,
        title: "Highlight 2",
        description: "This is the Highlight 2.",
        image: "images/Home/IMG_1532.JPG", 
      },
      {
        id: 3,
        title: "Highlight 3",
        description: "This is the Highlight 3.",
        image: "images/Home/IMG_1564.JPG",
      },
    {
        id: 4,
        title: "Highlight 4",
        description: "This is the Highlight 4.",
        image: "images/Home/IMG_1741.JPG",
      },
      {
        id: 5,
        title: "Highlight 5",
        description: "This is the Highlight 5.",
        image: "images/Home/IMG_1758.JPG",
      },
    {
        id: 6,
        title: "Highlight 6",
        description: "This is the Highlight 6.",
        image: "images/Home/IMG_4866.jpg",
      },
      {
        id: 7,
        title: "Highlight 7",
        description: "This is the Highlight 7.",
        image: "images/Home/IMG_5089.jpg", 
      },
    {
        id: 8,
        title: "Highlight 8",
        description: "This is the Highlight 8.",
        image: "images/Home/IMG_7178.jpg", 
      },
      {
        id: 9,
        title: "Highlight 9",
        description: "This is the Highlight 9.",
        image: "images/Home/IMG_9999.jpg",
      },
      {
        id: 10,
        title: "Highlight 10",
        description: "This is the Highlight 10.",
        image: "images/Home/ptk.jpg", 
      },
  ]
  return (
    <div className=" bg-blue-dull p-8 font-playfair">
      <div className="text-center relative my-6" data-aos="fade-up">
        <h1 className="text-3xl lg:text-4xl text-gold">Highlights</h1>
      </div>
      <Swiper
          style={{padding: '48px'}}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            disabledClass: 'swiper-button-disabled',
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet custom-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
          }}
          autoplay={{ delay: 3500 }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          centeredSlides={true}
          loop={true}
        >
          {highlights.map((highlight) => (
            <SwiperSlide key={highlight.id}>
              <div className="relative rounded-xl overflow-hidden shadow-lg mx-auto">
                <img src={highlight.image} alt={highlight.title} className="w-full h-64 object-cover" /> 
              </div>
            </SwiperSlide>
          ))}
          {/* Navigation buttons */}
          {/* <div className="swiper-button-next hidden lg:block" style={{ color: '#e6ba63' }}></div>
          <div className="swiper-button-prev hidden lg:block" style={{ color: '#e6ba63' }}></div> */}
        </Swiper>
    </div>
  )
}

export default HomePageHighlights
