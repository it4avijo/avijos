import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { BaseUrl } from "../../../Routes/BaseUrl";

const PharmacyLogin = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [loginWithOtp, setLoginWithOtp] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate("");

  const handleLogin = async () => {
    setLoading(true);
    const payload = {
      emailOrMobile: emailId,
      password,
    };

    try {
      const response = await axios.post(
        BaseUrl + "/pharmacy/pharmacyLogin",
        payload
      );
      if (response.status === 200) {
        navigate("/Verfied");
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have logged in successfully!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text:
          error.response?.data?.message ||
          "An error occurred while logging in. Please try again.",
      });
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
        <div className="col-md-6">
          <form
            className="width-75 border rounded form-doctor-right"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div>
              <div className="d-flex flex-column">
                <label>Mobile Number / Email ID</label>
                <input
                  type="text"
                  placeholder="Mobile Number / Email ID"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </div>
              <div className="d-flex flex-column">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <div className="d-flex justify-content-between mt-3">
                  <div className="d-flex">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label>Remember me for 30 days</label>
                  </div>
                  <div>
                    <Link to="/pharmacy/forget-password">Forgot password?</Link>
                  </div>
                </div>
                <div>
                  <div className="d-flex">
                    <input
                      type="checkbox"
                      checked={loginWithOtp}
                      onChange={(e) => setLoginWithOtp(e.target.checked)}
                    />
                    <label>Login with OTP instead of password.</label>
                  </div>
                </div>
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
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PharmacyLogin;
