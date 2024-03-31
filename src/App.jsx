import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import AboutMe from "./components/pages/AboutMe";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutMe />} /> */}
        {/* <Route path="/experience" element={} />
        <Route path="/projects" element={} />
        <Route path="/contact" element={} /> */}
      </Routes>
    </>
  );
}

export default App;
