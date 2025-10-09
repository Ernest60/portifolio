"use client";
import styles from "../app/style";

import {
  Navbar,
  Hero,
  Abaut,
  Skills,
  Projects,
  Contact,
  Footer,
} from "../componets";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { use, useEffect } from "react";

const page = () => (

  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }),
  
  (
    <div className="w-full overflow-hidden">
      <div
        className={`fixed w-full z-50 bg-background ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          {" "}
          <Navbar />
        </div>
      </div>

      <div className={`bg-black ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero /> <Abaut /> <Skills /> <Projects /> <Contact />
        </div>
      </div>

      <div className={`bg-gray-950 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  )
);

export default page;
