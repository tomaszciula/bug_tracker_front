import axios from "axios";
import { useEffect, useState } from "react";

export default function usePost(url: string, body: {}) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.post(url, body)
    .then(res => {
      setData(res);
      setLoading(false);
    })
    .catch((err) => {
      setError(err);
      setLoading(false);
  });
}, [body, url]);

  return { data, loading, error };
}
