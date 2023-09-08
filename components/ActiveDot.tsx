import React from "react";

function ActiveDot({ index }) {
  return (
    <div
      style={{ top: `${64 * index + 16}px` }}
      className="w-4 h-4 transition-[top] -translate-y-1/2 -left-2 -z-10 absolute top-0 bg-primary rounded-xs rotate-45"
    />
  );
}

export default ActiveDot;
