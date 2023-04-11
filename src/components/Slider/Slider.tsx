import { FC, useState } from "react";

import { Dot, SliderButton } from "./components";
import {
  SliderContainer,
  SliderBox,
  ItemsContainer,
  Item,
  DotsContainer,
} from "./styles";
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
        <ItemsContainer offset={offset}>
          {items.map(({ id, url, title }) => (
            <Item key={id} src={url} alt={title} />
          ))}
        </ItemsContainer>
      </SliderBox>

      <DotsContainer>
        {items.map(({ id }, index) => (
          <Dot key={id} index={index} offset={offset} setOffset={setOffset} />
        ))}
      </DotsContainer>
    </SliderContainer>
  );
};
