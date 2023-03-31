import { ReactNode } from "react";

export interface IButtonStyled {
  buttonType: "prev" | "next";
  disabled: boolean;
}

export interface ISliderButton extends IButtonStyled {
  handler: () => void;
  children: ReactNode;
}

export type TIsButton = Omit<IButtonStyled, "disabled">;
