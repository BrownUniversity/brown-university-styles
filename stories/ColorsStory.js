/* eslint-disable react/prop-types */
import React from "react";
import { colors } from "../src";

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
  <h4 style={{ margin: "5px 0" }}>
    {name}{" "}
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

const ColorBlock = ({ name }) => (
  <>
    <div style={{ background: colors[name], height: "50px", width: "200px" }} />
    <p style={{ color: colors.gray, marginTop: 0 }}>{colors[name]}</p>
  </>
);

const Color = ({ name, note }) => (
  <div style={{ display: "inline-block", marginRight: 25 }}>
    <ColorName name={name} note={note} />
    <ColorBlock name={name} />
  </div>
);

const ColorsStory = () => (
  <div style={{ padding: "0 15px 30px 15px" }}>
    <h1>Colors</h1>
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

export default ColorsStory;
