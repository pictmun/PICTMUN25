"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      feedback: "This service exceeded my expectations. Highly recommended!",
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback: "Absolutely loved the experience. Will definitely come back!",
    },
    {
      id: 3,
      name: "Michael Johnson",
      feedback: "Top-notch support and fantastic quality.",
    },
    {
      id: 4,
      name: "Emily Williams",
      feedback: "A truly outstanding team. They go above and beyond.",
    },
    {
      id: 5,
      name: "David Brown",
      feedback: "Five stars! I couldn’t be happier with the results.",
    },
  ];

  return (
    <div className="bg-blue-dull p-8 font-playfair">
      <div className="text-center relative my-6" data-aos="fade-up">
        <h1 className="text-3xl lg:text-4xl text-gold">Testimonials</h1>
      </div>
      <Swiper
        style={{ padding: '48px' }}
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
        autoplay={{ delay: 4000 }}
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
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="relative rounded-xl overflow-hidden shadow-lg mx-auto p-6 h-64 flex flex-col justify-center items-center text-center border bg-[#1C2125] border-dull_gold/25">
              <p className="text-slate-200 mb-4 italic">"{testimonial.feedback}"</p>
              <h3 className="text-lg font-bold text-dull_gold">{testimonial.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;
