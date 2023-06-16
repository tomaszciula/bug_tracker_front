import ProjectCard from "./ProjectCard";

const Projects = (props: any) => {
  return (
    <div className="flex flex-wrap justify-items-center">
      {Array.isArray(props.projects)
        ? props.projects.map((project: any) => {
            return (
            //   <li
            //     key={project.id}
            //     className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out"
            //   >
            //     {project.name}
            //   </li>

            <ProjectCard project={project} key={project.id}/>
            );
          })
        : null}
    </div>
  );
};

export default Projects;
