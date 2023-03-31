import { TGetIndexOffsetType, TIsActive } from "./types";

export const isActive = ({ offset, index }: TIsActive) => offset === index;

export const getIndexOffsetType = ({ index }: TGetIndexOffsetType) => index * 100;
