import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#FFEBCD");
        setTextColor("#D2B48C");
      } else {
        // Reset to transparent and white when scrolling up
        setColor("transparent");
        setTextColor("white");
      }
    };

    window.addEventListener("scroll", changeColor);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-20 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        {/* Container for left links */}
        <div className="flex items-center space-x-2">
          {" "}
          {/* Adjust space-x value */}
          <ul
            style={{ color: `${textColor}` }}
            className="hidden sm:flex space-x-40"
          >
            <li className="p-4 font-bold uppercase hover:text-yellow-500 ease-in duration-300">
              <Link href="/">Accueil</Link>
            </li>
            <li className="p-4 font-bold uppercase hover:text-yellow-500 ease-in duration-300">
              <Link href="/MafRooms">Chambres</Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image
              src="/images/mariador.png"
              alt="Maf Logo"
              width={200}
              height={50}
            />
          </div>
        </Link>

        {/* Container for right links */}
        <div className="flex items-center space-x-20">
          {" "}
          {/* Adjust space-x value */}
          <ul
            style={{ color: `${textColor}` }}
            className="hidden sm:flex space-x-40"
          >
            <li className="p-4 font-bold uppercase hover:text-yellow-500 ease-in duration-300">
              <Link href="/About">A Propos</Link>
            </li>
            <li className="p-4 font-bold uppercase hover:text-yellow-500 ease-in duration-300">
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={30} style={{ color: "#FFD700" }} />
          ) : (
            <AiOutlineMenu size={30} style={{ color: "#FFD700" }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-yellow-500 ease-in duration-300"
            >
              <Link href="/">Accueil</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-yellow-500 ease-in duration-300"
            >
              <Link href="/MafRooms">Chambres</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-yellow-500 ease-in duration-300"
            >
              <Link href="/About">A Propos</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-yellow-500 ease-in duration-300"
            >
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
