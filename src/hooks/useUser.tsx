import { useEffect, useState } from "react";

const useUser = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    // debugger
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((user) => setUser(user))
      .catch((err) => console.log(err));
  }, []);
  return user;
};

export default useUser;
