import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { BaseUrl } from "../../../Routes/BaseUrl";

const LabLogin = () => {
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
        BaseUrl + "/labAuth/labAuthLogin",
        payload
      );
      if (response.status === 200) {
        navigate("/Verified");
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
        <h1>Lab</h1>
      </div>
      <div className="row align-content-center">
        <div className="col-md-6 doctor-left">
          <h4>
            This app is to manage the medical laboratories system, as it allows
            users to extract all the required reports from the laboratory and
            also allows them to follow up on their medical reports.
          </h4>
          <ul className="custom-list-style">
            <li>Create professional profile</li>
            <li>Set available timings</li>
            <li>Accept/Reject appointment</li>
            <li>Video consultation</li>
            <li>Real-time chat with patients</li>
            <li>Read patient reviews</li>
            <li>Check customer reviews</li>
            <li>Easy login with OTP verification</li>
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
                  <div>
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label>Remember me for 30 days</label>
                  </div>
                  <div>
                    <Link to="/">Forgot password?</Link>
                  </div>
                </div>
                <div>
                  <div>
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
            <button type="submit" disabled={loading} className="text-white">
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

export default LabLogin;
