import React from "react";
import { storiesOf } from "@storybook/react";
import ColorPalleteStory from "./components/ColorPalleteStory";

storiesOf("colors", module).add("color palette", () => <ColorPalleteStory />);
