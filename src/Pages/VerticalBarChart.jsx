import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { exportToPPT } from "../Helpers/exportToPPT";

const data = [
  {
    name: "Apple",
    value: 10,
  },
  {
    name: "Orange",
    value: 15,
  },
  {
    name: "Banana",
    value: 25,
  },
  {
    name: "Grape",
    value: 30,
  },
  {
    name: "Mango",
    value: 28,
  },
];
const slideHeaderForPPT = "Vertical Bar Chart";
const fileNameForPPT = "Vertical Bar Chart.pptx";

export default class VerticalBarChart extends PureComponent {
  render() {
    return (
      <div className="vertical-bar-chart">
        <div className="export-button">
          <button
            type="button"
            className="button"
            onClick={exportToPPT(slideHeaderForPPT, data, fileNameForPPT)}
          >
            Export PPT
          </button>
        </div>
        <BarChart
          width={700}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 80]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="apple" fill="#ed7d31" />
          <Bar dataKey="orange" fill="#4473c5" />
          <Bar dataKey="banana" fill="#70ad46" />
          <Bar dataKey="grape" fill="#843c0c" />
          <Bar dataKey="mango" fill="#843c0c" />
        </BarChart>
      </div>
    );
  }
}
