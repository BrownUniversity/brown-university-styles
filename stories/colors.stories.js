import React from "react";
import { storiesOf } from "@storybook/react";
import ColorPaletteStory from "./components/ColorPaletteStory";

storiesOf("colors", module).add("color palette", () => <ColorPaletteStory />);
