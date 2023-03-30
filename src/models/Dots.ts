import { Dispatch, SetStateAction } from "react";
import { DataType } from "./Data";

export type DotsType = {
  photos: DataType[];
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
};
