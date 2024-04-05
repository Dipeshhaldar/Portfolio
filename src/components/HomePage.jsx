import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Experience from "./pages/Experience";
import MainPage from "./pages/MainPage";
import Projects from "./pages/Projects";

export default function HomePage() {
    return (
        <>
        <MainPage />
        <AboutMe />
        <Experience />
        <Projects />
        <ContactMe />
        </>
    );
}