import { FC } from "react";
import { DotStyled } from "./styles";
import { IDot } from "./types";
import { getIndexOffsetType } from "./utils";

export const Dot: FC<IDot> = ({ index, offset, setOffset }) => {
  const onClickDotHandler = (index: number) => () => {
    setOffset(getIndexOffsetType({ index }));
  };

  return (
    <DotStyled
      offset={offset}
      index={getIndexOffsetType({ index })}
      onClick={onClickDotHandler(index)}
    >
      ●
    </DotStyled>
  );
};
