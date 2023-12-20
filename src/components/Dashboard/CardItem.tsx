import { Data } from "@/constants/types";

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
    <div
      className="bg-white hover:bg-grey-lighter p-2 rounded mt-1 border-b border-grey cursor-pointer"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <p className="text-black">{data.title}</p>
      <div className="flex justify-between">
        <span className="text-xs flex items-center">
          <svg
            className="h-4 fill-current mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
          >
            <path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z" />
          </svg>
          3/5
        </span>
        <img src="https://i.imgur.com/OZaT7jl.png" className="rounded-full" />
      </div>
    </div>
  );
};
