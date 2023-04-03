import { data } from 'data';
import { TData } from 'types';



export const api = {
  getItems(error = false) {
    return new Promise<TData[]>((res, rej) => {
      error
        ? setTimeout(() => rej('Андрюшка, дай почесать за ушком!'), 3000)
        : setTimeout(() => res(data), 3000);
    });
  },
};
