// import React, { useState } from "react";
// import "./Experience.css";

// const Experience = () => {
//   const [selectedButton, setSelectedButton] = useState(null);

//   const buttons = [
//     { id: 1, label: "Button 1", description: "Description for Button 1" },
//     { id: 2, label: "Button 2", description: "Description for Button 2" },
//     { id: 3, label: "Button 3", description: "Description for Button 3" }
//   ];

//   const handleButtonClick = (button) => {
//     setSelectedButton(button);
//   };

//   return (
//     <div className="experience-container">
//       <div className="experience-buttons">
//         {buttons.map((button) => (
//           <button
//             key={button.id}
//             className={`experience-button ${selectedButton === button.id && "selected"}`}
//             onClick={() => handleButtonClick(button.id)}
//           >
//             {button.label}
//           </button>
//         ))}
//       </div>
//       <div className="experience-description">
//         {selectedButton && (
//           <div className="description-content">
//             <h2>{buttons.find(button => button.id === selectedButton).label}</h2>
//             <p>{buttons.find(button => button.id === selectedButton).description}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Experience;

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
      name: "Codemate IT Services",
      label_1: "Frontend Developer",
      label_2: " @ Codemate IT Services",
      period: "Sept 2023 - Present",
      description_1: "Google Developers Student Club SBJITMR.",
      description_2:
        "Responsible to organize Andriod Study Jams to enhance the tech culture",
      description_3:
        "Building a community where every student can thrive in tech and build something together.",
    },
    {
      name: "Codemate IT Services",
      label_1: "Frontend Developer",
      label_2: " @ Codemate IT Services",
      period: "Sept 2023 - Present",
      description_1: "Google Developers Student Club SBJITMR.",
      description_2:
        "Responsible to organize Andriod Study Jams to enhance the tech culture",
      description_3:
        "Building a community where every student can thrive in tech and build something together.",
    },
  ];

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  return (
    <>
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
            <p className="experience__page__selected__button__description">
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
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
