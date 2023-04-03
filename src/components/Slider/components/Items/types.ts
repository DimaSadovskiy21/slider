import { TData } from "types";


export interface TItems {
  offset: number;
  items: TData[];
}

export type TItemsStyled = Omit<TItems, 'items'>;
