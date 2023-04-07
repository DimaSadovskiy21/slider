import { FC } from "react";

import { ItemStyled } from "./style";
import { IItem } from "./types";

export const Item: FC<IItem> = ({ url, title }) => (
  <ItemStyled src={url} alt={title} />
);
