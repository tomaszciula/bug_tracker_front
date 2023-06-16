import ProjectsList from "../Projects/ProjectsList";
import BugsList from "../Bugs/BugsList";
import UsersList from "../Users/UsersList";

const Dashboard = (props: any) => {
  const renderRightView = (sidebarState: any) => {
    switch (sidebarState) {
      case "dashboard":
        return <div className="text-center">Dashboard</div>;
      case "projects":
        return (
          <div className="">
            <ProjectsList />
          </div>
        );
      case "bugs":
        return <BugsList />;
      case "messages":
        return null;
      case "users":
        return <UsersList />;
    }
  };
  return (
    <div className="flex flex-row w-full">
      <div className="w-full">{renderRightView(props.sidebarState)}</div>
    </div>
  );
};

export default Dashboard;
