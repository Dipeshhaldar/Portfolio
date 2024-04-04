import React from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis fugiat maiores.",
    techStack: [
      "Reactjs",
      "Mongodb",
      "Devops",
      "Expressjs",
      "Nodejs",
      "JavaScript",
    ],
    websiteLink: "https://example.com",
    githubLink: "https://github.com/example",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis fugiat maiores.",
    techStack: [
      "Reactjs",
      "Mongodb",
      "Devops",
      "Expressjs",
      "Nodejs",
      "JavaScript",
    ],
    websiteLink: "https://example.com",
    githubLink: "https://github.com/example",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis fugiat maiores.",
    techStack: [
      "Reactjs",
      "Mongodb",
      "Devops",
      "Expressjs",
      "Nodejs",
      "JavaScript",
    ],
    websiteLink: "https://example.com",
    githubLink: "https://github.com/example",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis fugiat maiores.",
    techStack: [
      "Reactjs",
      "Mongodb",
      "Devops",
      "Expressjs",
      "Nodejs",
      "JavaScript",
    ],
    websiteLink: "https://example.com",
    githubLink: "https://github.com/example",
  }
];

export default function Projects() {
  return (
    <>
    <div id="projects" className="projects__main__content__section">
      <h1 className="projects__main__main__heading">Projects</h1>
      <hr className="projects__section__heading__underline-1" />
      <hr className="projects__section__heading__underline-2" />
      <div className="projects__section__projectlist">
        {projectsData.map((project, index) => (
          <a
            key={index}
            href={project.websiteLink}
            className="project__section__projectlist__card"
          >
            <div className="project__section__card__details">
              <div className="project__section__card__child-1">
                <div className="project__section__card__child-1__Links">
                  <section>
                    <img
                      className="project__section__card__child-1__Links__Website"
                      src="/Website-Logo.png"
                      alt="Website"
                    />
                  </section>
                  <section className="project__section__card__child-1__Links__Github">
                    <img src="/Website-Logo.png" alt="Website" />
                    <img src="/Github-Logo.png" alt="Github" />
                  </section>
                </div>
                <div className="project__section__card__child-1__description">
                  <p className="project__section__card__child-1__description__p-1">
                    {project.title}
                  </p>
                  <p className="project__section__card__child-1__p-2">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="project__section__card__child-2">
                {project.techStack.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
    </>
  );
}
