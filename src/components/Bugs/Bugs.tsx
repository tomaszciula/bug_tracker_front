import { button } from "@material-tailwind/react";
import React from "react";
const Bugs = (props: any) => {
  console.log("BUGS: ", props.bugs);
  return (
    <div>
      {Array.isArray(props.bugs)
        ? props.bugs.map((bug: any) => {
            console.log("map");
            return (
                <li
                  key={bug.id}
                  className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out"
                >
                  {bug.comment}
                </li>
            );
          })
        : null}
    </div>
  );
};

export default Bugs;
