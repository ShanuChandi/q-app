import React from "react";
import { GoChevronRight } from "react-icons/go";
import SubjectCard from "./SubjectCard";

function HomeLowerSection() {
  const Subjects = ["physics", "chemistry", "biology"];

  return (
    <div className=" w-screen  p-4 md:grid gap-4 grid-cols-2 ">
      {Subjects.map((item) => (
        <SubjectCard>{item.toString().toUpperCase()}</SubjectCard>
      ))}
    </div>
  );
}

export default HomeLowerSection;
