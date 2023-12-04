import { useDragAndDrop } from "@/hooks/useDragAndDrop";
import { ContainerCards } from "./ContainerCard";
import { data } from "@/constants/data";
import { BoardColumns } from "@/constants/types";
import { useState } from "react";

const typesStatus: BoardColumns[] = ["To do", "In progress", "Testing", "Done"];

export const DragAndDrop = (props: any) => {
  const [bugs, setBugs] = useState();
  const { isDragging, listItems, handleDragging, handleUpdateList } =
    useDragAndDrop(props.bugs);
console.log
  return (
    <div className="flex">
      {typesStatus.map((container) => (
        <ContainerCards
          items={listItems}
          status={container}
          key={container}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
      ))}
    </div>
  );
};
