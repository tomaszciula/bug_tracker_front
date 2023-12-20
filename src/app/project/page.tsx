"use client";
import {
  List,
  ListItem,
  ListItemPrefix,
  Checkbox,
  Typography,
  Button,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import redirect from "nextjs-redirect";
import { useRouter } from "next/navigation";
// import { redirect } from "next/navigation";

const ProjectChoosing = () => {
  const [projects, setProjects] = useState([]);
  const [checkedProjects, setCheckedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUserInDB, setLastUserInDB] = useState(null);
  const {push} = useRouter();

  useEffect(function effectFunc() {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        // setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    fetch(process.env.NEXT_PUBLIC_API_URL + "/last")
      .then((res) => res.json())
      .then((data) => {
        console.log("last user: ", data);

        setLastUserInDB(data);
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
    console.log("useEffect ran, newBug state is: ", projects);
  }, [projects]);

  const handleProjectCheckbox = (e: any) => {
    console.log("project checkbox: ", e);
    if (e.target.checked) {
      setCheckedProjects(checkedProjects.concat(e.target.id));
    } else if (e.target.checked === false) {
      setCheckedProjects(
        checkedProjects.filter((item) => item !== e.target.id)
      );
    }
    console.log("project checkbox state: ", checkedProjects);
  };

  const handleButton = () => {
    console.log("projects: ", checkedProjects);
    axios
      .post(
        process.env.NEXT_PUBLIC_API_URL + "/relateUserWithProjects",
        checkedProjects
      )
      .then((res) => {
        // debugger
        console.log("User related to projects: ", res);
        if (res.status === 200) {
          push(process.env.NEXT_PUBLIC_API_URL + '/login');
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <Typography variant="h5">
        Choose projects you will be working on:
      </Typography>
      <List className="flex-row flex-wrap">
        {Array.isArray(projects)
          ? projects.map((item) => (
              <ListItem key={item.id} className="w-auto">
                <label
                  htmlFor={item.name}
                  className="flex max-w-lg cursor-pointer items-center"
                >
                  <ListItemPrefix className="w-auto">
                    {" "}
                    <Checkbox
                      onChange={handleProjectCheckbox}
                      id={item.name}
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    {item.name}
                  </Typography>
                </label>
              </ListItem>
            ))
          : null}
      </List>
      <Button fullWidth onClick={handleButton} className="">
        Log me in!
      </Button>
    </>
  );
};

export default ProjectChoosing;
