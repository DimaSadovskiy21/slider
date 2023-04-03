import { Dispatch, SetStateAction } from 'react';
import { TData } from 'types';

export interface IDots {
  items: TData[];
  offset: number;
  setOffset: Dispatch<SetStateAction<number>>;
}
