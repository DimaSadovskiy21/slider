import styled from "styled-components";

import { TItemsStyled } from "./types";

export const SliderContainer = styled("div")({
  position: "relative",
  height: "420px",
  width: "750px",
});

export const SliderBox = styled("div")({
  width: "100%",
  height: "100%",
  overflow: "hidden",
  borderRadius: "10px",
});

export const ItemsContainer = styled("div")<TItemsStyled>(({ offset }) => ({
  display: "flex",
  height: "100%",
  transition: "all 0.5s",
  transform: `translateX(-${offset}%)`,
}));

export const Item = styled("img")({
  height: "100%",
  minWidth: "100%",
  maxWidth: "100%",
});

export const DotsContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  gap: "10px",
});
