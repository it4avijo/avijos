import React from "react";

import "./HealthInfo.css";

import image from "../image/download.jpg";
import { Link } from "react-router-dom";

function HealthInfo() {
  return (
    <>
      <section class="text-gray-600 body-font relative">
        <div className="container py-24 mx-auto">
          <h3 className="heading">Health Information Users</h3>
          <div className="row">
            <div className="col-md-8">
              <div className="health-left-sec ">
                <h3 className="left-heading"> User App </h3>
                <p className="userApp-para">
                  It helps the users in locating the best specialist around
                  them, also can order medicine, find a hospital and Lab, etc.
                </p>
                <div className="health-para">
                  <p> ✔ Find nearby doctors, hospitals, & Lab w/ map </p>
                  <p> ✔ Book appointments, video consultation with Doctor</p>
                  <p> ✔ Multi-vendor medicine and health product ordering </p>
                  <p>
                    {" "}
                    ✔ Book appointments home sample collection for Lab test
                  </p>
                </div>

                <Link
                  to="/user/login"
                  className="health-btn text-decoration-none pt-3 ps-3"
                >
                  Learn More / Register as User
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

export default HealthInfo;
