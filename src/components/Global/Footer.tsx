import {
  IconBrandInstagram,
  IconBrandLinkedinFilled,
  IconBrandMedium,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#232A2F] text-white mt-8 border-t border-gray-700 pt-8 mx-6 font-playfair">
      <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-7 justify-start md:flex-row md:justify-around">
          <div className="md:grow w-full text-left">
            <h3 className="text-lg font-playfair font-semibold mb-2">
              Social Links
            </h3>
            <Link
              target="_blank"
              href="https://www.instagram.com/pictmun/"
              className="flex items-center hover:text-gold"
            >
              <IconBrandInstagram />
              <p className="text-lg hover:text-skin">@pictmun</p>
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/pict-model-united-nations/mycompany/"
              className="flex items-center hover:text-gold"
            >
              <IconBrandLinkedinFilled />
              <p className="text-lg hover:text-skin">
                @PICT Model United Nations
              </p>
            </Link>
            <Link
              target="_blank"
              href="https://medium.com/@pictmun"
              className="flex items-center hover:text-gold"
            >
              <IconBrandMedium />
              <p className="text-lg hover:text-skin">@pictmun</p>
            </Link>
          </div>
          <div className="w-fit md:text-right text-nowrap">
            <h3 className="text-lg font-playfair font-semibold mb-4">
              Contact Us
            </h3>
            <h1 className="text-lg">
              Tanvi Ghatage -{" "}
              <Link
                target="_blank"
                href="tel:+91 9895320128"
                className="text-lg  hover:text-gold hover:underline"
              >
                +91 9895320128
              </Link>
            </h1>
            <h1 className="text-lg">
              Anant Garg -{" "}
              <Link
                target="_blank"
                href="tel:+91 9168258910"
                className="text-lg hover:text-gold hover:underline"
              >
                +91 9168258910
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
