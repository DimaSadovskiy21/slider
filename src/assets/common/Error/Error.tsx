import React from "react";
import error from "./../../images/error.svg";
import { ErrorType } from "../../../models/Error";
import { ErrorBlock, ErrorDescription, ErrorImg, ErrorTitle } from "./ErrorStyle";

export const Error: React.FC<ErrorType> = ({ err }) => {
  return (
    <ErrorBlock>
      <ErrorImg src={error} alt="error" />
      <ErrorTitle>Error!</ErrorTitle>
      <ErrorDescription>{err}</ErrorDescription>
    </ErrorBlock>
  );
};

