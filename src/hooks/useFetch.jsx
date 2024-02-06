import { useEffect, useState } from "react";

export const useFetch = (url, auth = null) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let options = {};
    if (auth) {
      options = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + auth,
        },
      };
    }

    setLoading(true);
    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url, auth]);

  return { data, loading, error };
};
