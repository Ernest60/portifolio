"use client";
import { navLinks, socialMedia } from "../constants";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { menu, close } from "@/assets";
import Link from "next/link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <div className="flex items-center justify-between">
        <div className="relative h-12 w-12 mr-2 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-tertiary animate-spin">
            <div className="absolute inset-[2px] bg-background rounded-full flex items-center justify-center">
              <span className="font-title text-xl font-bold bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
                EM
              </span>
            </div>
          </div>
        </div>

        <span className="font-title text-xl text-dimWhite hover:text-primary">
          Ernesto Mandlate
        </span>
      </div>

      <div className="hidden justify-center items-center gap-10 lg:flex">
        <ul className="bg-slate-600/25 px-6 py-2 rounded-full border-white/5 flex">
          {navLinks.map((nav, index) => (
            <motion.li
              whileHover={{ scale: 1.05 }}
              key={nav.id}
              className={`font-paragraph font-normal cursor-pointer text-xl hover:text-primary ${
                index === navLinks.length - 1 ? "mr-0" : "mr-8"
              } text-dimWhite`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </motion.li>
          ))}
        </ul>

        <div className="hidden h-6 w-px bg-white/20 mx-2 md:flex"></div>

        {/*SOCIALMEDIA */}
        <div className="flex flex-row">
          {socialMedia.map((social, index) => (
            <Link href={social.link} key={social.id} target={"_blank"}>
              <Image
                src={social.icon}
                alt={social.link}
                className={`w-[21px] h-[21px] object-contain cursor-pointer rounded-sm hover:scale-110 hidden md:flex ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              />
            </Link>
          ))}
        </div>
      </div>

      {/*MOBILE*/}
      <div className="flex flex-1 justify-end cursor-pointer lg:hidden">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="W-[28px] h-[28px]  object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } flex-col items-center gap-3 p-6 bg-gray-950/30 absolute top-16 right-0 mx-1 my-3 min-w-[150px] rounded-xl`}
        >
          <ul className="flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={nav.id}
                className={`font-serif text-base ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white hover:text-primary`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </motion.li>
            ))}
          </ul>

          {/*SOCIALMEDIA */}
          <div className="sm:flex flex-row items-center">
            {socialMedia.map((social, index) => (
              <Link href={social.link} key={social.id} target={"_blank"}>
                <Image
                  src={social.icon}
                  alt={social.link}
                  className={`w-[21px] h-[21px] object-contain cursor-pointer rounded-sm hover:scale-110 ${
                    index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
