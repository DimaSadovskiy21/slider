import { DotType } from "../../models/Dot";
import { DotButton } from "./DotStyle";

export const Dot: React.FC<DotType> = ({
  id,
  index,
  currentIndex,
  setCurrentIndex,
}) => {
  const onClickDotHandler = (photoIndex: number) => {
    setCurrentIndex(photoIndex);
  };

  return (
    <DotButton
      key={id}
      currentIndex={currentIndex}
      index={index}
      onClick={() => onClickDotHandler(index)}
    >
      ●
    </DotButton>
  );
};
