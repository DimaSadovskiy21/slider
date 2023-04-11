import { FC } from "react";

import { ButtonContainer } from "./styles";
import { ISliderButton } from "./types";

export const SliderButton: FC<ISliderButton> = ({
  buttonType,
  onClick,
  disabled,
}) => (
  <ButtonContainer onClick={onClick} buttonType={buttonType} disabled={disabled}>
    {buttonType === "prev" ? "❰" : "❱"}
  </ButtonContainer>
);
