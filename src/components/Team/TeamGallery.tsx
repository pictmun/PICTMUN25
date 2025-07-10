"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FocusCards, SecretariatCards } from "../ui/focus-cards";

interface Year {
  id: string;
  name: number;
}

interface Entry {
  id: string;
  name: string;
  position: string;
  driveFileID: string;
  linkedIn: string;
  Instagram: string;
}

interface YearEntries {
  Secretariat: Entry[];
  USG: Entry[];
  Other: Entry[];
}

interface categoryTitle {
    Secretariat: string;
    USG: string;
    Other: string;
}

// STATIC DATA
const staticYears: Year[] = [
  { id: "1", name: 2025 },
  { id: "2", name: 2024 },
  { id: "3", name: 2023 },
  { id: "4", name: 2022 },
  { id: "5", name: 2021 },
];

const staticEntries: Record<string, YearEntries> = {
  "1": {
    Secretariat: [
      { id: "e1", name: "Image1", position: "Secretary General", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e2", name: "Image2", position: "Director General", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e3", name: "Image3", position: "Deputy Secretary General", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e4", name: "Image4", position: "Executive Director", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e5", name: "Image5", position: "Chief Of Staff", driveFileID: "", linkedIn: "https://www.linkedin.com/in/tanishchaudhari/", Instagram: "https://www.instagram.com/tanishc228/" },
    ],
    USG: [
      { id: "e6", name: "Image2", position: "USG Technical", driveFileID: "/images/team/Harsh_Dalvi.jpg", linkedIn: "", Instagram: "" },
      { id: "e7", name: "Image2", position: "USG Technical", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e8", name: "Image2", position: "USG Outreach", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e9", name: "Image2", position: "USG Outreach", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e10", name: "Image2", position: "USG Design", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e11", name: "Image2", position: "USG Design", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e12", name: "Image2", position: "USG Delegate Affairs", driveFileID: "", linkedIn: "", Instagram: "" },
      { id: "e13", name: "Image2", position: "USG Delegate Affairs", driveFileID: "", linkedIn: "https://www.linkedin.com/in/tanishchaudhari/", Instagram: "https://www.instagram.com/tanishc228/" },
      { id: "e14", name: "Image2", position: "USG Operations", driveFileID: "", linkedIn: "https://www.linkedin.com/in/tanishchaudhari/", Instagram: "https://www.instagram.com/tanishc228/" },
      { id: "e15", name: "Image2", position: "USG Operations", driveFileID: "", linkedIn: "https://www.linkedin.com/in/tanishchaudhari/", Instagram: "https://www.instagram.com/tanishc228/" },
      { id: "e16", name: "Image2", position: "USG Content and Research", driveFileID: "", linkedIn: "https://www.linkedin.com/in/tanishchaudhari/", Instagram: "https://www.instagram.com/tanishc228/" },
      { id: "e17", name: "Image2", position: "USG Content and Research", driveFileID: "", linkedIn: "https://www.linkedin.com/in/tanishchaudhari/", Instagram: "https://www.instagram.com/tanishc228/" },
      { id: "e18", name: "Image2", position: "USG Marketing", driveFileID: "", linkedIn: "https://www.linkedin.com/in/tanishchaudhari/", Instagram: "https://www.instagram.com/tanishc228/" },
      { id: "e19", name: "Image2", position: "USG Marketing", driveFileID: "", linkedIn: "https://www.linkedin.com/in/tanishchaudhari/", Instagram: "https://www.instagram.com/tanishc228/" },
    ],
    Other: [
      { id: "e20", name: "Image3", position: "Design", driveFileID: "", linkedIn: "https://www.linkedin.com/in/tanishchaudhari/", Instagram: "https://www.instagram.com/tanishc228/" },
    ],
  },
  "2": {
    Secretariat: [],
    USG: [],
    Other: [],
  },
  "3": {
    Secretariat: [],
    USG: [],
    Other: [],
  },
};

const categoryTitle: categoryTitle = {
    "Secretariat": "The Secretariat", "USG": "Under Secretary General", "Other": "Volunteers",
}


export default function TeamGallery() {
  const [years, setYears] = useState<Year[]>([]);
  const [selectedYear, setSelectedYear] = useState<Year | null>(null);
  const [yearEntries, setYearEntries] = useState<YearEntries | null>(null);

  useEffect(() => {
    const sortedYears = [...staticYears].sort((a, b) => b.name - a.name);
    setYears(sortedYears);
    if (sortedYears.length > 0) {
      setSelectedYear(sortedYears[0]);
      setYearEntries(staticEntries[sortedYears[0].id] || { Secretariat: [], USG: [], Other: [] });
    }
  }, []);

  const handleYearChange = (year: Year) => {
    setSelectedYear(year);
    setYearEntries(staticEntries[year.id] || { Secretariat: [], USG: [], Other: [] });
  };

  return (
    <div className="mx-auto px-4 py-2">
      {/* Year Selector */}
      <div className="w-full relative">
        <Swiper
          style={{ padding: '36px' }}
          slidesPerView={2}
          spaceBetween={20}
          centeredSlides={true}
          modules={[Navigation, Pagination]}
          className="w-full max-w-md md:max-w-lg py-4 relative"
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet custom-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
          }}
        >
          {years.map((year) => (
            <SwiperSlide key={year.id}>
              <button
                onClick={() => handleYearChange(year)}
                className={`w-full px-4 py-2 rounded-lg font-semibold text-xl transition
                  ${selectedYear?.id === year.id
                    ? 'bg-dull_gold text-blue-dull'
                    : 'bg-blue-dull text-dull_gold'
                  }`}
              >
                Year {year.name}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-prev invisible md:visible" style={{ color: '#e6ba63' }}></div>
        <div className="swiper-button-next invisible md:visible" style={{ color: '#e6ba63' }}></div>
        <div className="swiper-pagination mt-6" />
      </div>

      {/* Entry Categories */}
      {selectedYear && yearEntries && (
        <div className="mt-8 space-y-8">
          {["Secretariat", "USG", "Other"].map((category) => {
            const entries = yearEntries[category as keyof YearEntries];
            return (
              <div key={category}>
                {entries.length > 0 && category !== "Secretariat" ? (
                <>
                  { entries.length > 0 && <h2 className="text-4xl font-bold mb-6 py-8 text-center text-gold">{categoryTitle[category as keyof YearEntries]}</h2>}
                  <FocusCards cards={entries} />
                </>
                ) : (
                <>
                  { entries.length > 0 && <h2 className="text-4xl font-bold mb-6 py-8 text-center text-gold">{categoryTitle[category as keyof YearEntries]}</h2>}
                  <SecretariatCards cards={entries} />
                </> 
                )
               }
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
