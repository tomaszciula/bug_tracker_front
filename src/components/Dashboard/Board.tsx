import useFetch from "@/hooks/useFetch";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { DragAndDrop } from "./DragAndDrop";

const Board = (props: any) => {
  const [projects, setProjects] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
      .then((res) => {
        console.log("res data: ", res.data);
        // setValue(res.data[0].name);
        setProjects(res.data);
        console.log("value: ", value);
      })
      .catch((err) => console.log(err));
  }, [value]);

  // const { data } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
  return (
    <div>
      <Tabs value="Bug Tracker">
        <TabsHeader>
          {projects.map(({ name }) => (
            // <Tab id={name} key={name} value={name} onClick={e => console.log("on select: ", e)
            <Tab
              id={name}
              key={name}
              value={name}
              onClick={() => setValue(name)}
            >
              {name}
            </Tab>
          ))}
        </TabsHeader>
        {/* <TabsBody>
    {projects.map(({ value, desc }) => (
      <TabPanel key={value} value={value}>
        {desc}
      </TabPanel>
    ))}
  </TabsBody> */}
      </Tabs>
      <DragAndDrop />
    </div>
  );
};

export default Board;
