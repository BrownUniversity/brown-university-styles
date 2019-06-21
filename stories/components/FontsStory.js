import React from "react";
import copy from "copy-to-clipboard";
import { colors, typography } from "../../src";
import { unstyledButtonStyles } from "../styles";

const fontStyles = {
  display: "block",
  fontSize: "2rem",
  marginBottom: 30
};

const FontKey = ({ fontKey }) => (
  <span
    style={{
      color: colors.transparentBlack,
      fontStyle: "italic"
    }}
  >
    <button
      type="button"
      title={`Copy ${fontKey} to clipboard`}
      onClick={() => copy(fontKey)}
      style={{
        ...unstyledButtonStyles,
        fontFamily: typography[fontKey]
      }}
    >
      ({fontKey})
    </button>
  </span>
);
const FontsStory = () => (
  <div style={{ padding: "0 15px 30px 15px" }}>
    <h1>Fonts</h1>
    <hr />
    <h2>Sans</h2>
    <span
      style={{
        ...fontStyles,
        fontFamily: typography.sans
      }}
    >
      Circular Book <FontKey fontKey="sans" />
    </span>
    <span
      style={{
        ...fontStyles,
        fontFamily: typography.sansBold
      }}
    >
      Circular Bold <FontKey fontKey="sansBold" />
    </span>
    <hr />
    <h2>Serif</h2>
    <span
      style={{
        ...fontStyles,
        fontFamily: typography.serif
      }}
    >
      Minion Pro <FontKey fontKey="serif" />
    </span>
    <hr />
    <h2>Mono</h2>
    <span style={{ ...fontStyles, fontFamily: typography.mono }}>
      Bitstream Vera Sans <FontKey fontKey="mono" />
    </span>
  </div>
);

export default FontsStory;
