import React from 'react';
import { motion } from 'framer-motion';
import "./MainPage.css";

export default function MainPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4 // Adjust this value for desired delay between each element
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Adjust this value for the duration of each element's animation
        ease: "easeInOut" // Use easing functions for smooth transitions
      }
    }
  };

  return (
    <motion.div
      className="main__homepage_description"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h4 className="hello_world" variants={itemVariants}>Hello World! My name is</motion.h4>
      <motion.h1 className="owner__name" variants={itemVariants}>Dipesh Haldar</motion.h1>
      <motion.h1 className="owner__description" variants={itemVariants}>A Developer who Develops!</motion.h1>
      <motion.p className="owner__detail__description" variants={itemVariants}>
        I am an undergraduate at <a className="college__name__link" href="https://www.sbjit.edu.in/" target="_blank">SBJITMR Nagpur</a> pursuing B.Tech 
        in Computer Science and Engineering who is immersed 
        in the realms of Web Development and DevOps.
      </motion.p>
      <motion.p variants={itemVariants}>
        <button className="contact-me__button_mainpage">Contact Me</button>
      </motion.p>
    </motion.div>
  );
}
