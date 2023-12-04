import { Checkbox } from "@material-tailwind/react";
import Image from "next/image";

interface IBug {
  id: number;
  date: {};
  title: string;
  description: string;
  status: string;
  priority: string;
  important: string;
  environment: string;
  reporting: string;
  responsible: string;
  comment: string;
  screenshot: {};
  project_id: number;
  steps_to_bug: string;
  expected_behavior: string;
  actuall_behavior: string;
}

const Bug = (props: IBug) => {
  // const date = new Date(props.date.timestamp * 1000);
  // let dateFormat =
  //   date.getHours() + ":" + date.getMinutes() + ", " + date.toDateString();
  return (
    <>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <Checkbox
          // type="checkbox"
          // className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
          />
          <span>{`#${props.id}`}</span>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {/* {`${dateFormat}`} */}
      </td>
      <td>
        <div>{props.title}</div>
      </td>
      <td>
        <div>{props.description}</div>
      </td>
      <td>
        <div>{props.steps_to_bug}</div>
      </td>
      <td>
        <div>{props.expected_behavior}</div>
      </td>
      <td>
        <div>{props.priority}</div>
      </td>
      <td>
        <div>{props.actuall_behavior}</div>
      </td>
      <td>
        <div>{props.important}</div>
      </td>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 3L4.5 8.5L2 6"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h2 className="text-sm font-normal">{`${props.status}`}</h2>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <Image
            className="object-cover w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
            width={40}
            height={40}
          />
          <div>
            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
              Arthur Melo
            </h2>
            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
              authurmelo@example.com
            </p>
          </div>
        </div>
      </td>
      <td>
        <div>{props.environment}</div>
      </td>
      <td>
        <div>{props.responsible}</div>
      </td>
      <td>
        <div>{props.comment}</div>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-6">
          <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
            Archive
          </button>
          <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
            Download
          </button>
        </div>
      </td>
    </>
  );
};

export default Bug;
