import React from "react";
import copy from "copy-to-clipboard";
import { colors } from "../../src";
import { unstyledButtonStyles } from "../styles";

const ThemeName = ({ name, link }) => (
  <h2>
    {name}{" "}
    {link && (
      <span style={{ color: colors.transparentBlack, fontStyle: "italic" }}>
        (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          link
        </a>
        )
      </span>
    )}
  </h2>
);

const ThemeGroup = ({ name }) => <h3 style={{ margin: "10px 0" }}>{name}</h3>;

const ColorName = ({ name, note }) => (
  <h4 style={{ margin: "10px 0 5px 0" }}>
    <button
      type="button"
      title={`Copy ${name} to clipboard`}
      onClick={() => copy(name)}
      style={{
        ...unstyledButtonStyles
      }}
    >
      {name}
    </button>{" "}
    {note && (
      <span
        style={{
          color: colors.transparentBlack,
          fontSize: "1.25rem",
          fontStyle: "italic"
        }}
      >
        ({note})
      </span>
    )}
  </h4>
);

const ColorBlock = ({ name }) => {
  const value = colors[name];

  return (
    <>
      <div style={{ background: value, height: "50px", width: "200px" }} />
      <button
        type="button"
        title={`Copy ${value} to clipboard`}
        onClick={() => copy(value)}
        style={{
          color: colors.gray,
          margin: "5px 0",
          ...unstyledButtonStyles
        }}
      >
        {value}
      </button>
    </>
  );
};

const Color = ({ name, note }) => (
  <div style={{ display: "inline-block", marginRight: 25 }}>
    <ColorName name={name} note={note} />
    <ColorBlock name={name} />
  </div>
);

const ColorPaletteStory = () => (
  <div style={{ padding: "0 15px 30px 15px" }}>
    <h1 style={{ marginBottom: 5 }}>Color Palette</h1>
    <p
      style={{
        color: colors.gray,
        fontStyle: "italic",
        marginTop: 0
      }}
    >
      Click a name or a value to copy it to your clipboard.
    </p>
    <hr />
    <ThemeName
      name="Brown University Visual Identity"
      link="https://www.brown.edu/university-identity/sites/university-identity/files/Brown_Visual_Identity_Policy_2016-07-22.pdf"
    />
    <ThemeGroup name="Primary" />
    <Color name="idRed" note="prefer red" />
    <Color name="brown" />
    <Color name="gold" />
    <Color name="gray" />
    <ThemeGroup name="Secondary" />
    <Color name="skyBlue" />
    <Color name="emerald" />
    <Color name="navy" />
    <Color name="taupe" />
    <hr />
    <ThemeName
      name="Fastspot Visual Styles"
      link="https://brown.dev.fastspot.com/static/templates/fs-visual-styles.html"
    />
    <ThemeGroup name="Primary" />
    <Color name="brown" />
    <Color name="red" />
    <Color name="yellow" note="gold" />
    <ThemeGroup name="Secondary" />
    <Color name="beige" note="taupe" />
    <hr />
    <ThemeName
      name="Brown University Theme"
      link="https://www.brown.edu/university-communications/digital/university-theme"
    />
    <Color name="red" />
    <Color name="yellow" note="gold" />
    <Color name="brown" />
    <Color name="gray" />
    <Color name="emerald" />
    <Color name="skyBlue" />
    <Color name="navy" />
    <Color name="lightBeige" />
    <Color name="sand" />
    <Color name="lightBrown" />
    <Color name="mediumBrown" />
    <hr />
    <ThemeName name="Other Themes" />
    <Color name="bearBrown" />
    <hr />
    <ThemeName name="Grayscale" />
    <Color name="white" />
    <Color name="lightGray" />
    <Color name="gray" />
    <Color name="mediumGray" />
    <Color name="darkGray" />
    <Color name="black" />
    <Color name="transparentBlack" />
  </div>
);

export default ColorPaletteStory;
