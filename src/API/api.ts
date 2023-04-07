import { data } from "data";
import { TData } from "types";

export const api = {
  getItems: (error = false) =>
    new Promise<TData[]>((res, rej) =>
      setTimeout(
        () => (error ? rej("Андрюшка, дай почесать за ушком!") : res(data)),
        3000
      )
    ),
};
