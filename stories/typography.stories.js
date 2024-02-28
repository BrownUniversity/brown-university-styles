import React from "react";
import FontsStory from "./components/FontsStory";
import HeadingsStory from "./components/HeadingsStory";
import ParagraphsStory from "./components/ParagraphsStory";

export default {
  title: "typography",
};

export const Fonts = () => <FontsStory />;

Fonts.story = {
  name: "fonts",
};

export const Headings = () => <HeadingsStory />;

Headings.story = {
  name: "headings",
};

export const Paragraphs = () => <ParagraphsStory />;

Paragraphs.story = {
  name: "paragraphs",
};
