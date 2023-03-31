import { DataType } from "../../models/Data";

export interface ISlider {
  items: DataType[];
}

export type TCheckIsDisabled = {
  offset: number;
  itemsLength: number;
};
