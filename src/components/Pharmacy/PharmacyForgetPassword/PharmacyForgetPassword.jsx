import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { BaseUrl } from "../../../Routes/BaseUrl";

const PharmacyForgetPassword = () => {
  const [emailId, setEmailOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleEmailOtpChange = (e) => {
    setEmailOtp(e.target.value);
  };
  const handleVerify = async () => {
    setError("");
    setLoading(true);

    if (!emailId) {
      setLoading(false);
      Swal.fire("Error", "Please enter Email-Id.", "error");
      return;
    }

    const payload = {
      emailId,
    };

    try {
      const response = await axios.post(
        `${BaseUrl}/user/forgetPassword`,
        payload
      );
      console.log(response);
      if (response.status === 200) {
        Swal.fire("Success", response.data, "success", 3000);
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
            <div>
              <div>
                {" "}
                <img src={require("../../../Assets/image/rafiki.png")}></img>
              </div>
              <div>
                {" "}
                <h3>Forgot password</h3>
              </div>
            </div>

            <p className="my-3">
              Enter your email for the verification proccess,we will send 4
              digits code to your email.
            </p>
            <div className="d-flex flex-column mb-3">
              <label>Enter Email </label>
              <input
                type="text"
                placeholder="Enter Email"
                value={emailId}
                onChange={handleEmailOtpChange}
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
                "Send Mail"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PharmacyForgetPassword;
