import { FC } from "react";

import { ItemStyled } from "./style";

import { IItem } from "./types";

export const Item: FC<IItem> = ({ url, title }) => {
  return <ItemStyled src={url} alt={title} />;
};
