import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import CursorProvider from "./context/CursorContext";
import {Navbar, Cursor, Sidebar, Loader, Chat} from "./components"

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Experience = lazy(() => import("./pages/Experience"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Education = lazy(() => import("./pages/Education"));
const Achievements = lazy(() => import("./pages/Achievements"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const [activePage, setActivePage] = useState("HOME");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const changeActivePage = (newPage: string) => {
    setActivePage(newPage);
  }

  return (
    <CursorProvider>
      <Cursor />
      <Chat />
      <Router>
        <Navbar setIsSidebarOpen={setIsSidebarOpen} />
        {isSidebarOpen && (
          <Sidebar
            activePage={activePage}
            changeActivePage={changeActivePage}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        )}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </CursorProvider>
  );
}

export default App;
