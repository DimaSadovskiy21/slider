import { FC, useState } from "react";
import { Dots, SliderButton } from "./components";
import { SliderContainer, SliderStyled } from "./styles";
import { ISlider } from "./types";
import { isDisabled } from "./utils";

export const Slider: FC<ISlider> = ({ items }) => {
  const [offset, setOffset] = useState(0);

  const handlePrevClick = () => {
    setOffset(offset - 100);
  };

  const handleNextClick = () => {
    setOffset(offset + 100);
  };

  const itemsLength = items.length;

  return (
    <SliderContainer>
      <SliderButton
        buttonType="prev"
        handler={handlePrevClick}
        disabled={!offset}
      >
        ❰
      </SliderButton>
      <SliderButton
        disabled={isDisabled({ offset, itemsLength })}
        buttonType="next"
        handler={handleNextClick}
      >
        ❱
      </SliderButton>
      <SliderStyled>
        <div
          style={{
            height: "100%",
            display: "flex",
            transition: "all 0.5s",
            transform: `translateX(-${offset}%)`,
          }}
        >
          {items.map((el) => (
            <img
              style={{
                height: "100%",
                minWidth: "100%",
                maxWidth: "100%",
              }}
              src={el.url}
              alt={el.title}
            />
          ))}
        </div>
      </SliderStyled>

      <Dots items={items} offset={offset} setOffset={setOffset} />
    </SliderContainer>
  );
};
