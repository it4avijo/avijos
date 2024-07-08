import React from "react";
import image from "../image/download.jpg";
import { Link } from "react-router-dom";

function HealthHPP() {
  return (
    <>
      <section class="text-gray-600 body-font relative">
        <div className="container py-24 mx-auto">
          {/* <h3 className="heading">Health Information HPP Company</h3> */}
          <div className="row">
            {" "}
            <div className="col-md-8">
              <div className="health-left-sec ">
                <h3 className="left-heading"> For HPP Company </h3>
                <p className="userApp-para">
                  This web app is to track B2B trade and B2C analytics,HSP
                  retailer also keep them spontaneous with the vendors,sales and
                  orders.
                </p>
                <div className="health-para">
                  <p>✓ Create Company account</p>
                  <p>✓ Add/Edit catalog</p>
                  <p>✓ Live order tracking in B2B trade</p>
                  <p>✓ Advertising on platform for B2B & B2C</p>
                </div>
                <Link
                  to="/hpp/login"
                  className="health-btn text-decoration-none pt-3 ps-3"
                >
                  Learn More / Register as HPP
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <img src={image} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HealthHPP;
