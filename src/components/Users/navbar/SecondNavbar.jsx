import React from "react";
import { Link } from "react-router-dom";

const SecondNavbar = () => {
  return (
    <div>
      <div className="container">
        <div className="row border border-top-0 py-3 text-center bg-white">
          <div className="col-md-12 secondLinkmain ">
            <Link to="#">Medicine</Link>
            <Link to="#">Lab test</Link>
            <Link to="#">Health Care</Link>
            <Link to="#">Health Vlogs</Link>
            <Link to="#">Offers</Link>
            <Link to="#">Stores</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondNavbar;
