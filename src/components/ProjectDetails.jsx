import { useParams } from "react-router-dom";
import { projects } from "../constants"; // Assuming your projects data is in constants.js
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProjectDetails = () => {
  const { projectId } = useParams();

  // Find the project based on the ID (assuming each project has a unique ID)
  const project = projects.find((proj) => proj.id === projectId);

  if (!project) return <div>Project not found</div>;

  return (
    <div>
        <Navbar/>
      <div className="p-8">
        <h1 className="text-3xl font-bold">{project.name}</h1>
        <p className="mt-4">{project.description}</p>
        <img src={project.image} alt={project.name} className="mt-4 w-full" />
        {/* Add any other project details here */}
      </div>
      <Footer/>
    </div>
  );
};

export default ProjectDetails;
