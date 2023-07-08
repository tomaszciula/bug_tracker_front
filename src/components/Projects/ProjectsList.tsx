import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "../Loading";
import Projects from "./Projects";
import { Button } from "@material-tailwind/react";

const ProjectsList = () => {
  const [projects, setProjects] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(function effectFunc() {
    fetch("http://localhost:8000/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-5">
        <Button onClick={() => router.push('/project/add')}>Add new project</Button>
      {loading ? <Loading /> : <Projects projects={projects} />}
    </div>
  );
};

export default ProjectsList;
