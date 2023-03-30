import styled from "styled-components";

type DotButtonPropsType = {
  currentIndex: number;
  index: number;
};

const dotColor = ({currentIndex, index}: DotButtonPropsType) =>
  currentIndex === index ? "var(--orange)" : "var(--gray)";

export const DotButton = styled.button<DotButtonPropsType>`
  border: none;
  font-size: 24px;
  color: ${dotColor};
  background: none;
  cursor: pointer;
  transition: color 0.5s;
  &:hover {
    color: var(--orange);
  }
`;
