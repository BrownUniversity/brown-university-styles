import { create } from "@storybook/theming/create";
import { addons } from "@storybook/addons";
import { version } from "../package.json";

addons.setConfig({
  theme: create({
    brandTitle: `Brown University Styles ${version}`,
  }),
});
