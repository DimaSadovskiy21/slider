import { FC, useState } from "react";

import { Dots, Items, SliderButton } from "./components";
import { SliderContainer, SliderBox } from "./styles";
import { ISlider } from "./types";
import { checkIsDisabled } from "./utils";

export const Slider: FC<ISlider> = ({ items }) => {
  const [offset, setOffset] = useState(0);

  const handlePrevClick = () => {
    setOffset(offset - 100);
  };

  const handleNextClick = () => {
    setOffset(offset + 100);
  };

  const itemsLength = items.length;

  const isDisabled = checkIsDisabled({ offset, itemsLength });

  return (
    <SliderContainer>
      <SliderButton
        buttonType="prev"
        onClick={handlePrevClick}
        disabled={!offset}
      />

      <SliderButton
        buttonType="next"
        onClick={handleNextClick}
        disabled={isDisabled}
      />

      <SliderBox>
        <Items offset={offset} items={items} />
      </SliderBox>

      <Dots items={items} offset={offset} setOffset={setOffset} />
    </SliderContainer>
  );
};
