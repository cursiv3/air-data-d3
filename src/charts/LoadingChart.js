import React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Label,
  Legend
} from "recharts";

const LoadingChart = () => {
  return (
    <ResponsiveContainer width="100%" height="60%" style={{ zIndex: 1 }}>
      <LineChart>
        <CartesianGrid strokeDasharray="3 3" />
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
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LoadingChart;
