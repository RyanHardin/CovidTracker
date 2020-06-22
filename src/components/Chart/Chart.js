import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

const Chart = () => {
  const [daily, setDailyData] = useState({});

  useEffect(() => {
    fetchDailyData().then((res) => setDailyData(res.data));
  }, []);

  console.log(daily);

  const lineChart = daily.length ? (
    <Line
      data={{
        labels: daily.map((date) => date.reportDate),
        datasets: [
          {
            data: daily.map((day) => day.confirmed.total),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: daily.map((day) => day.deaths.total),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  return <div>{lineChart}</div>;
};

export default Chart;
