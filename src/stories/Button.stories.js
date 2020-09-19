import React from "react";

import { Button, ButtonSmall } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Button",
};

const ButtonSmallTemplate = (args) => <ButtonSmall {...args} />;
export const SmallButton = ButtonSmallTemplate.bind({});
SmallButton.args = {
  children: "hello world",
  size: "small",
};
