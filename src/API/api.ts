import { data } from "../data";
import { DataType } from "../models/Data";

export const photoAPI = {
  getPhotos() {
    return new Promise<DataType[]>((res, rej) => {
            // setTimeout(() => res(data), 3000);
            setTimeout(() => rej('Андрюшка, дай почесать за ушком!'), 3000);
        });
  },
};
