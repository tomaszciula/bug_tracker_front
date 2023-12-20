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
import { useEffect, useState } from "react";
import { DragAndDrop } from "./DragAndDrop";

const Board = (props: any) => {
  const [projects, setProjects] = useState([]);
  const [projectTabValue, setProjectTabValue] = useState("");
  

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
      .then((res) => {
        console.log("res data: ", res.data);
        setProjectTabValue(res.data[0].name);
        setProjects(res.data);
        console.log("value: ", projectTabValue);
      })
      .catch((err) => console.log(err));
  }, []);

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
    {projects.map(({ value, desc }) => (
      <TabPanel key={value} value={value}>
        {desc}
      </TabPanel>
    ))}
  </TabsBody>
      </Tabs>
      <DragAndDrop tabValue={projectTabValue}/>
    </div>
  );
};

export default Board;
