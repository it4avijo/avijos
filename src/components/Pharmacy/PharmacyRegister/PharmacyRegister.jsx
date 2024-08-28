import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Swal from "sweetalert2";
import axios from "axios";
import { BaseUrl } from "../../../Routes/BaseUrl";

const PharmacyRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    mobile: "",
    countryCode: "+91(IND)",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
    setError(null);

    const { fullName, email, password, mobile, countryCode } = formData;

    const payload = {
      emailId: email,
      mobileNumber: `${mobile}`, // Use country code if needed
    };

    try {
      const response = await axios.post(
        `${BaseUrl}/pharmacy/pharmacyCreate`,
        payload
      );
      if (response.status === 200) {
        Swal.fire("Success", "OTP Sent successfully!", "success");
        navigate("/pharmacy/otp-verify", {
          state: {
            emailId: email,
            mobileNumber: `${mobile}`,
            fullName: fullName,
            password: password,
          }, // Pass data to the next page
        });
      } else {
        setError(response.data.message || "Something went wrong!");
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
        <h1>Pharmacy</h1>
      </div>
      <div className="row align-content-center">
        <div className="col-md-6 doctor-left">
          <h4>
            Medical/pharma store app to sell online also keep them spontaneous
            with the customer, sales, and order.
          </h4>
          <ul className="custom-list-style">
            <li>Create Shop Profile</li>
            <li>Add/Edit products</li>
            <li>New/Past order view</li>
            <li>Live order Tracking</li>
            <li>Real-time chat with delivery person</li>
            <li>eWallet integration</li>
            <li>Send earnings to the bank</li>
            <li>Check customer reviews</li>
            <li>Detailed insights</li>
            <li>Multi-lingual including RTL</li>
          </ul>
        </div>
        <div className="col-md-6 mt-5">
          <div className="width-75 join-p d-flex align-self-lg-start justify-content-between border pt-3 px-4">
            <div>
              <p>Join avijo</p>
            </div>
            <div>
              <span>
                Are you a pharmacy?
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

export default PharmacyRegister;
