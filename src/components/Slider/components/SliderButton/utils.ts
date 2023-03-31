import { TIsButton } from "./types";

export const isPrevType = ({ buttonType }: TIsButton) =>
  buttonType === "prev";

export const isNextType = ({ buttonType }: TIsButton) =>
  buttonType === "next";
