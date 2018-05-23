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

class Areachart extends React.Component {
  render() {
    var fill;
    switch (this.props.focus) {
      case "Multnomah":
        fill = "black";
        break;
      case "Washington":
        fill = "orange";
        break;
      case "Marion":
        fill = "red";
        break;
      case "Yamhill":
        fill = "blue";
        break;
      case "Clackamas":
        fill = "green";
        break;
      default:
        break;
    }
    return (
      <ResponsiveContainer width="100%" height="60%">
        <AreaChart
          data={this.props.data}
          className="modal-area-chart"
          margin={{ bottom: 20 }}
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
          <Tooltip offset={50} />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default Areachart;
