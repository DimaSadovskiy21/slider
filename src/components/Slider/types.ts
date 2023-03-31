import { DataType } from "../../models/Data";

export interface ISlider {
  items: DataType[];
}

export type TIsDisabled = {
  offset: number;
  itemsLength: number;
};
