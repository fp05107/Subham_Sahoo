import React, { useState } from "react";

function Text({ text }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      style={{
        color: isHovered ? "#cf2030" : "black",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </span>
  );
}

export default Text;
