"use client";
import { useState } from "react";
import Dashboard from "./Dashboard/Dashboard";
import Sidebar from "./Sidebar/Sidebar";

const MainView = () => {
  const [sidebarState, setSidebarState] = useState("dashboard");

  return (
    <div className="w-full flex">
      <Sidebar setSidebarState={setSidebarState} />
      <Dashboard sidebarState={sidebarState}/>
    </div>
  );
};

export default MainView;
