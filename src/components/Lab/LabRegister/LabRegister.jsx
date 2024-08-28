import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Swal from "sweetalert2";
import axios from "axios";
import { BaseUrl } from "../../../Routes/BaseUrl";

const LabRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    mobile: "",
    countryCode: "+91(IND)",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCountryCodeChange = (code) => {
    setFormData({
      ...formData,
      countryCode: code,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { fullName, email, password, mobile } = formData;

    const payload = {
      emailId: email,
      mobileNumber: `${mobile}`, // Include country code
    };

    try {
      const response = await axios.post(
        `${BaseUrl}/labAuth/labAuthCreate`,
        payload
      );
      if (response.status === 200) {
        Swal.fire("Success", "OTP Sent successfully!", "success");
        navigate("/lab/otp-verify", {
          state: {
            emailId: email,
            mobileNumber: `${mobile}`,
            fullName: fullName,
            password: password,
          },
        });
      } else {
        Swal.fire(
          "Error",
          response.data.message || "Something went wrong!",
          "error"
        );
      }
    } catch (error) {
      Swal.fire(
        "Error",
        error.response?.data?.message ||
          "Network error. Please try again later.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded border">
      <div className="bg-color">
        <h1>Lab</h1>
      </div>
      <div className="row align-content-center">
        <div className="col-md-6 doctor-left">
          <h5>
            This app is to manage the medical laboratories system, as it allows
            users to extract all the required reports from the laboratory and
            also allows them to follow up on their medical reports.
          </h5>
          <ul className="custom-list-style">
            <li>Add/Edit Lab Profile</li>
            <li>Upcoming Test Booking View</li>
            <li>Upcoming Report Pickup View</li>
            <li>Live order Tracking</li>
            <li>Upcoming Report Pickup View</li>
            <li>Upload eReport</li>
            <li>Quick Login with OTP Verification</li>
            <li>Check customer reviews</li>
            <li>Detailed insights</li>
            <li>Multi-Lingual Including RTL</li>
          </ul>
        </div>
        <div className="col-md-6 mt-5">
          <div className="width-75 join-p d-flex align-self-lg-start justify-content-between border pt-3 px-4">
            <div>
              <p>Join avijo</p>
            </div>
            <div>
              <span>
                Are you a doctor?
                <Link to="/pharmacy/otp-verify" className="ms-2">
                  Register Here
                </Link>
              </span>
            </div>
          </div>
          <form
            className="width-75 border form-doctor-right border-top-0 form-register"
            onSubmit={handleSubmit}
          >
            <div>
              <div className="d-flex flex-column">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="d-flex flex-column">
                <label>Email ID</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email ID"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="d-flex flex-column">
                <label>Create Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="d-flex flex-column">
                <label>Mobile No</label>
                <div className="d-flex align-items-end gap-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="link"
                      className="dropdown outline-primary"
                      id="dropdown-basic"
                    >
                      {formData.countryCode}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => handleCountryCodeChange("+262")}
                      >
                        +262
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleCountryCodeChange("+92")}
                      >
                        +92
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleCountryCodeChange("+1")}
                      >
                        +1
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <input
                    type="text"
                    name="mobile"
                    className="pass-res"
                    placeholder="Enter Mobile No."
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center mt-2">
                  <input type="checkbox" />
                  <label>
                    Receive relevant offers and promotional communication from
                    avijo
                  </label>
                </div>
                <label>By signing up, I agree to terms</label>
              </div>
            </div>
            <button type="submit" className="text-white" disabled={loading}>
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm text-white"
                    role="status"
                    aria-hidden="true"
                  ></span>
                </>
              ) : (
                "Register"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LabRegister;
