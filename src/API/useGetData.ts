import { useEffect, useState } from "react";

interface TUseGetData<TResponse> {
  items: TResponse | undefined;
  isLoading: boolean;
  error: string;
}

export function useGetData<T>(fetch: Promise<T>): TUseGetData<T> {
  const [items, setItems] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch
      .then((data) => setItems(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [fetch]);

  return { items, isLoading, error };
}
