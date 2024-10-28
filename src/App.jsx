// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import { About, Contact, Experience, Feedbacks, Hero, Tech, StarsCanvas, Navbar } from './components';
// import Footer from "./components/Footer";
// import Projects from "./components/Projects";
// import ProjectDetails from "./components/ProjectDetails";

// const App = () => {

//   return (
//     <BrowserRouter>
//       <div className="relative z-0 bg-primary">
//         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//           <Navbar />
//           <Hero />
//         </div>
//         <About />
//         <Projects />
//         <Experience />
//         <Tech />
//         <Feedbacks />
//         <div className="relative z-0">
//           <Contact />
//           <StarsCanvas />
//         </div>
//         <Footer />
//         {/* Add the dynamic route here */}
//         <Routes>
//           <Route path="/projects/:projectId" element={<ProjectDetails />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   )
// }

// export default App
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Tech,
  StarsCanvas,
  Navbar,
} from "./components";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
              </div>
              <About />
              <Projects />
              <Experience />
              <Tech />
              <Feedbacks />
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
              <Footer />
            </div>
          }
        />
         {/* Dynamic Route for Project Details */}
         <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
