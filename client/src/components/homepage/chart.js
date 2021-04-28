import React from "react";
import { Line } from "react-chartjs-2";
import { Select, Tab, Tabs } from "@material-ui/core";
const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const MockData = {
  ยอดเงินบริจาคทั้งหมด: [65, 59, 80, 81, 56, 55, 40, 88, 56, 68, 78, 37],
  จำนวนครั้งที่ได้รับการบริจาคผ่านตู้ปันใจ: [
    30,
    20,
    25,
    70,
    90,
    70,
    58,
    87,
    78,
    38,
    34,
    61,
  ],
  จำนวนผู้ใช้งานเว็บปันใจ: [85, 69, 80, 41, 86, 95, 70, 98, 84, 91, 83, 28],
};

export const Color = {
  ยอดเงินบริจาคทั้งหมด: "rgb(104, 73, 13)",
  จำนวนครั้งที่ได้รับการบริจาคผ่านตู้ปันใจ: "rgb(199, 119, 27)",
  จำนวนผู้ใช้งานเว็บปันใจ: "rgb(92, 53, 8)",
};

export const DonationChart = () => {
  const [tabState, setTabState] = React.useState("data1");
  const handleTabOnChange = (event, value) => {
    setTabState(value);
  };
  const genData = () => ({
    labels: labels,
    datasets: [
      {
        label: tabState,
        data: MockData[tabState],
        borderColor: Color[tabState],
        tension: 0.2,
      },
    ],
  });

  return (
    <>
      <Tabs
        value={tabState}
        onChange={handleTabOnChange}
        indicatorColor="primary"
        color="primary"
      >
        <Tab label="ยอดเงินบริจาคทั้งหมด" value={"ยอดเงินบริจาคทั้งหมด"} />
        <Tab
          label="จำนวนครั้งที่ได้รับการบริจาคผ่านตู้ปันใจ"
          value={"จำนวนครั้งที่ได้รับการบริจาคผ่านตู้ปันใจ"}
        />
        <Tab
          label="จำนวนผู้ใช้งานเว็บปันใจ"
          value={"จำนวนผู้ใช้งานเว็บปันใจ"}
        />
      </Tabs>
      <Line data={genData()} />
    </>
  );
};
