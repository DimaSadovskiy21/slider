import styled from "styled-components";

export const DotButton = styled.button<{ currentIndex: number; index: number }>`
  border: none;
  font-size: 24px;
  color: ${(props) => props.currentIndex === props.index ? "var(--orange)" : "var(--gray)"};
  background: none;
  cursor: pointer;
  transition: color 0.5s;
  &:hover {
    color: var(--orange);
  }
`;
