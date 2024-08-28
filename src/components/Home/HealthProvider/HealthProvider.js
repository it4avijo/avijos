import React from "react";

import image from "../image/download.jpg";

import "./HealthProvider.css";
import { Link } from "react-router-dom";

function HealthProvider() {
  return (
    <>
      <section class="text-gray-600 body-font relative">
        <div className="container py-24 mx-auto">
          <h3 className="heading">Health Information For Providers</h3>
          <div className="row">
            {" "}
            <div className="col-md-4">
              <img src={image} alt="" className="w-100" />
            </div>
            <div className="col-md-8">
              <div className="health-left-sec ">
                <h3 className="left-heading"> For Doctors</h3>
                <p className="userApp-para">
                  Keep track of your Patient’s Health with this powerful app
                  that makes it easy to communicate with them.{" "}
                </p>
                <div className="health-para">
                  <p> ✔ Create professional profile.</p>
                  <p> ✔ Set available timings.</p>
                  <p> ✔ Real-time chat with patient. </p>
                  <p> ✔ Read patient reviews.</p>
                </div>

                <Link
                  to="/doctor/login"
                  className="health-btn text-decoration-none pt-3 ps-3"
                >
                  Learn More / Register as Doctor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HealthProvider;
