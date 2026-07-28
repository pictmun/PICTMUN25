"use client";

import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { TextFlippingBoard } from "../ui/text-flipping-board";

type RegisterLoadingModalProps = {
  onClose: () => void;
};

const MESSAGES = [
`PICTMUN'26
PREPARING DIPLOMACY
REGISTRATIONS SOON`,

`SECRETARIAT READY
COMMITTEES READY
STAY TUNED`,

`CHAIRS BRIEFED
AGENDAS LOCKED
ALMOST READY`,

`DELEGATES ARRIVE
COUNTRIES ASSIGNED
PREPARE TO DEBATE`,

`THINK GLOBAL
SPEAK BOLD
LEAD WITH PURPOSE`,

`NEGOTIATE
COLLABORATE
INSPIRE`,

`THE STAGE IS SET
THE WORLD AWAITS
SEE YOU SOON`,
];

export default function RegisterLoadingModal({
  onClose,
}: RegisterLoadingModalProps) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [done, setDone] = useState(false);

  const currentMessage = useMemo(() => MESSAGES[messageIndex], [messageIndex]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;

    if (messageIndex < MESSAGES.length - 1) {
      timer = setTimeout(() => {
        setMessageIndex((prev) => prev + 1);
      }, messageIndex === 0 ? 1500 : 1800);
    } else {
      timer = setTimeout(() => {
        setDone(true);
      }, 700);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [messageIndex]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-[#0B2B26]/80 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-[#174A3A] bg-[#0B2B26] shadow-[0_30px_120px_rgba(0,0,0,0.65)]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A67C52] to-transparent opacity-80" />
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#174A3A] to-transparent opacity-70" />
        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-[#174A3A] to-transparent opacity-70" />

        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-[#A67C52]/30 bg-[#174A3A]/40 p-2 text-[#F2E9DB]/85 transition hover:bg-[#702F3B]/30 hover:text-[#F2E9DB]"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col gap-8 px-5 py-8 sm:px-8 sm:py-10">
          <div className="text-center">
            <p className="mb-2 text-sm uppercase tracking-[0.35em] text-[#A67C52]">
              PICTMUN&apos;26
            </p>
            <h2 className="text-3xl font-bold text-[#F2E9DB] sm:text-4xl">
              Loading the next chapter of diplomacy
            </h2>
            <p className="mt-3 text-sm text-[#F2E9DB]/75 sm:text-base">
              Registrations are not live yet. We&apos;re getting everything ready.
            </p>
          </div>

          <div className="flex justify-center">
            <TextFlippingBoard
              text={currentMessage}
              className="shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
            />
          </div>

          <div className="mx-auto w-full max-w-2xl">
            <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-[#F2E9DB]/55">
              <span>Launch sequence</span>
              <span>
                {messageIndex + 1} / {MESSAGES.length}
              </span>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-[#174A3A]/70">
              <div
                className="h-full rounded-full bg-[#A67C52] transition-all duration-500"
                style={{
                  width: `${((messageIndex + 1) / MESSAGES.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 text-center">
            {done ? (
              <button
                onClick={onClose}
                className="rounded-full bg-[#A67C52] px-6 py-3 text-sm font-semibold text-[#0B2B26] transition hover:bg-[#F2E9DB]"
              >
                Close
              </button>
            ) : (
              <p className="text-sm text-[#F2E9DB]/65">
                Stay tuned. Registration will open soon.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}