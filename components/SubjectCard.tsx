import React, { ReactNode } from "react";
import { GoChevronRight } from "react-icons/go";

function SubjectCard({ children }: { children: ReactNode }) {
  return (
    <div className="flex  bg-purple-500 hover:bg-purple-700 w-full rounded-md h-24 mb-2 justify-between p-6 items-center">
      <h2 className="text-2xl font-normal font-mono">{children}</h2>
      <GoChevronRight size={32} />
    </div>
  );
}

export default SubjectCard;
