import { data } from "data";
import { TData } from "types";

export const api = {
  getItems: (error = false) =>
    new Promise<TData[]>((res, rej) =>
      setTimeout(
        () => (error ? rej("Something's wrong. Try it again later") : res(data)),
        3000
      )
    ),
};
