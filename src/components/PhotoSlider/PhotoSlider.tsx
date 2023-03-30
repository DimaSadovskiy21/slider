import React, { useState } from "react";
import { PhotoSliderType } from "../../models/PhotoSlider";
import { Button } from "../Button/Button";
import { Dots } from "../Dots/Dots";
import { Photo, Slider } from "./PhotoSliderStyle";

export const PhotoSlider: React.FC<PhotoSliderType> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Slider>
      <Button
        type={"prev"}
        photos={photos}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <Button
        type={"next"}
        photos={photos}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <Photo photos={photos} currentIndex={currentIndex}></Photo>
      <Dots
        photos={photos}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </Slider>
  );
};
