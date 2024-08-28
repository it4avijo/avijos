import React from "react";

import image from "../image/download.jpg";

import "./HealthPharmacy.css";
import { Link } from "react-router-dom";

function HealthPharmacy() {
  return (
    <>
      <section class="text-gray-600 body-font relative">
        <div className="container py-24 mx-auto">
          <div className="row">
            {" "}
            <div className="col-md-8">
              <div className="health-left-sec ">
                <h3 className="left-heading"> For Pharmacy </h3>
                <p className="userApp-para">
                  Medical/pharma store app to sell online also keep them
                  spontaneous with the customer, sales, and order.
                </p>
                <div className="health-para">
                  <p> ✔ Create shop profile. </p>
                  <p> ✔ Add/Edit products. </p>
                  <p> ✔ Live order tracking.</p>
                  <p> ✔ eWallet integration.</p>
                </div>

                <Link
                  to="pharmacy/login"
                  className="health-btn text-decoration-none pt-3 ps-3"
                >
                  Learn More / Register as Pharmacy
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

export default HealthPharmacy;
