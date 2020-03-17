import { addParameters, configure } from "@storybook/react";
import { version } from "../package.json";

/*
  customize name and disable addons panel
*/
addParameters({
  options: {
    name: `Brown University Styles ${version}`
  }
});

/*
  automatically import all files ending in `*.stories.js` from `stories` directory
*/
const req = require.context("../stories", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
