import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ProjectsSection.css';


const projectsData = [
  {
    title: "DKart An E-CommereceWebsite",
    description: "Efficient Django E-Commerce website with payment gateways integrated.",
    techStack: ["Django", "JavaScript", "Python", "HTML", "CSS", "SQLite", "PayPal"],
    websiteLink:
      "https://github.com/Dipeshhaldar/DKart-E-Commerece-Website-Using-Django",
    githubLink:
      "https://github.com/Dipeshhaldar/DKart-E-Commerece-Website-Using-Django",
    Logo: "/Website-Logo.png",
  },
  {
    title: "Timer Challenge Game",
    description:
      "ReactTimer: Engaging game testing reflexes, timing skills and accuracy. Can you win?",
    techStack: ["Reactjs", "JavaScript", "Nodejs", "Expressjs", "HTML", "CSS"],
    websiteLink: "https://timer-challenge-game-using-reactjs.vercel.app/",
    githubLink:
      "https://github.com/Dipeshhaldar/Timer-Challenge-Game-Using-Reactjs",
    Logo: "/Website-Logo.png",
  },
  {
    title: "Investment Calculator",
    description:
      "Powerful investment calculator: plan, predict, and optimize your financial future.",
    techStack: ["Reactjs", "Mongodb", "Expressjs", "Nodejs", "JavaScript"],
    websiteLink: "https://investment-calculator-using-reactjs.vercel.app/",
    githubLink:
      "https://github.com/Dipeshhaldar/Investment-Calculator-Using-Reactjs",
    Logo: "/Website-Logo.png",
  },
  {
    title: "Tic-Tac-Toe-Game-Using-Reactjs",
    description:
      "Interactive Tic Tac Toe game: challenge friends, test strategies, enjoy timeless entertainment on any device",
    techStack: ["Reactjs", "Expressjs", "Nodejs", "JavaScript"],
    websiteLink: "https://tic-tac-toe-game-alpha-five.vercel.app/",
    githubLink: "Tic-Tac-Toe-Game-Using-Reactjs",
    Logo: "/Website-Logo.png",
  },
  {
    title: "React Blog Website",
    description:
      "Dynamic React blog platform: create, share, and engage with captivating content effortlessly and efficiently.",
    techStack: ["Reactjs", "JavaScript", "HTML", "CSS"],
    websiteLink: "https://react-blog-gamma-nine.vercel.app/",
    githubLink: "https://github.com/Dipeshhaldar/React-Blog",
    Logo: "/Website-Logo.png",
  },
  {
    title: "Meals Application",
    description:
      "Dynamic Meals Application platform: where you can search recepies for various foods.",
    techStack: ["Flutter", "Dart", "C++", "Firebase"],
    websiteLink:
      "https://github.com/Dipeshhaldar/Meals-Application-Using-Flutter",
    githubLink:
      "https://github.com/Dipeshhaldar/Meals-Application-Using-Flutter",
    Logo: "/Android-Logo.png",
  },
  {
    title: "Expense Tracker Application",
    description:
      "Efficient Flutter Expense Tracker: Manage finances easily with intuitive design and seamless functionality.",
    techStack: ["Flutter", "Dart", "C++", "Firebase"],
    websiteLink:
      "https://github.com/Dipeshhaldar/Expense-Tracker-Application-Using-Flutter",
    githubLink:
      "https://github.com/Dipeshhaldar/Expense-Tracker-Application-Using-Flutter",
    Logo: "/Android-Logo.png",
  },
  {
    title: "Quiz Application",
    description:
      "Engaging Flutter Quiz App: Test knowledge, learn, and challenge friends with interactive quizzes anytime, anywhere.",
    techStack: ["Flutter", "Dart", "C++", "Firebase"],
    websiteLink:
      "https://github.com/Dipeshhaldar/quiz-application-using-flutter",
    githubLink:
      "https://github.com/Dipeshhaldar/quiz-application-using-flutter",
    Logo: "/Android-Logo.png",
  },
  {
    title: "Dice Rolling Application",
    description:
      "Android Dice Rolling App: Roll virtual dice for games, decisions, and fun anytime, anywhere.",
    techStack: ["Flutter", "Dart", "C++", "Firebase"],
    websiteLink:
      "https://github.com/Dipeshhaldar/dice-rolling-android-application",
    githubLink:
      "https://github.com/Dipeshhaldar/dice-rolling-android-application",
    Logo: "/Android-Logo.png",
  },
  {
    title: "Monster-Game",
    description:
      "Monster Game: Embark on an adventure, battle monsters, and conquer challenges in this thrilling digital quest.",
    techStack: ["JavaScript", "HTML", "CSS"],
    websiteLink: "https://monster-game-two.vercel.app/",
    githubLink: "https://github.com/Dipeshhaldar/Monster-Game",
    Logo: "/Website-Logo.png",
  },
  {
    title: "CourseGoal Tracker",
    description:
      "CourseGoal Tracker: Achieve learning milestones, track progress, and reach educational goals seamlessly with ReactJS.",
    techStack: ["Reactjs", "JavaScript", "HTML", "CSS"],
    websiteLink:
      "https://github.com/Dipeshhaldar/CourseGoal-Tracker-Using-ReactJs",
    githubLink:
      "https://github.com/Dipeshhaldar/CourseGoal-Tracker-Using-ReactJs",
    Logo: "/Website-Logo.png",
  },
  {
    title: "The Unconventional Calculator",
    description:
      "The Unconventional Calculator: Explore unique calculations and customize features",
    techStack: ["JavaScript", "HTML", "CSS"],
    websiteLink:
      "https://github.com/Dipeshhaldar/The-Unconventional-Calculator",
    githubLink: "https://github.com/Dipeshhaldar/The-Unconventional-Calculator",
    Logo: "/Website-Logo.png",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="projects__main__content__section">
      <h1 className="projects__main__main__heading">Projects</h1>
      <hr className="projects__section__heading__underline-1" />
      <hr className="projects__section__heading__underline-2" />
      <div className="projects__section__projectlist">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5,
  });

  return (
    <motion.a
      ref={ref}
      href={project.websiteLink}
      className="project__section__projectlist__card"
      target="_blank"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project__section__card__details">
        <div className="project__section__card__child-1">
          <div className="project__section__card__child-1__Links">
            <section>
              <img
                className="project__section__card__child-1__Links__Website"
                src={project.Logo}
                alt="Website"
                onClick={() => window.open(project.websiteLink, "_blank")}
              />
            </section>
            <section className="project__section__card__child-1__Links__Github">
              <img
                src={project.Logo}
                alt="Website"
                onClick={() => window.open(project.websiteLink, "_blank")}
                style={{ cursor: "pointer" }}
              />
              <img
                src="/Github-Logo.png"
                alt="Github"
                onClick={() => window.open(project.githubLink, "_blank")}
                style={{ cursor: "pointer" }}
              />
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
    </motion.a>
  );
}
