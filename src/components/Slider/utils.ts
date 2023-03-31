import { TCheckIsDisabled } from "./types";

export const checkIsDisabled = ({ offset, itemsLength }: TCheckIsDisabled) => offset === (itemsLength - 1) * 100;
