import { TIsDisabled } from "./types";

export const isDisabled = ({ offset, itemsLength }: TIsDisabled) => offset === (itemsLength - 1) * 100;
