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
import { useForm } from "react-hook-form";

interface IProject {
  name: string;
  description: string;
}

const ProjectsList = () => {
  const [projects, setProjects] = useState([{}]);
  const [newProject, setNewProject] = useState<IProject>({
    name: "",
    description: "",
  });
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const router = useRouter();

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

  const handleInputChange = (e: any) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleOpen();
    axios.post(process.env.NEXT_PUBLIC_API_URL + "/add/project", newProject);
    axios.get(process.env.NEXT_PUBLIC_API_URL + "/projects").then((res) => {
      setProjects(res.data);
    });
  };


  return (
    <div className="p-5">
      <Button onClick={handleOpen}>Add new project</Button>
      {loading ? <Loading /> : <Projects projects={projects} />}

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
