import { Layer } from "./index";

export default {
  title: "Sorter/Layer",
  component: Layer,
};

const Template = (args) => <Layer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: ["apple", "orange", "banana"],
};
