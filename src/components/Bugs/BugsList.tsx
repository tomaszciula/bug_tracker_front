import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import Bugs from "./Bugs";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dialog,
  Input,
  Select,
  Textarea,
  Typography,
  Option,
} from "@material-tailwind/react";
import axios from "axios";

const BugsList = () => {
  const [bugs, setBugs] = useState([{}]);
  const [newBug, setNewBug] = useState({});
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  // const [projects, setProjects] = useState({});
  const [project, setProject] = useState();
  const [status, setStatus] = useState();

  useEffect(function effectFunc() {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/bugs")
      .then((res) => res.json())
      .then((data) => {
        setBugs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleProject = (e: any) => {
    setProject(e);
  };
  const handleStatus = (e: any) => {
    setStatus(e);
  };
  const handleInputChange = (e: any) => {
    setNewBug({ ...newBug, [e.target.name]: e.target.value });
    console.log(e);
  };
  const handleOpen = () => setOpen((cur) => !cur);

  const handleSubmit = (e: any) => {
    console.log("newBug: ", newBug);
    
    e.preventDefault();
    handleOpen();
    axios.post(process.env.NEXT_PUBLIC_API_URL + "/add/bug", newBug);
    axios.get(process.env.NEXT_PUBLIC_API_URL + "/bugs").then((res) => {
      setBugs(res.data);
    });
  };
  // const { data, loading, error } = useFetch(`http://localhost:8000/bugs`);

  // const handleCreateNewBugButtonClick = (e: any) => {
  //   e.preventDefault();
  //   try {
  //     axios
  //       .post(process.env.NEXT_PUBLIC_API_URL + "/add/bug", newBug)
  //       handleOpen();
  //       setBugs(bugs.concat(newBug))
  //   } catch (err) {
  //     console.log(err);

  //   }
  // }

  const { data } = useFetch(process.env.NEXT_PUBLIC_API_URL + "/projects");

  // console.log("Projects fetch: ", data);
  return (
    <div className="h-full w-full p-5">
      <Button onClick={handleOpen}>Add new bug</Button>
      {loading ? <Loading /> : <Bugs bugs={bugs} />}

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
              New bug
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 overflow-scroll px-0">
            <Input label="Bug name" size="lg" onChange={handleInputChange} />

            <Textarea
              label="Description"
              size="lg"
              onChange={handleInputChange}
            />
            <Input
              label="Steps to bug"
              size="lg"
              onChange={handleInputChange}
            />
            <Input
              label="Expected behavior"
              size="lg"
              onChange={handleInputChange}
            />
            <Input
              label="Actuall behavior"
              size="lg"
              onChange={handleInputChange}
            />
            <Select onChange={handleInputChange} label="Project" size="lg">
              {Array.isArray(data)
                ? data.map((item) => <Option key={item.id}>{item.name}</Option>)
                : null}
            </Select>
            <Select label="Priority" size="lg" onChange={handleInputChange}>
              <Option>Low</Option>
              <Option>Medium</Option>
              <Option>High</Option>
            </Select>
            <Input label="Important" size="lg" onChange={handleInputChange} />
            <Select onChange={handleInputChange} label="Status" size="lg">
              <Option>To do</Option>
              <Option>In progress</Option>
              <Option>Testing</Option>
              <Option>Done</Option>
            </Select>

            <Input label="Platform" size="lg" onChange={handleInputChange} />
            <Input label="Reported by" size="lg" onChange={handleInputChange} />
            <Input label="Responsible" size="lg" onChange={handleInputChange} />
            <Textarea label="Comment" size="lg" onChange={handleInputChange} />

            {/* <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div> */}
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              onClick={handleSubmit}
              fullWidth
            >
              Create new bug
            </Button>
            {/* <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue"
                className="ml-1 font-bold"
                onClick={handleOpen}
              >
                Sign up
              </Typography>
            </Typography> */}
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  );
};
export default BugsList;
