import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  IconButton,
  Input,
  ListItem,
  Tab,
  Tabs,
  TabsHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { Key } from "react";

const Users = (props: any) => {
  const TABLE_HEAD = ["Member", "Function", "Status", "Employed", ""];
  console.log("props in Users: ", props);
  return (
    <>
      <div>
        {props.users.length > 0 ? (
          props.users.map((user: any) => {
            console.log("map");
            return (
              <ListItem
                key={user.id}
                className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out justify-between"
              >
                <Typography className="">{user.firstname}</Typography>
                <Typography className="">{user.lastname}</Typography>
                <Typography className="">{user.position}</Typography>
                <Typography className="flex-col">
                  {user.roles.map((role: any) => (
                    <Typography key={role}>{role}</Typography>
                  ))}
                </Typography>
                <Typography className="">{user.verified}</Typography>
                <Typography className="">{user.email}</Typography>
              </ListItem>
            );
          })
        ) : (
          <Typography variant="h5">No users found</Typography>
        )}
      </div>
    </>
  );
};

export default Users;
