"use client";
import style from "../app/style";
import { photo } from "../assets";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Button from "./Button";
import { motion } from "motion/react";

const Hero = () => (
  <section
    id="home"
    className={`${style.paddingY}, ${style.paddingX} flex items-center justify-between gap-10`}
  >
    <div
      data-aos="fade-right"
      className={`flex flex-col px-4 mb-4 gap-5 lg:px-0`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col py-10 items-center md:w-[250px]"
      >
        <h1
          className={`font-title w-full text-[40px] mt-15 text-dimWhite sm:leading-[76.8px] leading-[60.8px]`}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-700">
            {" "}
            Hello, I'm{" "}
          </span>

          <br />

          <TypeAnimation
            sequence={["Ernesto", 1000, "Web Developer", 1000]}
            wrapper="span"
            speed={5}
            repeat={Infinity}
          />
        </h1>
      </motion.div>

      <p
        className={`${style.paragraph} max-w-[500px] md:max-w-[300px] lg:max-w-[550px]`}
      >
        Specialising in React.js and Next.js, creating modern websites and apps
        with effective digital experiences, helping companies and individuals to
        establish a solid and functional online presence.
      </p>

      <Button />
    </div>

    <motion.div
      animate={{ y: [0, -70, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      data-aos="fade-down-left"
      className={`${style.flexCenter} flex-col mt-05 relative hidden md:mt-14 md:flex`}
    >
      <div className={`${style.flexCenter} flex-1 relative`}>
        <Image
          src={photo}
          alt="photo"
          className="rounded-b-3xl md:w-[400px] md:h-[500px]"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60" />

      <div className="relative bottom-8 right-20 md:hidden lg:flex">
        <h3 className="text-xl font-paragraph text-dimWhite">
          Based in
          <span className="block bg-primary bg-clip-text text-transparent">
            Mozambique / Maputo
          </span>
        </h3>
      </div>
    </motion.div>
  </section>
);

export default Hero;
