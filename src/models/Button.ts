import { CurrentIndexType } from "./CurrentIndex";
import { DataType } from "./Data";

export type ButtonType = {
    type: "prev" | "next";
    photos: DataType[];
  } & CurrentIndexType;
  