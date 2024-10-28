import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FaGithub } from "react-icons/fa";
import { Link, Route, Router, Routes } from "react-router-dom";
import { PiTelevisionBold } from "react-icons/pi";
// import AllProjects from "./AllProjects";
import { lazy, useState } from "react";

const AllProjects = lazy(() => import("./AllProjects"));

const ProjectCard = ({
  id,
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 15,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full relative"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 mb-10">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        <div className="flex justify-end absolute bottom-0 right-0 m-4">
          <Link to={live_link} target="blank">
            <button className="bg-purple-950 p-2 rounded-xl  outline-none w-fit text-white font-bold shadow-md shadow-primary">
              <div className="flex justify-center items-center gap-2">
                <span>View Live</span>
                <PiTelevisionBold />
              </div>
            </button>
          </Link>
        </div>
        <div className="flex justify-end mt-4">
          <Link to={`/projects/${id}`}>
            <button className="bg-purple-950 py-2 px-4 rounded-xl text-white font-bold shadow-md shadow-primary">
              View Details
            </button>
          </Link>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  const [projectLimit, setProjectLimit] = useState(3);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It showcases my
          aptitude for resolving intricate issues, collaborating with various
          technologies, and efficiently overseeing projects.
        </motion.p>
      </div>
      <motion.div variants={fadeIn("up", "spring")}>
        <Link to="https://github.com/Mahin-Hasan" target="black">
          <button className="bg-purple-950 py-3 px-6 rounded-xl my-4 outline-none w-fit text-white font-bold shadow-md shadow-primary">
            <div className="flex justify-center items-center gap-2">
              <span>Github</span>
              <FaGithub />
            </div>
          </button>
        </Link>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.slice(0, projectLimit).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
        {/* {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))} */}

        {/* {projects.map((project, index) => (
                    <ProjectCard key={project.name} index={index} {...project} />
                ))} */}
      </div>
      <div>
        {projects.length >= 0 && (
          <div>
            <div className={projectLimit === projects.length ? "hidden" : ""}>
              <div className="text-center my-5">
                <button
                  onClick={() => setProjectLimit(projects.length)}
                className="bg-purple-950 p-4 rounded-lg  outline-none w-fit text-white font-bold shadow-md shadow-primary mt-6"
                >
                  See All Projects
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Do this page later */}
      {/* <div className="flex justify-center mt-10">
                <Router>
                    <Routes>
                        <Route path="/allProjects" element={<AllProjects />}>

                        </Route>
                    </Routes>
                </Router>
                <button
                    className='bg-purple-950 py-2 sm:py-3 px-3 sm:px-6 rounded-xl my-1 ms-1 sm:ms-2 sm:my-4 outline-none w-fit text-white font-bold shadow-md shadow-primary'
                >
                    <div className='flex justify-center items-center gap-2'>
                        <span>See All Projects</span>
                    </div>
                </button>
            </div> */}
    </>
  );
};

export default SectionWrapper(Projects, "projects");
