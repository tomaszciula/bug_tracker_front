import { button } from "@material-tailwind/react";
import React from "react";
import Bug from "./Bug";
const Bugs = (props: any) => {
  console.log("BUGS: ", props.bugs);
  return (
    <div className="w-full">
      {Array.isArray(props.bugs)
        ? props.bugs.map((bug: any) => {
            console.log("map");
            return (
              
                <tbody
                  key={bug.id}
                  className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
                >
                  <Bug bug={bug}/>
                </tbody>
            );
          })
        : null}
    </div>
  );
};

export default Bugs;
