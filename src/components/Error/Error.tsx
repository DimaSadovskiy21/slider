import { FC } from "react";

import {
  ErrorContainer,
  ErrorDescription,
  ErrorVector,
  ErrorTitle,
} from "./styles";
import { IErrorType } from "./types";

export const Error: FC<IErrorType> = ({ message }) => (
  <ErrorContainer>
    <ErrorVector />
    <ErrorTitle>Error!</ErrorTitle>
    <ErrorDescription>{message}</ErrorDescription>
  </ErrorContainer>
);
