"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { skillData } from "../constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import style from "../app/style";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <section id="skill" className={`${(style.paddingX, style.paddingY)}`}>
      <div className="flex flex-col gap-10 max-w-full">
        <div className="flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-center"
          >
            <h1 className={`${style.heading}`}>
              Skills{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                {" "}
                &{" "}
              </span>
              Technologies
            </h1>
          </motion.div>

          <p className={`${style.paragraph} text-dimWhite px-3`}>
            Using the latest tech this world has to offer
          </p>
        </div>

        <Swiper
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={9000}
          modules={[Autoplay]}

          data-aos="fade-up"
          className="max-w-[90%]"
        >
          {skillData.map((skill) => (
            <SwiperSlide>
              <div
                key={skill.id}
                className={`${style.flexCenter} flex-1 min-w-[220px]`}
              >
                <Image
                  src={skill.logo}
                  alt="skill"
                  className="w-[40px] h-[50px] object-contain lg:w-[80px] lg:h-[90px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={9000}
          modules={[Autoplay]}

            data-aos="fade-down"
          
          className="max-w-[90%] "
        >
          {skillData.map((skill) => (
            <SwiperSlide>
              <div
                key={skill.id}
                className={` ${style.flexCenter} flex-1 min-w-[192px]`}
              >
                <Image
                  src={skill.logo}
                  alt="skill"
                  className="w-[40px] h-[30px] object-contain lg:w-[80px] lg:h-[90px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skill;
