import { DictTable } from "./index";

export default {
  title: "Table/DictTable",
  component: DictTable,
};

const Template = (args) => <DictTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: {
    foo: "bar",
    age: 10,
    fizz: { buzz: true, pi: 3.142, list: [1, 2, 3] },
    array: ["hello", "world"],
  },
};

export const CustomRenderer = Template.bind({});
CustomRenderer.args = {
  value: {
    foo: "bar",
    age: 10,
    fizz: { buzz: true, pi: 3.142, list: [1, 2, 3] },
    array: ["hello", "world"],
    url: "https://www.google.com",
  },
  renderer: function (key, value) {
    switch (key) {
      case "age":
        return `${value} years old`;
      case "url":
        return <a href={value}>{value}</a>;
      default:
        return value;
    }
  },
};
