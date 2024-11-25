import React, { ReactNode } from "react";

function Titles({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen px-4 ">
      <p className="text-base font-normal font-mono">{children}</p>
    </div>
  );
}

export default Titles;
