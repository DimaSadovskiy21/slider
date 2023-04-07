import { FC } from "react";

import { DotStyled } from "./styles";
import { IDot } from "./types";
import { getIndexOffsetType } from "./utils";

export const Dot: FC<IDot> = ({ index, offset, setOffset }) => {
  const indexOffsetType = getIndexOffsetType({ index });

  const handleDotClick = () => {
    setOffset(indexOffsetType);
  };

  return (
    <DotStyled
      offset={offset}
      index={indexOffsetType}
      onClick={handleDotClick}
    >
      ●
    </DotStyled>
  );
};
