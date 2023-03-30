import React, { useState } from "react";
import { PhotoSliderType } from "../../models/PhotoSlider";
import { Dots } from "../Dots/Dots";
import { NextButton, Photo, PreviousButton, Slider } from "./PhotoSliderStyle";

export const PhotoSlider: React.FC<PhotoSliderType> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <Slider>
      <PreviousButton onClick={onClickPreviousHandler}>❰</PreviousButton>
      <NextButton onClick={onClickNextHandler}>❱</NextButton>
      <Photo photos={photos} currentIndex={currentIndex}></Photo>
      <Dots
        photos={photos}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </Slider>
  );
};
