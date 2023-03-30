import { CurrentIndexType } from './CurrentIndex';
import { DataType } from "./Data";

export type DotsType = {
  photos: DataType[];
} & CurrentIndexType;
