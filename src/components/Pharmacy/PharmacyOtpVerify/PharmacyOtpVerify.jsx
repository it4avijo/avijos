import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { BaseUrl } from "../../../Routes/BaseUrl";

const PharmacyOtpVerify = () => {
  const [emailOtp, setEmailOtp] = useState("");
  const [mobileOtp, setMobileOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const { emailId, mobileNumber, fullName, password } = location.state || {};
  const handleEmailOtpChange = (e) => {
    setEmailOtp(e.target.value);
  };

  const handleMobileOtpChange = (e) => {
    setMobileOtp(e.target.value);
  };
  const handleVerify = async () => {
    setError("");
    setLoading(true);

    if (!emailOtp || !mobileOtp) {
      setLoading(false);
      Swal.fire("Error", "Please enter both OTPs.", "error");
      return;
    }

    const payload = {
      emailId,
      emailOTP: emailOtp,
      mobileNumber,
      fullName,
      password,
      mobileOTP: mobileOtp,
    };

    try {
      const response = await axios.post(
        `${BaseUrl}/pharmacy/pharmacyVerify`,
        payload
      );
      if (response.status === 200) {
        Swal.fire("Success", "Verification successful!", "success");
        navigate("/pharmacy/edit-profile");
      } else {
        setError(response.data.message || "Verification failed.");
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Network error. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="container border py-3">
        <div className="row justify-content-center">
          <form
            className="width-50 border form-doctor-right form-register"
            onSubmit={(e) => {
              e.preventDefault();
              handleVerify();
            }}
          >
            <h3>Two Step Verification</h3>
            <span className="mt-3">Verify Email address</span>
            <p className="my-3">
              To verify your email, we sent you a code on your email address.
            </p>
            <div className="d-flex flex-column mb-3">
              <label>Enter Email OTP</label>
              <input
                type="text"
                placeholder="Enter OTP"
                value={emailOtp}
                onChange={handleEmailOtpChange}
                required
              />
            </div>
            <span className="mt-3">Verify Mobile Number</span>
            <p className="my-3">
              To verify your number, we sent you an SMS on your phone.
            </p>
            <div className="d-flex flex-column mb-3">
              <label>Enter Mobile number OTP</label>
              <input
                type="text"
                placeholder="Enter OTP"
                value={mobileOtp}
                onChange={handleMobileOtpChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm text-white"
                    role="status"
                    aria-hidden="true"
                  ></span>
                </>
              ) : (
                "Verify"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PharmacyOtpVerify;
