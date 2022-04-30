import React from "react";

export default function Starfield(props) {
  const randRange = (min, max) => Math.random() * (max - min) + min;

  return (
    <div className="starfield">
      <svg
        viewBox={`0 0 ${props.width} ${props.height}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", zIndex: -1 }}
        preserveAspectRatio="none"
      >
        {[...Array(props.stars)].map(() => (
          <circle
            fill="#fff"
            cx={randRange(0, props.width)}
            cy={randRange(0, props.height)}
            r={randRange(0.05, 0.5)}
            style={{
              animation: `twinkle ${randRange(2, 10)}s ease-in-out infinite`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
