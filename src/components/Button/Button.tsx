import { ButtonType } from "../../models/Button";
import { NextButton, PreviousButton } from "./ButtonStyle";

export const Button: React.FC<ButtonType> = ({
  type,
  photos,
  currentIndex,
  setCurrentIndex,
}) => {
  const onClickPreviousHandler = () => {
    const isFirstPhoto = currentIndex === 0;

    const newIndex = isFirstPhoto ? photos.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const onClickNextHandler = () => {
    const isLastPhoto = currentIndex === photos.length - 1;

    const newIndex = isLastPhoto ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  return (
    <>
      {type === "prev" && (
        <PreviousButton onClick={onClickPreviousHandler}>❰</PreviousButton>
      )}
      {type === "next" && (
        <NextButton onClick={onClickNextHandler}>❱</NextButton>
      )}
    </>
  );
};
