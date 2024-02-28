export default {
  stories: ["../stories/*.stories.@(js)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y"],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {
    autodocs: true,
  },
};
