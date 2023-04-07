import { FC } from "react";

import { DotsStyled } from "./styles";
import { IDots } from "./types";

import { Dot } from "../Dot";

export const Dots: FC<IDots> = ({ items, offset, setOffset }) => (
  <DotsStyled>
    {items.map(({ id }, index) => (
      <Dot key={id} index={index} offset={offset} setOffset={setOffset} />
    ))}
  </DotsStyled>
);
