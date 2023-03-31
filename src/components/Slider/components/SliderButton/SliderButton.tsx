import { FC } from "react";
import { ButtonStyled } from "./styles";
import { ISliderButton } from "./types";

export const SliderButton: FC<ISliderButton> = ({
  buttonType,
  handler,
  disabled,
  children,
}) => {
  const handleClick = () => handler();

  return (
    <ButtonStyled
      onClick={handleClick}
      buttonType={buttonType}
      disabled={disabled}
    >
      {children}
    </ButtonStyled>
  );
};
