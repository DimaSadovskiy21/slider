import { FC } from "react";

import error from "./../../assets/vectors/error.svg";

import { ErrorStyled, ErrorDescription, ErrorImg, ErrorTitle } from "./styles";

import { IErrorType } from "./types";

export const Error:FC<IErrorType> = ({ err }) => {
  return (
    <ErrorStyled>
      <ErrorImg src={error} alt="error" />
      <ErrorTitle>Error!</ErrorTitle>
      <ErrorDescription>{err}</ErrorDescription>
    </ErrorStyled>
  );
};

