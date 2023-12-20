import Image from "next/image";

const Column = () => {
  return (
    <div className="rounded bg-gray-200 dark:bg-gray-800 p-3">
      <div className="flex justify-between py-1 text-black dark:text-white">
        <h3 className="text-sm font-semibold">Tasks in TO DO</h3>
        <svg
          className="h-4 fill-current text-gray-600 dark:text-gray-500 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
        </svg>
      </div>
      <div className="text-sm text-black dark:text-gray-50 mt-2">
        <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
          Delete all references from the wiki
        </div>
        <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
          Remove analytics code
        </div>
        <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
          Do a mobile first layout
          <div className="text-gray-500 dark:text-gray-200 mt-2 ml-2 flex justify-between items-start">
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
            <Image
              src="https://i.imgur.com/OZaT7jl.png"
              className="rounded-full"
              alt={""}
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
          Check the meta tags
        </div>
        <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
          Think more tasks for this example
          <div className="text-gray-500 dark:text-gray-200 mt-2 ml-2 flex justify-between items-start">
            <span className="text-xs flex items-center">
              <svg
                className="h-4 fill-current mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
              >
                <path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z" />
              </svg>
              0/3
            </span>
          </div>
        </div>
        <p className="mt-3 text-gray-600 dark:text-gray-400">Add a card...</p>
      </div>
    </div>
  );
};

export default Column;
