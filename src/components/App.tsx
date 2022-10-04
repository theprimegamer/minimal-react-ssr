import React from "react";
import { Button } from "src/components/Button";

export const App: React.FC = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-green-500 text-center text-2xl font-bold">
        Hello World from SSR (Apple)ication!
      </h1>
      <Button></Button>
    </div>
  );
};
