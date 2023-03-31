import styled from "styled-components";

export const ErrorBlock = styled.div`
  display: grid;
  grid-template-areas:
    "i t"
    "i d";
  gap: 0 30px;
`;
export const ErrorImg = styled.img`
  grid-area: i;
`;
export const ErrorTitle = styled.h4`
  grid-area: t;
  align-self: self-start;
  font-size: 52px;
`;

export const ErrorDescription = styled.p`
  grid-area: d;
  align-self: center;
`;
