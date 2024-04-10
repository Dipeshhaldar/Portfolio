import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import "./ContactMe.css";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [description, setDescription] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://portfolio-backend-tau-blush.vercel.app/user", {
        name,
        email,
        organization,
        description,
      })
      .then((result) => {
        console.log(result);
        setSubmitMessage("Form submitted successfully");
        setErrorMessage("");
        setName("");
        setEmail("");
        setOrganization("");
        setDescription("");
        setTimeout(() => {
          setSubmitMessage("");
        }, 4000); // Hide success message after 4 seconds
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Error occurred while submitting the form");
        setSubmitMessage("");
        setTimeout(() => {
          setErrorMessage("");
        }, 4000); // Hide error message after 4 seconds
      });
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
            onSubmit={handleSubmit}
          >
            <motion.input
              type="text"
              placeholder="I'm excited to know your name!"
              autoComplete="off"
              name="username"
              required
              variants={itemVariants}
              value={name}
              onChange={(e) => setName(e.target.value)}
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
                required
                variants={itemVariants}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <motion.input
                type="text"
                placeholder="Organization's Name (Optional)"
                autoComplete="off"
                name="organization"
                variants={itemVariants}
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
              />
            </motion.div>
            <motion.input
              type="text"
              placeholder="Tell me about yourself."
              name="description"
              required
              variants={itemVariants}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
            {submitMessage && (
              <motion.div
                className="success-message"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {submitMessage}
              </motion.div>
            )}
            {errorMessage && (
              <motion.div
                className="error-message"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {errorMessage}
              </motion.div>
            )}
          </motion.form>
        </div>
      </section>
    </div>
  );
}
