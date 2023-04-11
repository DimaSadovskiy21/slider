import { FC } from "react";

import { DotContainer } from "./styles";
import { IDot } from "./types";
import { getIndexOffsetType } from "./utils";

export const Dot: FC<IDot> = ({ index, offset, setOffset }) => {
  const indexOffsetType = getIndexOffsetType({ index });

  const handleDotClick = () => {
    setOffset(indexOffsetType);
  };

  return (
    <DotContainer
      offset={offset}
      index={indexOffsetType}
      onClick={handleDotClick}
    >
      ●
    </DotContainer>
  );
};
