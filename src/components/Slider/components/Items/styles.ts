import styled from "styled-components";

import { TItemsStyled } from "./types";

export const ItemsStyled = styled("div")<TItemsStyled>(({ offset }) => ({
  display: "flex",
  height: "100%",
  transition: "all 0.5s",
  transform: `translateX(-${offset}%)`,
}));
