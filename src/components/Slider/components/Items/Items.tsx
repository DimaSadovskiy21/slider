import { FC } from "react";

import { Item } from "../Item";

import { ItemsStyled } from "./styles";

import { TItems } from "./types";

export const Items: FC<TItems> = ({ offset, items }) => {
  return (
    <ItemsStyled offset={offset}>
      {items.map(({id ,url, title}) => (
        <Item key={id} url={url} title={title} />
      ))}
    </ItemsStyled>
  );
};
