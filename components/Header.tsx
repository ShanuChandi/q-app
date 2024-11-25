import React from "react";

function Header() {
  return (
    <div className="fixed shadow-lg  justify-between items-center p-4 w-full h-24 bg-orange-500 rounded-md flex flex-row ">
      <div>
        <p className="font-normal text-sm font-mono text-white">
          Hi,Nice to see you !
        </p>
        <p className="font-bold text-xl font-mono text-white">
          Shanuka Chandimal
        </p>
      </div>

      <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
        <p className="text-black text-lg font-bold font-mono">SC</p>
      </div>
    </div>
  );
}

export default Header;
