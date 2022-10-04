import React from "react";

export const App: React.FC = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-blue-500 text-center text-4xl font-bold my-3">
        Hello World from SSR (Apple)ication!
      </h1>
      <button
        className="border-blue-700 border-solid border-2 m-auto p-2"
        onClick={() => console.log("Clicked button!")}
      >
        Click me to log!
      </button>
    </div>
  );
};
