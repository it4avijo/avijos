import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { BaseUrl } from "../../../Routes/BaseUrl";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PharmacyResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleVerify = async () => {
    setError("");
    setLoading(true);

    if (!password) {
      setLoading(false);
      Swal.fire("Error", "Please enter Password.", "error");
      return;
    }

    if (password !== confirmPassword) {
      setLoading(false);
      Swal.fire("Error", "Passwords do not match.", "error");
      return;
    }

    const payload = {
      password,
    };

    try {
      const response = await axios.post(
        `${BaseUrl}/user/resetPassword/${id}`,
        payload
      );
      console.log(response);
      if (response.status === 200) {
        Swal.fire({
          title: "Success",
          text: response.data,
          icon: "success",
          timer: 3000,
          showConfirmButton: false,
        });
        navigate("/pharmacy/login");
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
            <div className="d-flex flex-col align-items-center gap-1">
              <div>
                {" "}
                <img src={require("../../../Assets/image/rafiki.png")}></img>
              </div>
              <div>
                {" "}
                <h3>New Password</h3>
              </div>
            </div>

            <p className="my-1">
              Your password must be atleast six characters and should include a
              combination of numbers, letters and special number of
              characters(@#$%)
            </p>
            <div className="d-flex flex-column mb-3">
              <label>Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter New Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  className="form-control"
                />
                <span
                  className="input-group-text"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: "pointer" }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div className="d-flex flex-column mb-3">
              <label>Confirm Password</label>
              <div className="input-group">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                  className="form-control"
                />
                <span
                  className="input-group-text"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{ cursor: "pointer" }}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
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
                "Reset"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PharmacyResetPassword;
