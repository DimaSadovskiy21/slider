import { SliderType } from "../../models/Slider";
import { PhotoSlider } from "../PhotoSlider/PhotoSlider";
import { ContainerSlider } from "./SliderStyle";

export const Slider: React.FC<SliderType> = ({ photos }) => {
  return (
    <ContainerSlider>
      <PhotoSlider photos={photos} />
    </ContainerSlider>
  );
};
