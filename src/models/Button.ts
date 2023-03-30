import { Dispatch, SetStateAction } from "react";
import { DataType } from "./Data";

export type ButtonType = {
    type: "prev" | "next";
    photos: DataType[];
    currentIndex: number;
    setCurrentIndex: Dispatch<SetStateAction<number>>;
  };
  