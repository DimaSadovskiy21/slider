export interface IButtonStyled {
  buttonType: "prev" | "next";
  disabled: boolean;
}

export interface ISliderButton extends IButtonStyled {
  onClick: () => void;
}
