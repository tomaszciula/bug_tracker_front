import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "../Loading";
import Projects from "./Projects";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dialog,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import useUser from "@/hooks/useUser";

interface IProject {
  name: string;
  description: string;
  // user: Object;
}

const ProjectsList = () => {
  const [projects, setProjects] = useState([{}]);
  const [newProject, setNewProject] = useState<IProject>({
    name: "",
    description: "",
    // user: {},
  });
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const router = useRouter();
  const user = useUser();

  useEffect(function effectFunc() {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/projects")
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

  useEffect(() => {
    console.log("useEffect ran, newProject state is: ", newProject);
    console.log("useEffect ran, USER is: ", user);
  }, [newProject, projects, user]);

  const handleInputChange = (e: any) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setNewProject(Object.assign(newProject, { user: user }));
    handleOpen();
    console.log("Nowy projekt przed AXIOS: ", newProject);

    axios.post(process.env.NEXT_PUBLIC_API_URL + "/add/project", newProject);
    axios.get(process.env.NEXT_PUBLIC_API_URL + "/projects").then((res) => {
      setProjects(res.data);
    });
  };

  return (
    <div className="p-5">
      <Button onClick={handleOpen}>Add new project</Button>

      {loading ? (
        <Loading />
      ) : projects.length === 0 ? (
        <Typography variant="h5" className="mt-5 ml-2">
          No projects yet
        </Typography>
      ) : (
        <Projects projects={projects} />
      )}

      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              New project
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              name="name"
              label="Name"
              size="lg"
              onChange={handleInputChange}
            />
            <Textarea
              name="description"
              label="Description"
              size="lg"
              onChange={handleInputChange}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              type="submit"
              name="Create new project"
              variant="gradient"
              onClick={handleSubmit}
              fullWidth
            >
              Create new project
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  );
};

export default ProjectsList;
