import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HeroImage from "../../../Assets/image/5093164.jpg";
import Swal from "sweetalert2";
import { BaseUrl } from "../../../Routes/BaseUrl";

const HeroSection = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async () => {
    const mobileNumber = phone;
    setLoading(true); // Set loading state to true
    try {
      const response = await axios.post(BaseUrl + `/user/login`, {
        mobileNumber,
      });
      console.log("Response:", response.data);
      if (response.status === 200) {
        navigate("/user/otp-verify", { state: { mobileNumber } });
        Swal.fire({
          title: "success!",
          text: response.data.message,
          icon: "success",
          showConfirmButton: false,
          showCloseButton: false,
          timer: 3000,
        });
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      if (error?.response?.status === 404) {
        Swal.fire({
          title: "Warning!",
          text: error.response.data.message,
          icon: "warning",
          showConfirmButton: false,
          showCloseButton: false,
          timer: 3000,
        });
        navigate("/user/create-account", { state: { mobileNumber } });
      } else if (error.code === "ERR_NETWORK") {
        Swal.fire({
          title: "Error!",
          text: "API Not Working For backend",
          icon: "error",
          showConfirmButton: false,
          showCloseButton: false,
          timer: 3000,
        });
      }
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  return (
    <section>
      <div className="container pt-4 ">
        <div className="row bg-white border rounded">
          <div className="col-md-6 ps-0">
            <img src={HeroImage} alt="Logo" className="hero-w" />
          </div>
          <div className="col-md-6 pt-5 hero_left">
            <h2>Login / Create Account</h2>
            <p>
              Sign up or Sign in to access your orders, special offers, health
              tips and more!
            </p>
            <label>PHONE NUMBER</label>
            <br />
            <input
              type="text"
              className="phone-input mb-3"
              placeholder="Enter Your Mobile"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div>
              <button
                className="mt-2"
                onClick={handleSendOtp}
                disabled={loading} // Disable button when loading
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  </>
                ) : (
                  "USE OTP"
                )}
              </button>
              <div className="d-flex gap-4 mt-3 pb-2">
                <button className="btn-hero">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.8295 20.1504C21.8623 18.2741 23.035 15.5182 23.035 12.2443C23.035 11.482 22.9666 10.749 22.8395 10.0454H12.715V14.2086H18.5004C18.2463 15.5475 17.4841 16.6811 16.3407 17.4434"
                      fill="#0097DB"
                    />
                    <path
                      d="M3.11734 16.8277C4.88619 20.3361 8.51189 22.75 12.7141 22.75C15.6166 22.75 18.05 21.7922 19.8287 20.1504L16.3398 17.4434C15.3821 18.0884 14.1605 18.4793 12.7141 18.4793C9.91914 18.4793 7.54439 16.5931 6.69414 14.0522"
                      fill="#36AB53"
                    />
                    <path
                      d="M3.1182 7.18201C2.38525 8.62836 1.965 10.2604 1.965 12C1.965 13.7395 2.38525 15.3716 3.1182 16.8179L5.90345 14.6484L6.69505 14.0425C6.48005 13.3975 6.353 12.7134 6.353 12C6.353 11.2866 6.48005 10.6025 6.69505 9.95746"
                      fill="#F7C01B"
                    />
                    <path
                      d="M12.7142 5.5304C14.2974 5.5304 15.7046 6.07765 16.8285 7.13315L19.9069 4.05475C18.0403 2.3152 15.6166 1.25 12.7141 1.25C8.51189 1.25 4.88619 3.66385 3.11734 7.18205L6.69414 9.9575C7.54439 7.4166 9.91919 5.5304 12.7142 5.5304Z"
                      fill="#D5423B"
                    />
                  </svg>
                  Google
                </button>
                <button className="btn-hero">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5 2H4.5C3.39543 2 2.5 2.89543 2.5 4V20C2.5 21.1046 3.39543 22 4.5 22H20.5C21.6046 22 22.5 21.1046 22.5 20V4C22.5 2.89543 21.6046 2 20.5 2Z"
                      fill="#4B5C92"
                    />
                    <path
                      d="M10.5 15H12.5V22H14.5V15H16.5C16.7652 15 17.0196 14.8946 17.2071 14.7071C17.3946 14.5196 17.5 14.2652 17.5 14C17.5 13.7348 17.3946 13.4804 17.2071 13.2929C17.0196 13.1054 16.7652 13 16.5 13H14.5V10C14.5 9.73478 14.6054 9.48043 14.7929 9.29289C14.9804 9.10536 15.2348 9 15.5 9H17.5C17.7652 9 18.0196 8.89464 18.2071 8.70711C18.3946 8.51957 18.5 8.26522 18.5 8C18.5 7.73478 18.3946 7.48043 18.2071 7.29289C18.0196 7.10536 17.7652 7 17.5 7H15.5C14.7044 7 13.9413 7.31607 13.3787 7.87868C12.8161 8.44129 12.5 9.20435 12.5 10V13H10.5C10.2348 13 9.98043 13.1054 9.79289 13.2929C9.60536 13.4804 9.5 13.7348 9.5 14C9.5 14.2652 9.60536 14.5196 9.79289 14.7071C9.98043 14.8946 10.2348 15 10.5 15Z"
                      fill="white"
                    />
                  </svg>
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
