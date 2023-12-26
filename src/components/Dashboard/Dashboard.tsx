import ProjectsList from "../Projects/ProjectsList";
import BugsList from "../Bugs/BugsList";
import UsersList from "../Users/UsersList";
import ChatMainView from "../Chat/ChatMainView";
import Board from "./Board";
import { useRouter } from "next/navigation";
import MyCalendar from "../Calendar/MyCalendar";
import TodosMainView from "../Todos/TodosMainView";
import NotesMainView from "../Notes/NotesMainView";
import StatsMainView from "../Stats/StatsMainView";

const Dashboard = (props: any) => {
  const router = useRouter();
  const renderRightView = (sidebarState: any) => {
    switch (sidebarState) {
      case "dashboard":
        return <Board />;
      case "projects":
        return <ProjectsList />;
      case "bugs":
        return <BugsList />;
      case "messages":
        return <ChatMainView />;
      // case "calendar":
      //   return <MyCalendar />;
      case "notes":
        return <NotesMainView />;
      case "todos":
        return <TodosMainView />;
      case "stats":
        return <StatsMainView />;
      case "users":
        return <UsersList />;
      case "admin":
        router.push(`${process.env.NEXT_PUBLIC_API_URL}/admin`);
    }
  };
  return (
    <div className="flex flex-row w-full">
      <div className="w-full">{renderRightView(props.sidebarState)}</div>
    </div>
  );
};

export default Dashboard;
