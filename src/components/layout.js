import React from "react";
import "./layout.css";

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 1080, padding: `0 1rem` }}>
    {children}
  </div>
);
