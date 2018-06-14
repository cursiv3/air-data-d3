import React from "react";

export const formatData = value => {
  return `${parseFloat(value).toFixed(2)}%`;
};

export const formatLabel = label => {
  return (
    <span style={{ maxWidth: "250px" }}>
      Percentage of days with PM2.5 above
      <br />
      Ambient Air Quality Standards
      <br />
      <strong>{label}</strong>
    </span>
  );
};
