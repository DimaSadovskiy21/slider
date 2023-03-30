import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  top: 50%;
  border: none;
  transform: translate(0, -50%);
  font-size: 45px;
  color: var(--white);
  background: none;
  z-index: 1;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: var(--opacity);
  }
`;

export const PreviousButton = styled(Button)`
  left: 32px;
  padding-right: 20px;
  &:hover {
    transform: translate(-20%, -50%);
  }
`;

export const NextButton = styled(Button)`
  right: 32px;
  padding-left: 20px;
  &:hover {
    transform: translate(20%, -50%);
  }
`;