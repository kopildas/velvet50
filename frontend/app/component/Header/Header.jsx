import React from "react";
import { Anton,PT_Sans } from "next/font/google";
import "../Header/Header.css";
import Facebook_svg from "./Facebook_svg";
import Instagram_svg from "./Instagram_svg";
import Link from 'next/link'
// import '../styles/globals.css';

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});
const ptSans = PT_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
});

const Header = () => {
  return (
    <nav className="w-full h-20 bg-blue-00 flex px-32 py-5">
      <div className="w-[15%] bg-green-00 h-20 flex items-center justify-start">
        <div className="w-full h- bg-blue-00 flex items-baseline justify-start gap-1">
        <div className={anton.className}>
          <p className="logo_font ">Velvet50.</p>
        </div>
        <div className=" bg-red-00 flex gap-1">
          <Facebook_svg />
          <Instagram_svg />
        </div>
        </div>
      </div>
      <div className={` ${ptSans.className} w-[60%] bg-green-00 h-20 flex items-center justify-start px-5 text-[#151515] header_text`}>
      <ul>
            <li className="space-x-8 text-base bg-red-00 w-full flex items-center justify-center header_text">
              <Link
                className="hover:text-blue-500 transition ease-in-out duration-200"
                href="/world"
              >
                Home
              </Link>
              <Link
                className="hover:text-blue-500 transition ease-in-out duration-200"
                href="/business"
              >
                About
              </Link>
              <Link
                className="hover:text-blue-500 transition ease-in-out duration-200"
                href="/science"
              >
                Deliver 2 ME
              </Link>
              <Link
                className="hover:text-blue-500 transition ease-in-out duration-200"
                href="/health"
              >
                Events & Tickets
              </Link>
              <Link
                className="hover:text-blue-500 transition ease-in-out duration-200"
                href="/sport"
              >
                Employment
              </Link>
              <Link
                className="hover:text-blue-500 transition ease-in-out duration-200"
                href="/lifestyle"
              >
                Promotion
              </Link>
              
              {/* <AuthNavContent/> */}
             
            </li>
          </ul>
      </div>
      <div className="w-[25%] bg-red-00 h-20 flex items-center justify-end gap-5">
        <p className="header_text_med">Sign in</p>
        <button className="bg-[#151515] header_text_med_2">Register to Get Listed</button>
      </div>
    </nav>
  );
};

export default Header;
