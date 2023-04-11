import { useEffect, useState } from "react";

interface TUseGetData<TResponse> {
  items: TResponse | undefined;
  isLoading: boolean;
  error: string;
}

export function useGetData<T>(data: T, isError?: boolean): TUseGetData<T> {
  const [items, setItems] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    new Promise<T>((res, rej) =>
      setTimeout(
        () => (isError ? rej("Something's wrong. Try it again later") : res(data)),
        3000
      )
    )
      .then((data) => setItems(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [data, isError]);

  return { items, isLoading, error };
}
