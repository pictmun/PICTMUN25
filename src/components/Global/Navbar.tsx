"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X} from "lucide-react"
import Image from "next/image"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#232A2F] shadow-lg fixed w-full z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image 
                src="/logos/golden-logo.webp"
                alt="logo"
                width={50}
                height={50}
                priority={true}
              />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center text-gold text-lg font-playfair">
            <Link
              href="/"
              className="px-3 py-2 rounded-md hover:text-dull_gold"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 rounded-md hover:text-dull_gold"
            >
              About
            </Link>
            <Link
              href="/events"
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
              href="/gallery"
              className="px-3 py-2 rounded-md hover:text-dull_gold"
            >
              Gallery
            </Link>
            <Link
              href="/team"
              className="px-3 py-2 rounded-md hover:text-dull_gold"
            >
              Team
            </Link>
            <Link
              href="/team"
              className="px-3 py-2 rounded-md hover:text-dull_gold"
            >
              Timeline
            </Link>
            <Link
              href="/team"
              className="px-3 py-2 rounded-md hover:text-dull_gold"
            >
              Sponsors
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-montserrat font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-montserrat font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-montserrat font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

