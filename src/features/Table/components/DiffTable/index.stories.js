import { DiffTable } from "./index";

export default {
  title: "Table/DiffTable",
  component: DiffTable,
};

const Template = (args) => <DiffTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  curr: { id: 1, name: "john", age: 10, married: true, hobby: "dancing" },
  next: { id: 1, name: "jane", age: 20, married: false, bio: "programming" },
};
