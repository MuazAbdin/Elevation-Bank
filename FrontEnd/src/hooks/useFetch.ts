import { useEffect, useState } from "react";

function useFetch(resource, options = {}) {
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!resource) return;
    let ignore = false;
    (async function () {
      try {
        setIsLoading(true);
        const response = await fetch(resource, options);
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        if (!ignore) setApiData(data);
      } catch (error) {
        if (!ignore) setServerError(error);
      } finally {
        if (!ignore) setIsLoading(false);
      }
    })();
    return () => (ignore = true);
  }, [resource]);

  return [apiData, serverError, isLoading];
}

export default useFetch;
