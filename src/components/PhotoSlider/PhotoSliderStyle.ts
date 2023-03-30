import styled from "styled-components";
import { DataType } from "../../models/Data";

type PhotoPropsType = {
  photos: DataType[];
  currentIndex: number;
};

const backgroundPhoto = ({ photos, currentIndex }: PhotoPropsType) =>
  `${photos[currentIndex].url}`;

export const Slider = styled.div`
  position: relative;
  height: 100%;
`;

export const Photo = styled.div<PhotoPropsType>`
  min-width: 500px;
  height: 100%;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-image: url(${backgroundPhoto});
  transition: all 0.7s;
`;
