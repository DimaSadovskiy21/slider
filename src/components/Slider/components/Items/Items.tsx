import { FC } from "react";

import { ItemsStyled } from "./styles";
import { TItems } from "./types";

import { Item } from "../Item";

export const Items: FC<TItems> = ({ offset, items }) => (
  <ItemsStyled offset={offset}>
    {items.map(({ id, url, title }) => (
      <Item key={id} url={url} title={title} />
    ))}
  </ItemsStyled>
);
