"use client";

import Image from "next/image";

interface Props {
  onClose: () => void;
}

export default function AnnouncementModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center p-4">
      <div className="relative max-w-2xl w-full rounded-2xl border-2 border-gold p-2 bg-[#174A3A] shadow-[0_0_35px_rgba(166,124,82,0.6)]">
        <button
  onClick={onClose}
  className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-[#A67C52] text-[#F2E9DB] text-xl font-bold shadow-[0_0_15px_rgba(166,124,82,0.8)] hover:scale-110 transition"
>
  ✕
</button>

        <Image
  src="/images/SAVETHEDATES.png"
  alt="Save the Date"
  width={1000}
  height={1400}
  className="w-full h-auto rounded-xl"
  priority
/>
      </div>
    </div>
  );
}