import { Dispatch, SetStateAction } from "react";

export type CurrentIndexType = {
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
};
