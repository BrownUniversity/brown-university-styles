/* eslint-disable import/prefer-default-export */
import { baseFontSizePx } from "./constants";

export function getRems(px: number) {
  return `${px / baseFontSizePx}rem`;
}
