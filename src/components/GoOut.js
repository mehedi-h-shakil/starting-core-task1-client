import React from "react";
import { Link } from "react-router-dom";

const GoOut = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h4 className="text-2xl font-bold">Stock Out</h4>
      <div className="w-[400px] mt-10 flex justify-between">
        <Link to="/stockSold" className="btn">
          Stock Sold
        </Link>
        <Link to="/stockLend" className="btn">
          Stock Lend
        </Link>
        <Link to="/stockReturned" className="btn">
          Stock Returned
        </Link>
      </div>
    </div>
  );
};

export default GoOut;
