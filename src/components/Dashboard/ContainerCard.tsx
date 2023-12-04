import { BoardColumns, Data } from "@/constants/types";
import { CardItem } from "./CardItem";

interface Props {
  items: Data[];
  status: BoardColumns;
  isDragging: boolean;
  handleUpdateList: (id: number, status: BoardColumns) => void;
  handleDragging: (dragging: boolean) => void;
}
const columns = ["To do", "In progress", "Testing"];

export const ContainerCards = ({
  items = [],
  status,
  isDragging,
  handleDragging,
  handleUpdateList,
}: Props) => {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleUpdateList(+e.dataTransfer.getData("text"), status);
    handleDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
    e.preventDefault();

  return (
    <div
      className="flex flex-col border-2 rounded-xl w-1/3 h-full m-5"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <p className="w-full h-7 text-center border-b-2">{status}</p>
      {items.map(
        (item) =>
          status === item.status && (
            <CardItem
              data={item}
              key={item.id}
              handleDragging={handleDragging}
            />
          )
      )}
    </div>
  );
};
