import styled from "styled-components";

import { TDotStyled } from "./types";

export const DotContainer = styled("button")<TDotStyled>(({ offset, index }) => ({
  border: "none",
  fontSize: "24px",
  color: offset === index ? "var(--orange)" : "var(--gray)",
  background: "none",
  cursor: "pointer",
  transition: "color 0.5s",
  ":hover": {
    color: "var(--orange)",
  },
}));
