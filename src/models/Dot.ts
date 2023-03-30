import { Dispatch, SetStateAction } from "react";

export type DotType = {
  id: string;
  index: number;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
};
