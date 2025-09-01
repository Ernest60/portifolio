"use client";
import Image from "next/image";
import photo2 from "../assets/photo2.jpg";
import style, { layout } from "../app/style";
import { motion } from "framer-motion";

const Abaut = () => {
  return (
    <section
      id="abaut"
      className={`${style.paddingY} gap-4 flex flex-col relative backdrop:blur-xl bg-gradient-to-r from-[#000b1d] to-[#0a1226]`}
    >
      {" "}
      {/*Floating Particles Bg */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            <h2 className="text-white">Hello World</h2>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex items-center relative"
        >
          <h1 className={`${style.heading}`}>Abaut Me</h1>
        </motion.div>

        <div className={`${layout.sectionReverse}flex md:gap-10 md:flex-row`}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            data-aos="zoom-in"
            data-aos-anchor-placement="top-bottom"
            className="flex justify-center h-[300px] min-w-[200px]  min-h-[400px] relative md:hidden lg:hidden"
          >
            <Image
              src={photo2}
              alt="img"
              className={`flex w-[300px] h-[300px] items-center rounded-3xl px-2 md:w-[200px] md:h-[380px] lg:w-[320px]`}
            />
          </motion.div>

          <div className="flex flex-col gap-8">
            <div data-aos="fade-left" className={`text-dimWhite gap-2`}>
              <p className={`${style.paragraph} px-3`}>
                Ernesto Mandlate is a skilled Front-End Developer based in
                Maputo, Mozambique, with a strong background in web development
                and a flair for design. He is dedicated to crafting
                user-friendly and visually captivating web experiences that meet
                modern standards of functionality and aesthetics.
                <br />
                His's portfolio showcases, his ability to turn ideas into
                impactful digital solutions. For inquiries or collaboration
                opportunities, feel free to reach out—he is always eager to
                create innovative and meaningful web experiences.
              </p>
            </div>

            <div
              data-aos="fade-right"
              data-aos-delay="350"
              className={`flex flex-col gap-2`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="relative flex gap-4 items-center text-dimWhite"
              >
                <p className={`${style.paragraph}`}>HTML & CSS </p>{" "}
                <hr
                  className="outline-none w-[50%] h-2 rounded-lg bg-gradient-to-r from-purple-500 to-red-500"
                  style={{ width: "80%" }}
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="relative flex gap-4 items-center text-dimWhite"
              >
                <p className={`${style.paragraph}`}>JavaScript </p>{" "}
                <hr
                  className="outline-none w-[50%] h-2 rounded-lg bg-gradient-to-r from-purple-500 to-red-500"
                  style={{ width: "50%" }}
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="relative flex gap-4 items-center text-dimWhite"
              >
                <p className={`${style.paragraph}`}>React Js </p>{" "}
                <hr
                  className="outline-none w-[50%] h-2 rounded-lg bg-gradient-to-r from-purple-500 to-red-500"
                  style={{ width: "70%" }}
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="relative flex gap-6 items-center text-dimWhite"
              >
                <p className={`${style.paragraph}`}>Next Js </p>{" "}
                <hr
                  className="outline-none w-[50%] h-2 rounded-lg bg-gradient-to-r from-purple-500 to-red-500"
                  style={{ width: "60%" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abaut;
