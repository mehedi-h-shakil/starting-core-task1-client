import React from "react";
import { Link } from "react-router-dom";

const ComeIn = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h4 className="text-2xl font-bold">Stock In</h4>
      <div className="w-[400px] mt-10 flex justify-between">
        <Link to="/purchased" className="btn">
          Purchased
        </Link>
        <Link to="/borrowed" className="btn">
          Borrowed
        </Link>
        <Link to="/returned" className="btn">
          Returned
        </Link>
      </div>
    </div>
  );
};

export default ComeIn;
