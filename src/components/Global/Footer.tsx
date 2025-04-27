import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-[#232A2F] text-white mt-8 border-t border-gray-700 pt-8 mx-6">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-4">About Us</h3>
            <p className="font-montserrat text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-montserrat text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-4">Contact Us</h3>
            <p className="font-montserrat text-sm">123 Main St, Anytown, USA 12345</p>
            <p className="font-montserrat text-sm">Email: info@example.com</p>
            <p className="font-montserrat text-sm">Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

