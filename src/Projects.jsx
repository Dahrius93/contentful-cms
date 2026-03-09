import { useFetchProjects } from "./fetchProjects";

const Projects = () => {
  const { loading, projects } = useFetchProjects();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.url}</p>
          {project.img && <img src={project.img} alt={project.title} />}
        </div>
      ))}
    </div>
  );
};

export default Projects;
