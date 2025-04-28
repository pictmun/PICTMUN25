"use client"; 
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

interface SponsorCardProps {
    imgSrc: string;
    title: string;
    delay: number;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ imgSrc, title, delay}) => {
    useEffect(() => {
        AOS.init({
          once: true,       // Animate only once
          duration: 800,    // Duration in ms (overrideable per element too)
          easing: "ease-in-out", // Easing function
        });
    }, []);
    return (
        <div className="flex flex-col items-center gap-2.5 justify-center py-5" data-aos="fade-up" data-aos-delay={`${delay}`}>
            <div>
                <Image
                    src={`/${imgSrc}`}
                    alt="inquistor"
                    height={350}
                    width={300}
                    className="object-cover transition-transform duration-300 ease-in-out hover:scale-105 rounded-2xl"
                />
            </div>
            <div className="flex items-center justify-center gap-2 px-3">
                <p className="w-full text-slate-200 text-xl">{title}</p>
            </div>
        </div>
    );
};

export default SponsorCard;