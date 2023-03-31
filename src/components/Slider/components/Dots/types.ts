import { Dispatch, SetStateAction } from "react";
import { DataType } from "../../../../models/Data";

export interface IDots {
  items: DataType[];
  offset: number;
  setOffset: Dispatch<SetStateAction<number>>
}
