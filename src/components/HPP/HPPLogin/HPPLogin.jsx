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
        BaseUrl + "/hppAuth/hppAuthLogin",
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
      <div className="row align-content-center">
        <div className="col-md-6 doctor-left">
          <img src={require("../../../Assets/image/image 38.png")}></img>
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

export default LabLogin;
