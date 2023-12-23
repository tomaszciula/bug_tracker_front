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
  List,
  ListItem,
  ListItemPrefix,
  Checkbox,
} from "@material-tailwind/react";
import axios from "axios";

interface IBug {
  id: number;
  title: string;
  description: string;
  project: string[];
  status: string;
  created_at: string;
  updated_at: string;
}

const BugsList = () => {
  const [bugs, setBugs] = useState([{}]);
  const [newBug, setNewBug] = useState({});
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  // const [projects, setProjects] = useState({});
  const [project, setProject] = useState();
  const [priority, setPriority] = useState();
  const [status, setStatus] = useState();
  const [checkedProjects, setCheckedProjects] = useState([]);

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

  useEffect(() => {
    console.log("useEffect ran, checkbox state is: ", checkedProjects);
  }, [checkedProjects]);

  useEffect(() => {
    console.log("useEffect ran, newBug state is: ", newBug);
  }, [newBug]);

  useEffect(() => {
    console.log("useEffect ran, bugs state is: ", bugs);
  }, [bugs]);

  // const handleProjectCheckbox = (e: any) => {
  //   console.log("project checkbox: ", e);
  //   if (e.target.checked) {
  //     setCheckedProjects(checkedProjects.concat(e.target.id));
  //   } else if (e.target.checked === false) {
  //     setCheckedProjects(
  //       checkedProjects.filter((item) => item !== e.target.id)
  //     );
  //   }
  //   console.log("project checkbox state: ", checkedProjects);
  // };
  const handleProject = (e: any) => {
    setProject(e);
    setNewBug({ ...newBug, project: e });
  };

  const handlePriority = (e: any) => {
    console.log("priority: ", e);
    setPriority(e);
    setNewBug({ ...newBug, priority: e });
  };

  const handleStatus = (e: any) => {
    setStatus(e);
    setNewBug({ ...newBug, status: e });
  };

  const handleInputChange = (e: any) => {
    setNewBug({ ...newBug, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  const handleOpen = () => setOpen((cur) => !cur);

  const handleSubmit = (e: any) => {
    // setNewBug(Object.assign({}, newBug, { project: checkedProjects }));
    console.log("newBug: ", newBug);
    e.preventDefault();
    handleOpen();
    axios.post(process.env.NEXT_PUBLIC_API_URL + "/add/bug", newBug),
    axios.get(process.env.NEXT_PUBLIC_API_URL + "/bugs").then((res) => {
      setBugs(res.data);
    });
  };

  const { data } = useFetch(process.env.NEXT_PUBLIC_API_URL + "/projects");

  console.log("Projects fetch: ", data);
  return (
    <div className="h-full w-full p-5">
      <Button onClick={handleOpen}>Add new bug</Button>

      {loading ? (
        <Loading />
      ) : bugs.length === 0 ? (
        <Typography variant="h5" className="mt-5 ml-2">
          No bugs yet
        </Typography>
      ) : (
        <Bugs bugs={bugs} />
      )}

      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none h-full w-full overflow-y-auto"
      >
        <Card className="mx-auto w-full max-w-[24rem] overflow-scroll h-full">
          <CardHeader
            variant="gradient"
            color="blue"
            className="my-5 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              New bug
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 overflow-scroll px-2">
            <Input
              name="title"
              label="Bug name"
              size="lg"
              onChange={handleInputChange}
            />

            <Textarea
              name="description"
              label="Description"
              size="lg"
              onChange={handleInputChange}
            />
            <Input
              name="steps_to_bug"
              label="Steps to bug"
              size="lg"
              onChange={handleInputChange}
            />
            <Input
              name="expected_behavior"
              label="Expected behavior"
              size="lg"
              onChange={handleInputChange}
            />
            <Input
              name="actuall_behavior"
              label="Actuall behavior"
              size="lg"
              onChange={handleInputChange}
            />
            <Select
              name="project"
              value={project}
              label="Project"
              size="lg"
              onChange={handleProject}
            >
              {Array.isArray(data)
                ? data.map((item) => (
                    <Option key={item.id} value={item.name}>
                      {item.name}
                    </Option>
                  ))
                : null}
            </Select>
            <Select
              name="priority"
              value={priority}
              label="Priority"
              size="lg"
              onChange={handlePriority}
            >
              <Option key="1" value="low">
                Low
              </Option>
              <Option key="2" value="medium">
                Medium
              </Option>
              <Option key="3" value="high">
                High
              </Option>
            </Select>
            <Input
              name="important"
              label="Important"
              size="lg"
              onChange={handleInputChange}
            />
            <Select
              name="status"
              value={status}
              onChange={handleStatus}
              label="Status"
              size="lg"
            >
              <Option key="1" value="To do">
                To do
              </Option>
              <Option key="2" value="In progress">
                In progress
              </Option>
              <Option key="3" value="Testing">
                Testing
              </Option>
              <Option key="4" value="Done">
                Done
              </Option>
            </Select>

            <Input
              name="environment"
              label="Platform"
              size="lg"
              onChange={handleInputChange}
            />
            <Input
              name="reporting"
              label="Reported by"
              size="lg"
              onChange={handleInputChange}
            />
            <Input
              name="responsible"
              label="Responsible"
              size="lg"
              onChange={handleInputChange}
            />
            <Textarea
              name="comment"
              label="Comment"
              size="lg"
              onChange={handleInputChange}
            />

            {/* <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div> */}
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleSubmit} fullWidth>
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
