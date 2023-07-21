import { Tabs } from "../components/Tabs/Tabs";

export const ComponentTest = () => {
  return (
    <div>
      <Tabs items={tabsData} onChange={() => console.log("test")} />
    </div>
  );
};

const tabsData = [
  {
    id: "1",
    label: "title1",
    children: "Test 1",
  },
  {
    id: "2",
    label: "title2",
    children: "Test 2",
  },
  {
    id: "3",
    label: "t1tle3",
    children: <button>???</button>,
  },
];
