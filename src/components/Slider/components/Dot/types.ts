import { IDots } from "../Dots";

export interface IDot extends Omit<IDots, "items"> {
  index: number;
}

export type TDotStyled = Omit<IDot, "setOffset">;

export type TIsActive = TDotStyled;

export type TGetIndexOffsetType = Omit<TDotStyled, "offset">;
