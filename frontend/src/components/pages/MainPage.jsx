import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import "./MainPage.css";

export default function MainPage() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      navigate(`#${sectionId}`);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, 
        ease: "easeInOut" 
      }
    }
  };

  const Typewriter = ({ words }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
      let currentIndex = 0;
      let typingInterval;
      
      const startTyping = () => {
        typingInterval = setInterval(() => {
          if (currentIndex <= words[currentWordIndex].length) {
            setDisplayText(words[currentWordIndex].slice(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(typingInterval);
            setTimeout(() => {
              setDisplayText('');
              currentIndex = 0;
              setCurrentWordIndex((currentWordIndex + 1) % words.length); 
              startTyping(); 
            }, 100); 
          }
        }, 300); 
      };

      startTyping();

      return () => clearInterval(typingInterval);
    }, [words, currentWordIndex]);

    return <span>{displayText}</span>;
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
      <motion.h1 className="owner__description" variants={itemVariants}>
        A Developer who <Typewriter words={["Develops", "Creates"]} />
      </motion.h1>
      <motion.p className="owner__detail__description" variants={itemVariants}>
        I am an undergraduate at <a className="college__name__link" href="https://www.sbjit.edu.in/" target="_blank">SBJITMR Nagpur</a> pursuing B.Tech 
        in Computer Science and Engineering who is immersed 
        in the realms of Web Development and DevOps.
      </motion.p>
      <motion.p variants={itemVariants}>
        <button onClick={() => scrollToSection("contact")} className="contact-me__button_mainpage">Contact Me</button>
      </motion.p>
    </motion.div>
  );
}
