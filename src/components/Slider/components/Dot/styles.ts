import styled from "styled-components";
import { TDotStyled } from "./types";
import { isActive } from "./utils";

export const DotStyled = styled("button")<TDotStyled>(({ offset, index }) => ({
  border: "none",
  fontSize: "24px",
  color: isActive({ offset, index }) ? "var(--orange)" : "var(--gray)",
  background: "none",
  cursor: "pointer",
  transition: "color 0.5s",
  ":hover": {
    color: "var(--orange)",
  },
}));
