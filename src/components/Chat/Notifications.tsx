import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";
import Head from "next/head";
import { Button, Input } from "@material-tailwind/react";
import useUser from "@/hooks/useUser";

const Notifications = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("Tomek");
  const allMessages: any = [];

  useEffect(() => {
    Pusher.logToConsole = true;
    const pusher = new Pusher(`${process.env.NEXT_PUBLIC_PUSHER_KEY}`, {
      cluster: `${process.env.NEXT_PUBLIC_PUSHER_CLUSTER}`,
    });
    const channel = pusher.subscribe(`${process.env.NEXT_PUBLIC_PUSHER_CHANNEL}`);
    channel.bind(`${process.env.NEXT_PUBLIC_PUSHER_EVENT}`, (data: any) => {
      allMessages.push(data);
      setMessages(allMessages);
    });
    return () => {
      pusher.unsubscribe(`${process.env.NEXT_PUBLIC_PUSHER_CHANNEL}`);
    };
  }, [allMessages]);

  const sendMessage = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/chat`, {
      mode: "no-cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        message,
      ),
    });
    setMessage("");
  };

  return (
    <div>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossOrigin="anonymous"
        />
      </Head>
      <ul>
        {messages.map(
          (message: {
            id: React.Key | null | undefined;
            message:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | React.ReactPortal
              | React.PromiseLikeOfReactNode
              | null
              | undefined;
          }) => (
            <li key={message.id}>
            <div className="flex flex-row items-center">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                A
              </div>
              <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                <div>
                  message.message
                </div>
              </div>
            </div>
            </li>
          )
        )}
      </ul>
      <form onSubmit={sendMessage}>
        <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
          <div>
            <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex-grow ml-4">
            <div className="relative w-full">
              <input
                className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="ml-4">
            <button className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
              <span>Send</span>
              <span className="ml-2">
                <svg
                  className="w-4 h-4 transform rotate-45 -mt-px"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Notifications;
