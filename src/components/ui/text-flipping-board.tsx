"use client";

import React from "react";

type TextFlippingBoardProps = {
  text: string;
  className?: string;
};

function FlipCell({
  char,
  delay,
}: {
  char: string;
  delay: number;
}) {
  const isSpace = char === " ";
  const displayChar = isSpace ? "\u00A0" : char;

  if (isSpace) {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-8 w-5 sm:h-10 sm:w-6 md:h-12 md:w-7 lg:h-14 lg:w-8 items-center justify-center rounded-md border border-[#A67C52]/10 bg-[#174A3A]/20 sm:h-14 sm:w-8"
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className="inline-flex h-8 w-5 sm:h-10 sm:w-6 md:h-12 md:w-7 lg:h-14 lg:w-8 items-center justify-center rounded-md border border-[#A67C52]/25 bg-[#174A3A] text-[#F2E9DB] shadow-[0_10px_25px_rgba(0,0,0,0.35)] sm:h-14 sm:w-8"
      style={{
        animation: `flipIn 420ms cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms both`,
      }}
    >
      <span className="select-none font-mono text-xs sm:text-sm md:text-base lg:text-lg font-semibold leading-none tracking-[0.08em] md:tracking-[0.15em]">
        {displayChar}
      </span>
    </span>
  );
}

export function TextFlippingBoard({
  text,
  className = "",
}: TextFlippingBoardProps) {
  const lines = text.split("\n");

  return (
    <div
      className={`w-full max-w-5xl overflow-x-auto rounded-2xl md:rounded-[2rem] border border-[#A67C52]/30 bg-[#0B2B26] px-3 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 ${className}`}
      role="img"
      aria-label={text.replace(/\n/g, " ")}
    >
      <div className="flex flex-col items-center justify-center gap-3 sm:gap-4">
        {lines.map((line, lineIndex) => {
          if (line.length === 0) {
            return <div key={`blank-${lineIndex}`} className="h-8 sm:h-10 md:h-12" />;
          }

          return (
            <div
              key={`${lineIndex}-${line}`}
              className="flex flex-wrap items-center justify-center gap-1 md:gap-2"
            >
              {Array.from(line).map((char, charIndex) => (
                <FlipCell
                  key={`${lineIndex}-${charIndex}-${char}`}
                  char={char}
                  delay={0}
                />
              ))}
            </div>
          );
        })}
      </div>

      <style jsx global>{`
        @keyframes flipIn {
          0% {
            transform: perspective(900px) rotateX(90deg) translateY(-10px);
            opacity: 0;
            filter: blur(2px);
          }
          60% {
            transform: perspective(900px) rotateX(-8deg) translateY(0);
            opacity: 1;
            filter: blur(0);
          }
          100% {
            transform: perspective(900px) rotateX(0deg) translateY(0);
            opacity: 1;
            filter: blur(0);
          }
        }
      `}</style>
    </div>
  );
}

export default TextFlippingBoard;