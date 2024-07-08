import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../../firebase"; // Import the auth and provider from your firebase.js
import { signInWithPopup } from "firebase/auth";
const UserLogin = () => {
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        if (result.operationType === "signIn") {
          const userData = {
            displayName: result.user.displayName,
            email: result.user.email,
            photoURL: result.user.photoURL,
          };
          navigate("/carrer/sign-up", { state: userData });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div className="bg-color2"></div>
      <div className="w-100 min-vh-100 pop">
        <div className="container userLogin d-flex flex-column justify-content-center align-items-center flex-grow-1">
          <div className="row w-100 justify-content-center">
            <div className="col-md-4">
              <div className="card p-4 shadow-sm">
                <h3 className="text-center mb-4">
                  Use your avijo.in or Google account
                </h3>
                <p className="text-center">
                  Only your name and email address are shared with avijo.jobs
                </p>
                <div className="d-grid gap-2">
                  <button className="btn d-flex justify-center align-items-center py-3 btn-primary mb-2">
                    <FaFacebook className="me-2" /> Log In with Facebook
                  </button>
                  <button
                    className="btn d-flex justify-center align-items-center py-3 btn-light border mb-4"
                    onClick={handleGoogleLogin}
                  >
                    <svg
                      width="24"
                      className="me-2"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="24" height="24" fill="white" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23.04 12.2605C23.04 11.445 22.9668 10.6609 22.8309 9.9082H12V14.3566H18.1891C17.9225 15.7941 17.1123 17.0121 15.8943 17.8275V20.713H19.6109C21.7855 18.7109 23.04 15.7627 23.04 12.2605Z"
                        fill="#4285F4"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.0034 23.5005C15.1084 23.5005 17.7116 22.4708 19.6143 20.7144L15.8977 17.829C14.8679 18.519 13.5507 18.9267 12.0034 18.9267C9.00815 18.9267 6.47293 16.9037 5.56861 14.1855H1.72656V17.1651C3.61884 20.9235 7.50793 23.5005 12.0034 23.5005Z"
                        fill="#34A853"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.56523 14.1855C5.33523 13.4955 5.20455 12.7584 5.20455 12.0005C5.20455 11.2425 5.33523 10.5055 5.56523 9.81548V6.83594H1.72318C0.944318 8.38844 0.5 10.1448 0.5 12.0005C0.5 13.8562 0.944318 15.6125 1.72318 17.165L5.56523 14.1855Z"
                        fill="#FBBC05"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.0034 5.07386C13.6918 5.07386 15.2077 5.65409 16.3995 6.79364L19.6979 3.49523C17.7063 1.63955 15.1032 0.5 12.0034 0.5C7.50793 0.5 3.61884 3.07705 1.72656 6.83545L5.56861 9.815C6.47293 7.09682 9.00815 5.07386 12.0034 5.07386Z"
                        fill="#EA4335"
                      />
                    </svg>
                    Log In with Google
                  </button>
                  <div className="text-center mb-3">Or</div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your Email"
                    />
                  </div>
                  <Link to="/carrer/sign-up" className="btn btn-secondary py-3">
                    Continue
                  </Link>
                </div>
                <div className="text-center mt-3 d-flex flex-row gap-2 justify-center">
                  <span>Don't have an avijo.in account? </span>
                  <a href="#">Create one!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer-user container mt-3">
          <p>
            avijo is committed to a diverse and inclusive workplace, avijo is an
            equal opportunity employer and does not discriminate on the basis of
            race, national origin, gender, gender identity, sexual orientation,
            protected veteran status, disability, age, or other legally
            protected status. For individuals with disabilities who would like
            to request an accommodation, please visit{" "}
            <a href="https://www.avijo.jobs/en/disability/us">
              https://www.avijo.jobs/en/disability/us
            </a>
            . We know that you care how we use information about you and we
            appreciate your trust in us to do that carefully and sensibly.
            Please consult our{" "}
            <a href="https://www.avijo.jobs/privacy-notice">Privacy Notice</a>{" "}
            to know more about how we collect, use and transfer the personal
            data of our candidates.
          </p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#" className="text-decoration-none">
                Privacy Notice
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="text-decoration-none">
                Impressum
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="text-decoration-none">
                Disability accommodations
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="text-decoration-none">
                Diversity and Inclusion
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="text-decoration-none">
                © 1996–2024, avijo.in, Inc or its affiliates
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default UserLogin;
