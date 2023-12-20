import React from "react";
import Bug from "./Bug";
import { Card, Typography } from "@material-tailwind/react";
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";

const Bugs = (props: any) => {
  console.log("BUGS: ", props.bugs);

  const TABLE_HEAD = [
    "Id",
    "Date",
    "Title",
    "Description",
    "Steps to bug",
    "Expected behavior",
    "Actuall behavior",
    "Project",
    "Priority",
    "Important",
    "Status",
    "Platform",
    "Reported by",
    "Comment",
  ];

  return (
    <div className="w-full mt-5">
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 p-4 cursor-pointer border-y  p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex font-normal leading-none opacity-70 items-center justify-between gap-2"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.bugs.map((bug: any) => (
              <tr key={bug.id} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                    name="id"
                  >
                    {bug.id}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                    name="date"
                  >
                    {bug.date.timestamp}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                    name="title"
                  >
                    {bug.title}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                    name="description"
                  >
                    {bug.description}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                    name="stepsToBug"
                  >
                    {bug.stepsToBug}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    // as="a"
                    // href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                    name="expectedBehavior"
                  >
                    {bug.expectedBehavior}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                    name="actuallBehavior"
                  >
                    {bug.actuallBehavior}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                    name="project.name"
                  >
                    {bug.project.name}
                  </Typography>
                </td>
                <td
                  className={
                    bug.priority === "low"
                      ? "p-4 bg-green-400"
                      : bug.priority === "medium"
                      ? "p-4 bg-yellow-400"
                      : bug.priority === "high"
                      ? "p-4 bg-red-400"
                      : "p-4"
                  }
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                    name="priority"
                  >
                    {bug.priority}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                    name="important"
                  >
                    {bug.important}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                    name="status"
                  >
                    {bug.status}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                    name="environment"
                  >
                    {bug.environment}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                    name="reporting"
                  >
                    {bug.reporting}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                    name="comment"
                  >
                    {bug.comment}
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Bugs;
