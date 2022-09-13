import PriceHistory from "./index";

export default {
  title: "Price/PriceHistory",
  component: PriceHistory,
};

const Template = (args) => <PriceHistory {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: loadData(),
};

function loadData() {
  const now = new Date();
  return [
    {
      from: new Date(2022, 0, 1),
      to: new Date(2022, 1, 1),
      amount: 2000,
      currency: "SGD",
      status: "EXPIRED",
    },
    {
      from: new Date(2022, 1, 1),
      to: new Date(2022, 2, 1),
      amount: 1500,
      currency: "SGD",
      status: "EXPIRED",
    },
    {
      from: new Date(2022, 2, 1),
      to: new Date(2022, 3, 1),
      amount: 1250,
      currency: "SGD",
      status: "EXPIRED",
    },
    {
      from: new Date(),
      to: new Date(now.getFullYear(), now.getMonth() + 1, now.getDate()),
      amount: 2350,
      currency: "SGD",
      status: "ACTIVE",
    },
    {
      from: new Date(now.getFullYear(), now.getMonth() + 1, now.getDate()),
      to: new Date(now.getFullYear(), now.getMonth() + 2, now.getDate()),
      amount: 2240,
      currency: "SGD",
      status: "PENDING",
    },
  ];
}
