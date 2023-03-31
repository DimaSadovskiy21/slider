import { FC } from "react";
import { Dot } from "../Dot";
import { DotsStyled } from "./styles";
import { IDots } from "./types";

export const Dots: FC<IDots> = ({ items, offset, setOffset }) => {
  return (
    <DotsStyled>
      {items.map(({ id }, index) => (
        <Dot key={id} index={index} offset={offset} setOffset={setOffset} />
      ))}
    </DotsStyled>
  );
};
