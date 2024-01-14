import { useDragAndDrop } from "@/hooks/useDragAndDrop";
import { ContainerCards } from "./ContainerCard";
import { data } from "@/constants/data";
import { Data } from "@/constants/types";
import { BoardColumns } from "@/constants/types";
import { useCallback, useEffect, useState } from "react";

const typesStatus: BoardColumns[] = ["To do", "In progress", "Testing", "Done"];

export const DragAndDrop = (props: any) => {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  // const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/bugs")
      .then((res) => res.json())
      .then((data) => {
        setBugs(data);
        setLoading(false);
        console.log("Bugs after useEffect, first fetch: ", data);
        // setFilteredData(filteredBugsByProject(data));
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("Bugs: ", bugs);
  }, [bugs]);

  // useEffect(() => {
  //   console.log("filteredData: ", filteredData);
  // }, [filteredData]);
  // debugger
  // const filteredBugs = useCallback(() => {
  //   bugs.filter((bug: any) => bug.project.name === props.tabValue);
  //   return filteredBugs;
  // }, [props.tabValue, bugs]);

  const filteredBugsByProject = (bugs: any) => {
    const filteredBugs = bugs.filter(
      (bug: any) => bug.project.name === props.tabValue
    );
    console.log("filteedBugs: ", filteredBugs);
    // setFilteredData(filteredBugs);
    return filteredBugs;
  };

  useEffect(() => {
    setFilteredData(() => filteredBugsByProject(bugs));
  }, [bugs, props.tabValue]);

  const { isDragging, listItems, handleDragging, handleUpdateList } =
    useDragAndDrop(filteredData);
  console.log(
    "useDragAndDrop: ",
    isDragging,
    listItems,
    handleDragging,
    handleUpdateList
  );

  // const sortBugsByProject = (bugs: [{}]) => {
  //   let filteredData = bugs.filter(
  //     (bug) => bug.project.name === props.tabValue
  //   );
  //   setData(filteredData);

  // }

  return (
    <div className="flex">
      {typesStatus.map((status) => (
        <ContainerCards
          items={filteredData}
          status={status}
          key={status}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
      ))}
    </div>
  );
};
