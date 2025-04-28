"use client"; 
import { useEffect } from "react";
import TailwindButton from "../ui/tailwindcss-button";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

interface BookCardProps {
    imgSrc: string;
    title: string;
    dlink: string;
}

const BookCard: React.FC<BookCardProps> = ({ imgSrc, title, dlink}) => {
    useEffect(() => {
        AOS.init({
          once: true,       // Animate only once
          duration: 800,    // Duration in ms (overrideable per element too)
          easing: "ease-in-out", // Easing function
        });
    }, []);
    return (
        <div className="flex flex-col items-center gap-2.5 justify-center py-5" data-aos="fade-up">
            <div>
                <Image
                    src={`/${imgSrc}`}
                    alt="inquistor"
                    height={250}
                    width={200}
                    className="object-cover transition-transform duration-300 ease-in-out hover:scale-105 rounded-2xl"
                />
            </div>
            <div className="flex items-center justify-center gap-2 px-3">
                <p className="w-1/2 text-slate-200">{title}</p>
                <Link
                href='/inquisitor/Newsletter_Issue18.0.pdf'
                download={true}
                >
                    <TailwindButton text="Download" cls="px-3 text-xs md:text-base "/>
                </Link>
            </div>
        </div>
    );
};

export default BookCard;