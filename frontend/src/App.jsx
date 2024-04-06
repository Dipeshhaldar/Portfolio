import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import AboutMe from "./components/pages/AboutMe";
import Experience from "./components/pages/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
