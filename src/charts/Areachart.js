import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer
} from "recharts";
import "./charts.css";
import { formatData, formatLabel } from "../helpers/chartHelpers";

class Areachart extends React.Component {
  render() {
    var fill;
    switch (this.props.focus) {
      case "Multnomah":
        fill = "#2c0e14";
        break;
      case "Washington":
        fill = "#ef8354";
        break;
      case "Marion":
        fill = "#df3b57";
        break;
      case "Yamhill":
        fill = "#8a6951";
        break;
      case "Clackamas":
        fill = "#0f7173";
        break;
      default:
        break;
    }
    return (
      <ResponsiveContainer
        width="95%"
        height="60%"
        className="area-chart-parent"
      >
        <AreaChart
          data={this.props.data}
          className="modal-area-chart"
          margin={{ bottom: 20, left: 25, right: 25 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Area
            dataKey={this.props.focus}
            type="monotone"
            stroke={fill}
            fill={fill}
            activeDot={{ r: 8 }}
          />
          <XAxis dataKey="year" />
          <YAxis
            domain={[0, 4.5]}
            ticks={[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5]}
          />
          <Legend
            payload={[
              { value: "washington" },
              { value: "washington" },
              { value: "washington" },
              { value: "washington" },
              { value: "washington" }
            ]}
            iconSize={0}
            wrapperStyle={{ opacity: 0 }}
            verticalAlign="top"
          />
          <Tooltip
            offset={50}
            formatter={formatData}
            labelFormatter={formatLabel}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default Areachart;
