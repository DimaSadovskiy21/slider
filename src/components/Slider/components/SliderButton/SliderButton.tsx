import { FC } from "react";

import { ButtonStyled } from "./styles";

import { ISliderButton } from "./types";

export const SliderButton: FC<ISliderButton> = ({
  buttonType,
  onClick,
  disabled,
}) => {
  return (
    <ButtonStyled onClick={onClick} buttonType={buttonType} disabled={disabled}>
      {buttonType === "prev" ? "❰" : "❱"}
    </ButtonStyled>
  );
};
