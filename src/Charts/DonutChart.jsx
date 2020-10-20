import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
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
const slideHeaderForPPT = "Donut Chart";

const fileNameForPPT = "Donut Chart.pptx";

const handleExport = () => {
  exportToPPT(slideHeaderForPPT, data, fileNameForPPT);
};

export default class DonutChart extends PureComponent {
  render() {
    return (
      <div className="donut-chart">
        <h3> Donut Chart</h3>
        <div className="export-button">
          <button type="button" className="button" onClick={handleExport}>
            Export PPT
          </button>
        </div>
        <AreaChart
          width={750}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 80]} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </div>
    );
  }
}
