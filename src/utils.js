/* eslint-disable import/prefer-default-export */
import { baseFontSizePx } from "./constants";

export function getRems(px) {
  return `${px / baseFontSizePx}rem`;
}
