"use client";
import { useState } from "react"
import Link from "next/link"
import { Menu, X} from "lucide-react"
import Image from "next/image"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [onMarquee, setOnMarquee] = useState(false)
  const notice = "" //edit here to activate notice
  return (
    <nav className="bg-[#2e0f15] shadow-lg fixed w-full z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image 
                src="/logos/logo2025.png"
                alt="logo"
                width={50}
                height={50}
                priority={true}
              />
            </Link>
          </div>
          <div className="hidden sm:ml-6 md:flex sm:items-center text-gold text-lg font-playfair">
            <Link
              href="/"
              className="px-3 py-2 rounded-md hover:text-dull_gold"
            >
              Home
            </Link>
            <Link
              href="/About"
              className="px-3 py-2 rounded-md hover:text-dull_gold"
            >
              About
            </Link>
            <Link
              href="/About/#Events"
              className="px-3 py-2 rounded-md hover:text-dull_gold"
            >
              Events
            </Link>
            <Link
              href="/Inquisitor"
              className="px-3 py-2 rounded-md hover:text-dull_gold"
            >
              Inquisitor
            </Link>
            <Link
              href="/Gallery"
              className="px-3 py-2 rounded-md hover:text-dull_gold"
            >
              Gallery
            </Link>
            <Link
              href="/Team"
              className="px-3 py-2 rounded-md hover:text-dull_gold"
            >
              Team
            </Link>
            <Link
              href="/Timeline"
              className="px-3 py-2 rounded-md hover:text-dull_gold"
            >
              Timeline
            </Link>
            <Link
              href="/Sponsors"
              className="px-3 py-2 rounded-md hover:text-dull_gold"
            >
              Sponsors
            </Link>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gold hover:text-blue-dull hover:bg-dull_gold "
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 text-lg font-playfair" onClick={()=> setIsOpen(false)}>
            <Link
              href="/"
              className="block px-3 py-2 rounded-md font-medium text-gold hover:text-blue-dull hover:bg-dull_gold"
            >
              Home
            </Link>
            <Link
              href="/About"
              className="block px-3 py-2 rounded-md font-medium text-gold hover:text-blue-dull hover:bg-dull_gold"
            >
              About
            </Link>
            <Link
              href="/About/#Events"
              className="block px-3 py-2 rounded-md font-medium text-gold hover:text-blue-dull hover:bg-dull_gold"
            >
              Events
            </Link>
            <Link
              href="/Inquisitor"
              className="block px-3 py-2 rounded-md font-medium text-gold hover:text-blue-dull hover:bg-dull_gold"
            >
              Inquisitor
            </Link>
            <Link
              href="/Gallery"
              className="block px-3 py-2 rounded-md font-medium text-gold hover:text-blue-dull hover:bg-dull_gold"
            >
              Gallery
            </Link>
            <Link
              href="/Team"
              className="block px-3 py-2 rounded-md font-medium text-gold hover:text-blue-dull hover:bg-dull_gold"
            >
              Team
            </Link>
            <Link
              href="/Timeline"
              className="block px-3 py-2 rounded-md font-medium text-gold hover:text-blue-dull hover:bg-dull_gold"
            >
              Timeline
            </Link>
            <Link
              href="/Sponsors"
              className="block px-3 py-2 rounded-md font-medium text-gold hover:text-blue-dull hover:bg-dull_gold"
            >
              Sponsors
            </Link>
          </div>
        </div>
      )}
      {notice && (
        <div className="w-full bg-gold h-5" onMouseOver={()=>setOnMarquee(true)} onMouseOut={()=>setOnMarquee(false)} onTouchStart={()=>setOnMarquee(true)} onTouchEnd={()=>setOnMarquee(false)}>
          {/* <div className={` text-sm text-blue-dull font-playfair w-full font-bold flex gap-2`}> */}
          <div className={` text-sm text-blue-dull font-playfair w-full font-bold flex gap-2 ${!onMarquee ? 'animate-marquee': ''}`}> 
            <p className="text-center w-full">{notice}</p>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

