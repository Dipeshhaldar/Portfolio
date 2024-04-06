import React, { useState } from "react";
import "./Experience.css";

export default function Experience() {
  const [selectedButton, setSelectedButton] = useState(0); // State to track selected button

  // Array containing button names and descriptions
  const experienceData = [
    {
      name: "GDSC SBJITMR",
      label_1: "Flutter Developer",
      label_2: " @ GDSC SBJITMR",
      period: "Sept 2023 - Present",
      description_1: "Google Developers Student Club SBJITMR.",
      description_2:
        "Responsible to organize Andriod Study Jams to enhance the tech culture",
      description_3:
        "Building a community where every student can thrive in tech and build something together.",
    },
    {
      name: "AcadeMind",
      label_1: "Frontend Developer",
      label_2: " @ AcadeMind",
      period: "Apr 2023 - Aug 2023",
      description_1: "AcadeMind is an IT Company.",
      description_2:
        "Implemented frontend functionalities and features, ensuring cross-browser compatibility and optimization for performance.",
      description_3:
        "Actively engaged in troubleshooting and debugging issues, addressing user-reported bugs and enhancing user experience.",
    },
    {
      name: "Codemate IT Services",
      label_1: "Frontend Developer",
      label_2: " @ Codemate IT Services",
      period: "Sept 2023 - Dec 2023",
      description_1: "It is an IT Industry",
      description_2:
        "Responsible to work on projects, assist with daily tasks, and learn about the industry and company culture while gaining hands-on experience in their field of study.",
      description_3:
        "Building a community where in tech and build something together.",
    },
  ];

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  return (
    <>
    <div id="experience">
      <div className="experience__page__main__content">
        <h1 className="experience__page__main-heading">Where I've Worked</h1>
        <hr className="experience__page__heading__underline-1" />
        <hr className="experience__page__heading__underline-2" />
        <main className="experience__page__flex__container">
          <div className="experience__page__styled__button__flex__container">
            {experienceData.map((item, index) => (
              <button
                key={index}
                className={`experience__page__styled__button ${
                  selectedButton === index ? "active" : ""
                }`}
                onClick={() => handleButtonClick(index)}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div>
            <section className="experience__page__selected__button__description">
              <h1 className="experience__page__selected__button__description__label">
                {experienceData[selectedButton].label_1}
                <span className="experience__page__selected__button__description__label-customize">{experienceData[selectedButton].label_2}</span>
              </h1>
              <h4 className="experience__page__selected__button__description__period">{experienceData[selectedButton].period}</h4>
              <ul className="experience__page__selected__button__description__description">
                <li className="li_flex_container"><img src="/Right_Arrow.png" className="experience__page__right-arrow" alt="right_arrow" /><p className="experience__page__selected__description">{experienceData[selectedButton].description_1}</p></li>
                <li className="li_flex_container"><img src="/Right_Arrow.png" className="experience__page__right-arrow" alt="right_arrow" /><p className="experience__page__selected__description">{experienceData[selectedButton].description_2}</p></li>
                <li className="li_flex_container"><img src="/Right_Arrow.png" className="experience__page__right-arrow" alt="right_arrow" /><p className="experience__page__selected__description">{experienceData[selectedButton].description_3}</p></li>
              </ul>
            </section>
          </div>
        </main>
      </div>
      </div>
    </>
  );
}
