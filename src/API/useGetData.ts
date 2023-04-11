import { useEffect, useState } from "react";

interface TUseGetData<TResponse> {
  items: TResponse | undefined;
  isLoading: boolean;
  error: string;
}

export function useGetData<T>(data: Promise<T>): TUseGetData<T> {
  const [items, setItems] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    data
      .then((data) => setItems(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [data]);

  return { items, isLoading, error };
}
