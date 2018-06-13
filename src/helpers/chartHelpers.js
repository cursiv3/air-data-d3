import React from "react";
import { ResponsiveContainer } from "recharts";
export const formatData = value => {
  return `${parseFloat(value).toFixed(2)}%`;
};

export const formatLabel = label => {
  return (
    <div style={{ maxWidth: "250px" }}>
      <strong>{label}</strong>
      <br />
      Percentage of days with PM2.5 above
      <br />
      Ambient Air Quality Standards
      <hr />
    </div>
  );
};
