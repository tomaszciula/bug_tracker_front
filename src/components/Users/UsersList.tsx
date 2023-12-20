import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import Users from "./Users";
import { List, Typography } from "@material-tailwind/react";

const UsersList = () => {
  const [users, setUsers] = useState([{}]);
  const [loading, setLoading] = useState(true);

  useEffect(function effectFunc() {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("Users GET: ", data);
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  console.log("users xxx: ", users[0]);

  return (
    <div className="flex flex-col">
      {loading ? (
        <Loading />
      ) : users.length === 0 ? (
        <Typography variant="h5" className="mt-5 ml-2">
          No users yet
        </Typography>
      ) : (
        <List>
        <Users users={users[0]} />
        </List>
      )}
    </div>
  );
};

export default UsersList;
