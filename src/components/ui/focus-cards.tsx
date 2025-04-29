"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconBrandInstagram, IconBrandLinkedinFilled } from "@tabler/icons-react";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={`https://drive.google.com/thumbnail?id=${card.driveFileID}&sz=w1000`}
        referrerPolicy="no-referrer"
        alt={card.name?.split('.')[0]}
        className="object-cover absolute inset-0 h-full w-full"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
      <div className="text-xl md:text-2xl font-medium bg-clip-text text-gold bg-gradient-to-b from-neutral-50 to-neutral-200 flex flex-col gap-1.5 col-span-1">
        <p>{card.name}</p>
        <p>{card.position}</p>
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-gold bg-gradient-to-b from-neutral-50 to-neutral-200 flex gap-1.5 col-span-1">
            <Link href={card.linkedIn} target="_blank"><IconBrandLinkedinFilled className="text-gold"/></Link>
            <Link href={card.linkedIn} target="_blank"><IconBrandInstagram className="text-gold"/></Link>
        </div>
      </div>
        
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  id: string;
  driveFileID: string;
  name: string;
  position: string;
  linkedIn: string;
  Instagram: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-24 max-w-7xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

export function SecretariatCards({ cards }: { cards: Card[] }) {
    const [hovered, setHovered] = useState<number | null>(null);
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-24 max-w-7xl mx-auto md:px-8 w-full">
        <div className="grow col-span-1 md:block hidden"></div>
        {cards.map((card, index) => (
            <div className="md:col-span-2 col-span-1" key={card.id}>
                <Card
                    key={card.id}
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                />
            </div>    
        ))}
      </div>
    );
}
