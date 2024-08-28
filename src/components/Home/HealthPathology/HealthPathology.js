import React from "react";

import image from "../image/download.jpg";

import "./HealthPathology.css";
import { Link } from "react-router-dom";

function HealthPathology() {
  return (
    <>
      <section class="text-gray-600 body-font relative">
        <div className="container py-24 mx-auto">
          {/* <h3 className="heading">Health Information Pathology Lab</h3> */}
          <div className="row">
            {" "}
            <div className="col-md-4">
              <img src={image} alt="" className="w-100" />
            </div>
            <div className="col-md-8">
              <div className="health-leftSec ">
                <h3 className="left-heading"> For Pathology Lab</h3>
                <p className="userApp-para">
                  This app is to manage the medical laboratories system, as it
                  allows users to extract all the required reports from the
                  laboratory and also allows them to follow up on their medical
                  reports.
                </p>
                <div className="health-para">
                  <p> ✔ Add/Edit Lab Profile. </p>
                  <p> ✔ Upcoming Test Booking View.</p>
                  <p> ✔ Upcoming Report Pickup View . </p>
                  <p> ✔ Upload eReport.</p>
                  <p> ✔ eWallet Integration.</p>
                </div>

                <Link
                  to="/lab/login"
                  className="health-btn text-decoration-none pt-3 ps-3"
                >
                  Learn More / Register as Lab
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HealthPathology;
