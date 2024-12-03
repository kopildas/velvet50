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
    <nav className="w-full h-20 bg-blue-100 flex px-20">
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
      <div className="w-[60%] bg-green-200 h-20 flex items-center justify-start px-5">
      <ul>
            <li className="space-x-8 font-semibold text-base bg-red-00 w-full flex items-center justify-center">
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
      <div className="w-[25%] bg-red-300 h-20 flex items-center justify-end gap-2">
        <p>Sign in</p>
        <button className="bg-black px-5 py-2 rounded-3xl">Register to Get Listed</button>
      </div>
    </nav>
  );
};

export default Header;
