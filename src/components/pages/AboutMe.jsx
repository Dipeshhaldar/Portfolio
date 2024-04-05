import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './AboutMe.css';

export default function AboutMe() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });

  return (
    <div id="about" className="about-me__page_content">
      <h1 className="about-me__heading">About Me</h1>
      <hr className="about-me__heading__underline-1" />
      <hr className="about-me__heading__underline-2" />
      <motion.main className="about-me__flex-container" ref={ref}>
        <section>
          <motion.p
            className="about-me__owner__description"
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Hello! I am Dipesh Haldar, a spirited student developer carving a
            niche in the tech cosmos. With React, I sculpt captivating web
            experiences, and with Flutter, I engineer dynamic Android apps.
            Beyond the screen, I wield my passion at GDSC, threading
            connections and guiding fellow enthusiasts through the maze of
            tech possibilities. I find joy in guiding fellow enthusiasts and
            building networks that transcend the digital divide.
          </motion.p>
          <motion.p
            className="about-me__owner__description"
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            In the vast coding landscape, each line becomes a note, every
            project a unique melody. As I navigate the intersections of
            development, my passion isn't just about the language of code;
            it's about the language of possibilities. The excitement of coding
            is not just a skill for me; it's an unwavering commitment to
            exploration, an enthusiasm for learning, and a genuine desire to
            contribute to the ever-expanding tapestry of technological
            marvels.
          </motion.p>
          <section className="about_me__skills__list">
            <ul className="about_me__skills__list-items">
              <motion.li
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img
                  src="/Right_Arrow.png"
                  className="about_me__skills__list__right-arrow"
                  alt="right_arrow"
                />
                React
              </motion.li>
              <motion.li
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <img
                  src="/Right_Arrow.png"
                  className="about_me__skills__list__right-arrow"
                  alt="right_arrow"
                />
                Django
              </motion.li>
              <motion.li
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <img
                  src="/Right_Arrow.png"
                  className="about_me__skills__list__right-arrow"
                  alt="right_arrow"
                />
                Flutter
              </motion.li>
              <motion.li
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <img
                  src="/Right_Arrow.png"
                  className="about_me__skills__list__right-arrow"
                  alt="right_arrow"
                />
                Figma
              </motion.li>
            </ul>
            <ul className="about_me__skills__list-items">
              <motion.li
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img
                  src="/Right_Arrow.png"
                  className="about_me__skills__list__right-arrow"
                  alt="right_arrow"
                />
                Java
              </motion.li>
              <motion.li
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <img
                  src="/Right_Arrow.png"
                  className="about_me__skills__list__right-arrow"
                  alt="right_arrow"
                />
                Python
              </motion.li>
              <motion.li
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <img
                  src="/Right_Arrow.png"
                  className="about_me__skills__list__right-arrow"
                  alt="right_arrow"
                />
                C
              </motion.li>
              <motion.li
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <img
                  src="/Right_Arrow.png"
                  className="about_me__skills__list__right-arrow"
                  alt="right_arrow"
                />
                Nodejs
              </motion.li>
            </ul>
          </section>
        </section>
        <div className="about-me__owner__photo__flex__container">
          <motion.img
            className="about-me__owner__photo"
            src="/Dipesh.jpg"
            alt="Dipesh"
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <div className="about-me__owner__photo__background__border"></div>
        </div>
      </motion.main>
    </div>
  );
}
