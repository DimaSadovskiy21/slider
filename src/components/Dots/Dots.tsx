import { DotsType } from "../../models/Dots";
import { Dot } from "../Dot/Dot";
import { DotsBlock } from "./DotsStyle";

export const Dots: React.FC<DotsType> = ({
  photos,
  currentIndex,
  setCurrentIndex,
}) => {
  return (
    <DotsBlock>
      {photos.map((photo, index) => (
        <Dot
          id={photo.id}
          index={index}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      ))}
    </DotsBlock>
  );
};
