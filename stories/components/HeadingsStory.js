import React from "react";
import { colors } from "../../src";

const HeadingsStory = () => (
  <div style={{ padding: "0 15px 30px 15px" }}>
    <h1 style={{ marginBottom: 0 }}>Headings</h1>
    <p
      style={{
        color: colors.gray,
        fontStyle: "italic",
        marginTop: 0
      }}
    >
      Circular Bold
    </p>
    <hr />
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
  </div>
);

export default HeadingsStory;
