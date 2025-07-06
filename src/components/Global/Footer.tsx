import { IconBrandInstagram, IconBrandLinkedinFilled, IconBrandMedium } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-[#232A2F] text-white mt-8 border-t border-gray-700 pt-8 mx-6 font-playfair">
      <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around">
          <div className="md:grow w-full text-left">
            <h3 className="text-lg font-playfair font-semibold mb-2">Social Links</h3>
            <Link target="_blank" href="https://www.instagram.com/pictmun/" className="flex items-center hover:text-gold">
              <IconBrandInstagram />
              <p className='text-lg hover:text-skin'>@pictmun</p>
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/company/pict-model-united-nations/mycompany/" className="flex items-center hover:text-gold">
              <IconBrandLinkedinFilled/>
              <p  className='text-lg hover:text-skin'>@PICT Model United Nations</p>
            </Link>
            <Link target="_blank" href="https://medium.com/@pictmun" className="flex items-center hover:text-gold">
              <IconBrandMedium />
              <p className='text-lg hover:text-skin'>@pictmun</p>
            </Link>
          </div>   
          <div className="w-fit text-right text-nowrap">
            <h3 className="text-lg font-playfair font-semibold mb-4">Contact Us</h3>
            <h1 className='text-lg'>Aayush Meghal - <Link target="_blank" href="tel:+917020899506" className='text-lg  hover:text-gold hover:underline'>+919405417042</Link></h1>
            <h1 className='text-lg'>Dhawal Talele - <Link target="_blank" href="tel:+917020899506" className='text-lg hover:text-gold hover:underline'>+919699086529</Link></h1>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

