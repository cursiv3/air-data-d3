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

class Linechart extends React.Component {
  render() {
    return (
      <ResponsiveContainer width="100%" height="60%">
        <LineChart
          data={this.props.data}
          className="line-chart"
          margin={{ bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Line
            dataKey="Multnomah"
            type="monotone"
            stroke="black"
            fill="black"
            activeDot={{ r: 8 }}
            strokeWidth={2}
          />
          <Line
            dataKey="Washington"
            type="monotone"
            stroke="orange"
            fill="orange"
            strokeWidth={2}
          />
          <Line
            dataKey="Marion"
            type="monotone"
            stroke="red"
            fill="red"
            strokeWidth={2}
          />
          <Line
            dataKey="Yamhill"
            type="monotone"
            stroke="blue"
            fill="skyblue"
            strokeWidth={2}
          />
          <Line
            dataKey="Clackamas"
            type="monotone"
            stroke="green"
            fill="green"
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
          <Tooltip offset={50} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default Linechart;
