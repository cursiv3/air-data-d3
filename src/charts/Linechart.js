import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label
} from "recharts";
import "./charts.css";
import { formatData, formatLabel } from "../helpers/chartHelpers";

class Linechart extends React.Component {
  render() {
    console.log(this.props.data);
    return (
      <ResponsiveContainer
        width="95%"
        height="60%"
        className="linechart-parent"
      >
        <LineChart
          data={this.props.data}
          className="line-chart"
          margin={{ bottom: 20, left: 25, right: 25 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            style={{ backgroundColor: "white" }}
          />
          <Line
            dataKey="Multnomah"
            type="monotone"
            stroke="#2c0e14"
            fill="#2c0e14"
            activeDot={{ r: 8 }}
            strokeWidth={2}
          />
          <Line
            dataKey="Washington"
            type="monotone"
            stroke="#ef8354"
            fill="#ef8354"
            strokeWidth={2}
          />
          <Line
            dataKey="Marion"
            type="monotone"
            stroke="#df3b57"
            fill="#df3b57"
            strokeWidth={2}
          />
          <Line
            dataKey="Yamhill"
            type="monotone"
            stroke="#8a6951"
            fill="#8a6951"
            strokeWidth={2}
          />
          <Line
            dataKey="Clackamas"
            type="monotone"
            stroke="#0f7173"
            fill="#0f7173"
            strokeWidth={2}
          />
          <XAxis dataKey="year">
            <Label value="Year" position="bottom" />
          </XAxis>
          <YAxis
            domain={[0, 4.5]}
            ticks={[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5]}
          >
            <Label
              value="% days with PM2.5 > NAAQS"
              position="insideBottomLeft"
              angle={-90}
              offset={20}
            />
          </YAxis>
          <Legend verticalAlign="top" />
          <Tooltip
            offset={50}
            formatter={formatData}
            labelFormatter={formatLabel}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default Linechart;
