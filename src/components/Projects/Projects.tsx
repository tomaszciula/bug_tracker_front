import ProjectCard from "./ProjectCard";

const Projects = (props: any) => {
  return (
    <div className="flex flex-wrap justify-items-center">
      {Array.isArray(props.projects)
        ? props.projects.map((project: any) => {
            return <ProjectCard project={project} key={project.id} />;
          })
        : null}
    </div>
  );
};

export default Projects;
