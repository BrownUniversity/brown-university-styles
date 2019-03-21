import React from "react";
import { storiesOf } from "@storybook/react";
import FontsStory from "./components/FontsStory";
import HeadingsStory from "./components/HeadingsStory";
import ParagraphsStory from "./components/ParagraphsStory";

storiesOf("typography", module)
  .add("fonts", () => <FontsStory />)
  .add("headings", () => <HeadingsStory />)
  .add("paragraphs", () => <ParagraphsStory />);
