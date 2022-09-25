import React from "react";

export const Button: React.FC = () => {
  return (
    <button onClick={() => console.log("Clicked Button")}>
      Click me to log
    </button>
  );
};
