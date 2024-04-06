import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./ContactMe.css";

export default function ContactMe() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} id="contact" className="contact__me__main__section">
      <motion.h1
        className="contact__me__main__heading"
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        Contact Me
      </motion.h1>
      <motion.hr
        initial="hidden"
        animate={controls}
        variants={variants}
        className="contact__me__heading__underline-1"
      />
      <motion.hr
        initial="hidden"
        animate={controls}
        variants={variants}
        className="contact__me__heading__underline-2"
      />
      <section>
        <motion.p
          className="contact__me__form__description"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          Feel free to reach out for collaboration, queries, or just a coding
          conversation. I’m always eager to connect with fellow developers and
          tech enthusiasts. Drop me a message, and let’s embark on a coding
          journey together.
        </motion.p>
      </section>
      <section>
        <div className="contact__me__flex__container">
          <motion.form
            className="contact__me__form__layout"
            action=""
            initial="hidden"
            animate={controls}
            variants={variants}
          >
            <motion.input
              type="text"
              placeholder="I'm excited to know your name!"
              autoComplete="off"
              name="username"
              variants={itemVariants}
            />
            <motion.div
              className="contact__me__form__layout__customize"
              variants={itemVariants}
            >
              <motion.input
                type="text"
                placeholder="Email ID"
                autoComplete="off"
                name="email"
                variants={itemVariants}
              />
              <motion.input
                type="text"
                placeholder="Organization's Name (Optional)"
                autoComplete="off"
                name="organization"
                variants={itemVariants}
              />
            </motion.div>
            <motion.input
              type="text"
              placeholder="Tell me about yourself."
              name="description"
              variants={itemVariants}
            />
            <motion.div
              className="contact__me__submit__button__style"
              variants={itemVariants}
            >
              <motion.button
                className="contact__me__submit__button"
                variants={itemVariants}
              >
                Submit
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
