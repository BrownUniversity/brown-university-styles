import React from "react";
import { colors } from "../../src";

const ParagraphsStory = () => (
  <div style={{ padding: "0 15px 30px 15px" }}>
    <h1 style={{ marginBottom: 0 }}>Paragraphs</h1>
    <p
      style={{
        color: colors.gray,
        fontStyle: "italic",
        marginTop: 0
      }}
    >
      Minion Pro
    </p>
    <hr />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
);

export default ParagraphsStory;
