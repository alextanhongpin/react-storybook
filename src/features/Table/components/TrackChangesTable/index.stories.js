import { TrackChangesTable } from "./index";

export default {
  title: "Table/TrackChangesTable",
  component: TrackChangesTable,
};

const Template = (args) => <TrackChangesTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  curr: [
    { id: 1, name: "john", age: 10, married: true },
    { id: 2, name: "jane", age: 30, married: false },
  ],
  next: [
    { id: 1, name: "jane", age: 20, married: false },
    { id: 2, name: "jane", age: 20, married: false },
  ],
};
