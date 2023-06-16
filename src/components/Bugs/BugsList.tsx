import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import Bugs from "./Bugs";

const BugsList = () => {
  const [bugs, setBugs] = useState({});
  const [loading, setLoading] = useState(true);
  // const { data, loading, error } = useFetch(`http://localhost:8000/bugs`);
  useEffect(function effectFunc() {
    fetch("http://localhost:8000/bugs")
      .then((res) => res.json())
      .then((data) => {
        setBugs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  console.log("Bugs state: ", bugs);
  return (
    <div className="h-full w-full">
      <button>Add new bug</button>
      {loading ? <Loading /> : <Bugs bugs={bugs} />}
    </div>
  );
};
export default BugsList;
