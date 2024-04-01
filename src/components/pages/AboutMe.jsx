import "./AboutMe.css";

export default function AboutMe() {
  return (
    <>
      <div id="about" className="about-me__page_content">
        <h1 className="about-me__heading">About Me</h1>
        <hr className="about-me__heading__underline-1" />
        <hr className="about-me__heading__underline-2" />
        <main className="about-me__flex-container">
          <section>
            <p className="about-me__owner__description">
              Hello! I am Dipesh Haldar, a spirited student developer carving a
              niche in the tech cosmos. With React, I sculpt captivating web
              experiences, and with Flutter, I engineer dynamic Android apps.
              Beyond the screen, I wield my passion at GDSC, threading
              connections and guiding fellow enthusiasts through the maze of
              tech possibilities. I find joy in guiding fellow enthusiasts and
              building networks that transcend the digital divide.
            </p>
            <p className="about-me__owner__description">
              In the vast coding landscape, each line becomes a note, every
              project a unique melody. As I navigate the intersections of
              development, my passion isn't just about the language of code;
              it's about the language of possibilities. The excitement of coding
              is not just a skill for me; it's an unwavering commitment to
              exploration, an enthusiasm for learning, and a genuine desire to
              contribute to the ever-expanding tapestry of technological
              marvels.
            </p>
            <section className="about_me__skills__list">
              <ul className="about_me__skills__list-items">
                <li>
                  <img
                    src="/Right_Arrow.png"
                    className="about_me__skills__list__right-arrow"
                    alt="right_arrow"
                  />
                  React
                </li>
                <li>
                  <img
                    src="/Right_Arrow.png"
                    className="about_me__skills__list__right-arrow"
                    alt="right_arrow"
                  />
                  Django
                </li>
                <li>
                  <img
                    src="/Right_Arrow.png"
                    className="about_me__skills__list__right-arrow"
                    alt="right_arrow"
                  />
                  Flutter
                </li>
                <li>
                  <img
                    src="/Right_Arrow.png"
                    className="about_me__skills__list__right-arrow"
                    alt="right_arrow"
                  />
                  Figma
                </li>
              </ul>
              <ul className="about_me__skills__list-items">
                <li>
                  <img
                    src="/Right_Arrow.png"
                    className="about_me__skills__list__right-arrow"
                    alt="right_arrow"
                  />
                  Java
                </li>
                <li>
                  <img
                    src="/Right_Arrow.png"
                    className="about_me__skills__list__right-arrow"
                    alt="right_arrow"
                  />
                  Python
                </li>
                <li>
                  <img
                    src="/Right_Arrow.png"
                    className="about_me__skills__list__right-arrow"
                    alt="right_arrow"
                  />
                  C
                </li>
                <li>
                  <img
                    src="/Right_Arrow.png"
                    className="about_me__skills__list__right-arrow"
                    alt="right_arrow"
                  />
                  Nodejs
                </li>
              </ul>
            </section>
          </section>
          <div className="about-me__owner__photo__flex__container">
            <img
              className="about-me__owner__photo"
              src="/Dipesh.jpg"
              alt="Dipesh"
            />
            <div className="about-me__owner__photo__background__border"></div>
          </div>
        </main>
      </div>
    </>
  );
}
