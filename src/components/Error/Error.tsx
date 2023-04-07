import { FC } from "react";

import {
  ErrorStyled,
  ErrorDescription,
  ErrorVector,
  ErrorTitle,
} from "./styles";
import { IErrorType } from "./types";

export const Error: FC<IErrorType> = ({ err }) => (
  <ErrorStyled>
    <ErrorVector />
    <ErrorTitle>Error!</ErrorTitle>
    <ErrorDescription>{err}</ErrorDescription>
  </ErrorStyled>
);
