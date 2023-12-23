import * as React from "react";
import { INote } from "../../constants/types";
import { Input, Textarea, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect } from "react";

const Note: React.FC<INote> = ({ id, title, content, notes, setNotes }) => {
  const handleNoteDelete = (e: any) => {
    axios
      .delete(process.env.NEXT_PUBLIC_API_URL + `/delete/note/${id}`)
      .then((res) => {
        axios
          .get(process.env.NEXT_PUBLIC_API_URL + "/notes")
          .then((res) => {
            setNotes(res.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log("notes zmienione: ", notes);
  }, [notes]);

  return (
    <div
      id={id}
      className="text-black block relative cursor-pointer overflow-scroll no-underline bg-white h-80 w-80 p-2 m-5 shadow-xl first-of-type:bg-deep-orange-200 odd:-rotate-3 odd:relative even:rotate-6 even:relative even:top-1 even:bg-green-200 odd:bg-yellow-200 hover:scale-105 hover:relative hover:z-10 hover:shadow-black/50 break-words last-of-type:bg-blue-200 font-caveat"
    >
      <div id={id} className="flex justify-end" onClick={handleNoteDelete}>
        <svg
          className="relative cursor-pointer -top-1 right-1"
          xmlns="http://www.w3.org/2000/svg"
          height="38"
          width="38"
          id={String(id)}
        >
          <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
        </svg>
      </div>
      <div className="flex flex-col no-underline h-full w-full">
        <Typography className="font-bold text-xl m-0 border-0 font-mono">
          {title}
        </Typography>
        <Typography className="text-md font-normal border-0 h-full font-mono mt-5">
          {content}
        </Typography>
      </div>
    </div>
  );
};

export default Note;
