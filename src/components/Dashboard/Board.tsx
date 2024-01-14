import useFetch from "@/hooks/useFetch";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { Children, useEffect, useState } from "react";
import { DragAndDrop } from "./DragAndDrop";

const Board = (props: any) => {
  const [projects, setProjects] = useState([]);
  const [projectTabValue, setProjectTabValue] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
      .then((res) => {
        setProjects(res.data);
        console.log("resdata: ", res.data);
        return res;
      })
      .then((res) => {
        setProjectTabValue(res.data[0].name);
        console.log("tab name: ", res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log("Projects: ", projects);
  }, [projects, projectTabValue]);

  // const { data } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
  return (
    <div>
      {/* <Tabs value={projectTabValue.length === 0 ? (<Typography>No projects yet</Typography>) : projectTabValue[0].name}> */}
      <Tabs value={projectTabValue} key={projectTabValue}>
        <TabsHeader>
          {projects.map(({ name }) => (
            // <Tab id={name} key={name} value={name} onClick={e => console.log("on select: ", e)
            <Tab
              id={name}
              key={name}
              value={name}
              onClick={() => setProjectTabValue(name)}
            >
              {name}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {projects.map((project, desc) => (
            <TabPanel key={project.id} value={project.name}>

            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
      <DragAndDrop tabValue={projectTabValue} />
    </div>
  );
};

export default Board;
