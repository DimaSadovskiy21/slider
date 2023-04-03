import { TData } from 'types';

export interface ISlider {
  items: TData[];
}

export type TCheckIsDisabled = {
  offset: number;
  itemsLength: number;
};
