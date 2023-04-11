import { Dispatch, SetStateAction } from "react";

export interface IDot {
  index: number;
  offset: number;
  setOffset: Dispatch<SetStateAction<number>>;
}

export type TDotStyled = Omit<IDot, "setOffset">;

export type TGetIndexOffsetType = Omit<TDotStyled, "offset">;
