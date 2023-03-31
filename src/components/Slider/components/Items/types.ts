import { DataType } from "./../../../../models/Data";

export interface TItems {
  offset: number;
  items: DataType[];
}

export type TItemsStyled = Omit<TItems, 'items'>