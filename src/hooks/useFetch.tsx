import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then(data => {
      setData(data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err);
      setLoading(false);
  });
}, [url]);

  return { data, loading, error };
}
