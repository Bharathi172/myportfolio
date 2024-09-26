import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import dp from "../assets/DSC_0461.svg";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <section className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-1/2 pr-0 md:pr-8">
            <motion.div>
              <p className={styles.sectionSubText}>Introduction</p>
              <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
              I am a dedicated developer with a strong inclination towards
              UI/UX design, ensuring that my projects are not only visually
              captivating but also user-friendly. My experience extends to
              full-stack development, where I build seamless and responsive
              applications using modern frameworks like React and Next.js. I'm
              also skilled in database management with SQL, having implemented
              complex stored procedures, triggers, and user-defined functions in
              my projects. Additionally, I've worked with software quality
              testing and automation tools like Selenium, ensuring reliable and
              efficient software delivery. With a solid understanding of program
              structures, I blend technical expertise with a user-centric
              approach to create well-rounded, functional, and engaging digital
              solutions.
            </motion.p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-24 flex justify-center items-center">
            <div className="w-full max-w-md p-[2px] mt-12 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700">
              <img
                src={dp}
                alt="Profile"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(About, "about");