import "./AboutPage.css";

export default function AboutPage() {
  return (
    <>
      <main className="main__aboutpage_description">
        <h1 className="about-me__description">About Me</h1>
        <hr className="about-me__heading_underline-1" />
        <hr className="about-me__heading_underline-2" />
        <div className="about__me-flex_container">
          <body>
            <p className="about-me__detail-description">
              Hello! I am Dipesh Haldar, a spirited student developer carving a
              niche in the tech cosmos. With React, I sculpt captivating web
              experiences, and with Flutter, I engineer dynamic Android apps.
              Beyond the screen, I wield my passion at GDSC, threading
              connections and guiding fellow enthusiasts through the maze of
              tech possibilities. I find joy in guiding fellow enthusiasts and
              building networks that transcend the digital divide.
            <br /><br />
              In the vast coding landscape, each line becomes a note, every
              project a unique melody. As I navigate the intersections of
              development, my passion isn't just about the language of code;
              it's about the language of possibilities. The excitement of coding
              is not just a skill for me; it's an unwavering commitment to
              exploration, an enthusiasm for learning, and a genuine desire to
              contribute to the ever-expanding tapestry of technological
              marvels.
            </p>
          </body>
            <p>
              <div className="owner__photo">Photo</div>
            </p>
        </div>
      </main>
    </>
  );
}
