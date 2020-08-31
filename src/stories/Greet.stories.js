import React from "react";
import { Greet } from "./Greet";

export default {
  title: "Example/Greet",
  component: Greet,
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    message: {
      //name: "message",
      type: { name: "string", required: true },
      // This is a markdown message.
      description: "the __message__ to display",
      table: {
        type: {
          summary: "string",
          detail: "alphanumeric only string",
        },
        defaultValue: {
          summary: "hello",
        },
      },
      control: "text",
    },
    backgroundColor: { control: "color" },
  },
  parameters: {
    backgrounds: {
      values: [
        { name: "red", value: "#ff0000" },
        { name: "green", value: "#00ff00" },
        { name: "blue", value: "#0000ff" },
      ],
    },
    docs: {
      description: {
        component: "some component __markdown__",
      },
    },
  },
  // NOTE: This shows errors when previewing code.
  //decorators: [
  //(Story) => (
  //<div style={{ margin: "3rem" }}>
  //<Story />
  //</div>
  //),
  //],
};

export const Template = (args) => <Greet {...args} />;

export const Primary = Template.bind({});
Primary.parameters = {
  title: "this is amazing",
};
Primary.args = {
  message: "hello",
};

export const Secondary = Template.bind({});
Secondary.args = {
  message: "world",
};
