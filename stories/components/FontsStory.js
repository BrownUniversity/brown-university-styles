import React from "react";
import copy from "copy-to-clipboard";
import { colors, typography } from "../../src";
import { unstyledButtonStyles } from "../styles";

const FontGroup = ({ name }) => (
  <h2>
    <button
      type="button"
      title={`Copy ${name} to clipboard`}
      onClick={() => copy(name)}
      style={{
        ...unstyledButtonStyles,
      }}
    >
      {name}
    </button>
  </h2>
);

const Font = ({ name, note, styles }) => (
  <div style={{ marginBottom: 30 }}>
    <span
      style={{
        display: "block",
        fontSize: "2rem",
        ...styles,
      }}
    >
      {name}
    </span>
    {note && (
      <small style={{ color: colors.gray, fontStyle: "italic" }}>{note}</small>
    )}
  </div>
);

const FontsStory = () => (
  <div style={{ padding: "0 15px 30px 15px" }}>
    <h1 style={{ marginBottom: 5 }}>Fonts</h1>
    <p
      style={{
        color: colors.gray,
        fontStyle: "italic",
        marginTop: 0,
      }}
    >
      Click a heading to copy it to your clipboard. Variants marked with an
      asterisk are not available on brown.edu.
    </p>
    <hr />
    <FontGroup name="sans" />
    <Font name="CircularStd Book" styles={{ fontFamily: typography.sans }} />
    <Font
      name="CircularStd Book Italic*"
      styles={{ fontFamily: typography.sans, fontStyle: "italic" }}
    />
    <Font
      name="CircularStd Medium"
      styles={{ fontFamily: typography.sans, fontWeight: 500 }}
    />
    <Font
      name="CircularStd Medium Italic*"
      styles={{
        fontFamily: typography.sans,
        fontWeight: 500,
        fontStyle: "italic",
      }}
    />
    <Font
      name="CircularStd Bold"
      styles={{
        fontFamily: typography.sans,
        fontWeight: 700,
      }}
    />
    <Font
      name="CircularStd Bold Italic*"
      styles={{
        fontFamily: typography.sans,
        fontWeight: 700,
        fontStyle: "italic",
      }}
    />
    <hr />
    <FontGroup name="sansBold" />
    <Font
      name="CircularStdBold*"
      note="Alias for CircularStd Bold"
      styles={{
        fontFamily: typography.sansBold,
      }}
    />
    <Font
      name="CircularStdBold Italic*"
      note="Alias for CircularStd Bold Italic"
      styles={{
        fontFamily: typography.sansBold,
        fontStyle: "italic",
      }}
    />
    <hr />
    <FontGroup name="serif" />
    <Font
      name="MinionPro Regular"
      styles={{
        fontFamily: typography.serif,
      }}
    />
    <Font
      name="MinionPro Italic"
      styles={{
        fontFamily: typography.serif,
        fontStyle: "italic",
      }}
    />
    <Font
      name="MinionPro Bold"
      styles={{
        fontFamily: typography.serif,
        fontWeight: 700,
      }}
    />
    <hr />
    <FontGroup name="mono" />
    <Font
      name="Bitstream Vera Sans Mono*"
      styles={{
        fontFamily: typography.mono,
      }}
    />
  </div>
);

export default FontsStory;
