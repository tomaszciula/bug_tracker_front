import { Data } from "@/constants/types";
import { Tooltip } from "@material-tailwind/react";

interface Props {
  data: any;
  handleDragging: (dragging: boolean) => void;
}

export const CardItem = ({ data, handleDragging }: Props) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", `${data.id}`);
    handleDragging(true);
  };

  const handleDragEnd = () => handleDragging(false);

  return (
    <Tooltip
      content={
        <div>
          <p>id : {data.id}</p>
          <p>title : {data.title}</p>
          <p>description : {data.description}</p>
          <p>createdAt : {new Date(data.date.timestamp * 1000).toLocaleDateString()}</p>
          <p>reported by : {data.reporting}</p>
          <p>responsible : {data.responsible}</p>
          <p>status : {data.status}</p>
          <p>priority : {data.priority}</p>
          <p>important : {data.important}</p>
          <p>stepsToBug : {data.stepsToBug}</p>
          <p>environment : {data.environment}</p>
          <p>expectedBehavior : {data.expectedBehavior}</p>
          <p>actuallBehavior : {data.actuallBehavior}</p>
          <p>comment : {data.comment}</p>
        </div>
      }
    >
      <div
        className="bg-white hover:bg-grey-lighter p-2 rounded mt-1 border-b border-grey cursor-pointer"
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <p className="text-black text-2xl">Id: {data.id} - {data.title}</p>
        <div
          className={
            data.priority === "high"
              ? "flex justify-between rounded-md bg-red-200 p-2"
              : data.priority === "medium"
              ? "flex justify-between rounded-md bg-yellow-200 p-2"
              : data.priority === "low"
              ? "flex justify-between rounded-md bg-green-200 p-2"
              : ""
          }
        >
          <span className="flex items-center">
            {new Date(data.date.timestamp * 1000).toLocaleDateString()}
          </span>
          <span>Important: {data.priority}</span>
          {/* <img src="https://i.imgur.com/OZaT7jl.png" className="rounded-full" /> */}
        </div>
      </div>
    </Tooltip>
  );
};
