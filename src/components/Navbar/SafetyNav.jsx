import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Offcanvas, Nav } from "react-bootstrap";
const SafetyNav = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {" "}
      <div className="container pt-4">
        <div className="d-flex justify-between align-items-center">
          {" "}
          <div className="d-flex align-items-center gap-3">
            {" "}
            <Button variant="" onClick={handleShow} className="mb-2  about-bar">
              <svg
                width="30"
                height="30"
                viewBox="0 0 48 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.66602 3H45.3327M2.66602 19H45.3327M2.66602 35H45.3327"
                  stroke="#0097DB"
                  stroke-width="5.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
            <Link to="/" className="text-decoration-none">
              <h3 className="navbar-logo">avijo</h3>
            </Link>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <Link
              to="/safety"
              className="text-black text-decoration-none btn-about2"
            >
              About avijo
            </Link>

            <Link
              to="/safety"
              className="text-black text-decoration-none btn-about2"
            >
              Guides & help
            </Link>

            <Link
              to="/safety"
              className="text-black text-decoration-none btn-about2"
            >
              Data Secuirity
            </Link>
            <Link
              to="/safety"
              className="text-black text-decoration-none btn-about2"
            >
              Careers
            </Link>
            <Link to="/" className="text-black text-decoration-none btn-about2">
              For User
            </Link>
            <Link to="/" className="text-black text-decoration-none btn-about2">
              For HSPP 
            </Link>
          </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="ms-3">avijo</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link
              className="d-flex align-items-center gap-3 navbar-link"
              href="/doctor/login"
            >
              <svg
                width="19"
                height="22"
                viewBox="0 0 19 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.79922 10.2016C3.5901 10.2016 1.79922 8.41068 1.79922 6.20156V3.00156C1.79922 2.5598 2.15746 2.20156 2.59922 2.20156H3.39922C3.84098 2.20156 4.19922 1.84332 4.19922 1.40156C4.19922 0.959803 3.84098 0.601562 3.39922 0.601562H2.59922C1.27378 0.601562 0.199219 1.67612 0.199219 3.00156V6.20156C0.201299 8.03612 1.1045 9.75276 2.61522 10.7936C4.06018 12.0675 4.92146 13.8768 4.99922 15.8016C4.99922 18.8944 7.50642 21.4016 10.5992 21.4016C13.692 21.4016 16.1992 18.8944 16.1992 15.8016V14.8896C17.9104 14.4478 18.9394 12.7024 18.4976 10.9912C18.0557 9.27996 16.3104 8.251 14.5992 8.69276C12.888 9.13468 11.8591 10.88 12.3008 12.5912C12.5919 13.7184 13.472 14.5985 14.5992 14.8896V15.8016C14.5992 18.0107 12.8083 19.8016 10.5992 19.8016C8.3901 19.8016 6.59922 18.0107 6.59922 15.8016C6.68098 13.8744 7.54834 12.0646 8.99922 10.7936C10.5039 9.74908 11.4008 8.03324 11.3992 6.20156V3.00156C11.3992 1.67612 10.3247 0.601562 8.99922 0.601562H8.19922C7.75746 0.601562 7.39922 0.959803 7.39922 1.40156C7.39922 1.84332 7.75746 2.20156 8.19922 2.20156H8.99922C9.44098 2.20156 9.79922 2.5598 9.79922 3.00156V6.20156C9.79922 8.41068 8.00834 10.2016 5.79922 10.2016ZM15.3992 13.4016C14.5155 13.4016 13.7992 12.6852 13.7992 11.8016C13.7992 10.9179 14.5155 10.2016 15.3992 10.2016C16.2829 10.2016 16.9992 10.9179 16.9992 11.8016C16.9992 12.6852 16.2829 13.4016 15.3992 13.4016Z"
                  fill="#6E6E68"
                />
              </svg>
              For Doctors
            </Nav.Link>
            <Nav.Link
              className="d-flex align-items-center gap-3 navbar-link"
              href="/pharmacy/login"
            >
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0.679688L0.71875 4.54688L0.25 4.75781V17.25H19.75V4.75781L19.2812 4.54688L10 0.679688ZM10 2.32031L18.25 5.76562V15.75H1.75V5.76562L10 2.32031ZM9.25 6.75V9H7V10.5H9.25V12.75H10.75V10.5H13V9H10.75V6.75H9.25Z"
                  fill="#6E6E68"
                />
              </svg>
              For Pharmacy
            </Nav.Link>
            <Nav.Link
              className="d-flex align-items-center gap-3 navbar-link"
              href="/lab/login"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.19922 1.5H14.8392"
                  stroke="#6E6E68"
                  stroke-width="1.344"
                  stroke-miterlimit="10"
                />
                <path
                  d="M17.6992 9.14L18.6992 6.27L12.9292 4.36V1.5H9.10924V11.33C7.99431 11.6607 6.98522 12.2771 6.18208 13.1182C5.37893 13.9593 4.80964 14.9957 4.53068 16.1247C4.25172 17.2536 4.27278 18.4359 4.59179 19.5543C4.91079 20.6726 5.51664 21.6881 6.34924 22.5H15.6892C16.5218 21.6881 17.1277 20.6726 17.4467 19.5543C17.7657 18.4359 17.7868 17.2536 17.5078 16.1247C17.2288 14.9957 16.6595 13.9593 15.8564 13.1182C15.0533 12.2771 14.0442 11.6607 12.9292 11.33V8.18L17.6992 9.14Z"
                  stroke="#6E6E68"
                  stroke-width="1.344"
                  stroke-miterlimit="10"
                />
                <path
                  d="M5.29883 14.8594H16.7488"
                  stroke="#6E6E68"
                  stroke-width="1.344"
                  stroke-miterlimit="10"
                />
                <path
                  d="M7.19922 18.6797H9.10922"
                  stroke="#6E6E68"
                  stroke-width="1.344"
                  stroke-miterlimit="10"
                />
                <path
                  d="M12.9297 17.7305H14.8397"
                  stroke="#6E6E68"
                  stroke-width="1.344"
                  stroke-miterlimit="10"
                />
              </svg>
              For Labs
            </Nav.Link>
            <Nav.Link
              className="d-flex align-items-center gap-3 navbar-link"
              href="/hpp/login"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 6H12V1C12 0.734784 11.8946 0.48043 11.7071 0.292893C11.5196 0.105357 11.2652 0 11 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V21C0 21.2652 0.105357 21.5196 0.292893 21.7071C0.48043 21.8946 0.734784 22 1 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6ZM10 12H2V10H10V12ZM10 7V8H2V6H10V7ZM2 14H10V16H2V14ZM10 2V4H2V2H10ZM2 18H10V20H2V18ZM20 20H12V8H20V20ZM15 15H13V13H15V15ZM15 19H13V17H15V19ZM19 15H17V13H19V15ZM15 11H13V9H15V11ZM19 11H17V9H19V11ZM19 19H17V17H19V19Z"
                  fill="#6E6E68"
                  stroke="#6E6E68"
                  stroke-width="0.00024"
                />
              </svg>
              For HPP Companies
            </Nav.Link>
            <Nav.Link
              className="d-flex align-items-center gap-3 navbar-link"
              href="/"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.4327 0H6.46114C6.12 0 5.84454 0.27639 5.84454 0.616599V3.12288H2.95301C2.61186 3.12288 2.33594 3.3988 2.33594 3.73948V19.932C2.33594 20.2727 2.61233 20.5486 2.95301 20.5486H16.781H19.4332C19.7743 20.5486 20.0498 20.2722 20.0498 19.932V0.617068C20.0502 0.27639 19.7734 0 19.4327 0ZM16.163 19.3145H3.56914V4.35655H16.163V19.3145ZM18.8166 19.3145H17.398V3.73995C17.398 3.39927 17.1212 3.12335 16.7824 3.12335H7.07821V1.23414H18.8171L18.8166 19.3145Z"
                  fill="#6E6E68"
                />
                <path
                  d="M6.35668 5.66797H4.35156V8.7519H6.35668V5.66797Z"
                  fill="#6E6E68"
                />
                <path
                  d="M6.35668 10.293H4.35156V13.3769H6.35668V10.293Z"
                  fill="#6E6E68"
                />
                <path
                  d="M6.35668 14.9219H4.35156V18.0053H6.35668V14.9219Z"
                  fill="#6E6E68"
                />
                <path
                  d="M9.36449 5.66797H7.35938V8.7519H9.36449V5.66797Z"
                  fill="#6E6E68"
                />
                <path
                  d="M9.36449 10.293H7.35938V13.3769H9.36449V10.293Z"
                  fill="#6E6E68"
                />
                <path
                  d="M9.36449 14.9219H7.35938V18.0053H9.36449V14.9219Z"
                  fill="#6E6E68"
                />
                <path
                  d="M12.3723 5.66797H10.3672V8.7519H12.3723V5.66797Z"
                  fill="#6E6E68"
                />
                <path
                  d="M12.3723 10.293H10.3672V13.3769H12.3723V10.293Z"
                  fill="#6E6E68"
                />
                <path
                  d="M12.3723 14.9219H10.3672V18.0053H12.3723V14.9219Z"
                  fill="#6E6E68"
                />
                <path
                  d="M15.3797 5.66797H13.375V8.7519H15.3797V5.66797Z"
                  fill="#6E6E68"
                />
                <path
                  d="M15.3797 10.293H13.375V13.3769H15.3797V10.293Z"
                  fill="#6E6E68"
                />
                <path
                  d="M15.3797 14.9219H13.375V18.0053H15.3797V14.9219Z"
                  fill="#6E6E68"
                />
                <path
                  d="M19.4323 20.7656H2.56972C2.22905 20.7656 1.95312 21.042 1.95312 21.3822C1.95312 21.7234 2.22905 21.9979 2.56972 21.9979H19.4323C19.773 21.9979 20.0494 21.7215 20.0494 21.3822C20.0499 21.042 19.773 20.7656 19.4323 20.7656Z"
                  fill="#6E6E68"
                />
              </svg>
              Visit avijo.in
            </Nav.Link>
            <button className="sidebar_btn mt-3 ms-3 mb-3">
              Download Avijo Health app
            </button>

            <Nav.Link
              className="d-flex align-items-center gap-3 navbar-link"
              href="/safety"
            >
              Safety of your data
            </Nav.Link>
            <Nav.Link
              className="d-flex align-items-center gap-3 navbar-link"
              href="mailto:cs@avijo.in"
            >
              Help
            </Nav.Link>
            <Nav.Link
              className="d-flex align-items-center gap-3 navbar-link"
              href="/contact"
            >
              Contact Us{" "}
            </Nav.Link>
            <Nav.Link
              className="d-flex align-items-center gap-3 navbar-link"
              href="/Terms-and-Conditions"
            >
              Terms of Service{" "}
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SafetyNav;
