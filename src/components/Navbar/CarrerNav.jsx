import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Offcanvas, Nav } from "react-bootstrap";

const CareerNav = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="w-full border-1">
      <div className="w-full">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-3">
            <Button
              variant=""
              onClick={handleShow}
              className="mb-2 text-white about-bar"
            >
              <svg
                width="28"
                height="22"
                viewBox="0 0 28 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2H26M2 11H26M2 20H26"
                  stroke="black"
                  strokeWidth="3.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Link to="/" className="text-decoration-none">
              <h3 className="text-black">avijobs</h3>
            </Link>
            <Link to="/carrer/JobListings" className="text-black text-decoration-none">
              Careers
            </Link>
            <Link to="/" className="text-black text-decoration-none">
              Locations
            </Link>
            <Link to="/" className="text-black text-decoration-none">
              Professions
            </Link>
            <Link to="/" className="text-black text-decoration-none">
              Benefits
            </Link>
            <div className="relative">
              <Button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-black flex items-center gap-2 border-none"
                style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row' }}
              >
                <span color="black">Culture</span>
                <svg
                  className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''} mt-2`}
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg">
                  <li><a className="block px-4 py-2 text-gray-800 hover:bg-gray-100" href="#">Action</a></li>
                  <li><a className="block px-4 py-2 text-gray-800 hover:bg-gray-100" href="#">Another action</a></li>
                  <li><hr className="border-gray-200 my-1" /></li>
                  <li><a className="block px-4 py-2 text-gray-800 hover:bg-gray-100" href="#">Something else here</a></li>
                </ul>
              )}
            </div>
            <Link to="/" className="text-white text-decoration-none">
              Hiring Tips
            </Link>
          </div>
          <div className="flex gap-3 items-center">
            <img src={require('../../Assets/image/search.png')} alt="search" width="32" height="32"/>
            <button className="bg-[#0095D9] h-7 w-20 br-5 rounded-3">
              <span className="text-sm text-white">Login</span>
            </button>
          </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="ms-3">avijo</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav defaultActiveKey="/home" className="flex flex-col">
            <Nav.Link className="flex items-center gap-3 navbar-link" href="/doctor/login">
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
            <Nav.Link className="flex items-center gap-3 navbar-link" href="/pharmacy/login">
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
            <Nav.Link className="flex items-center gap-3 navbar-link" href="/lab/login">
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
                  strokeWidth="1.344"
                  strokeMiterlimit="10"
                />
                <path
                  d="M17.6992 9.14L18.6992 6.27L12.9292 4.36V1.5H9.10924V11.33C7.99431 11.6607 6.98522 12.2771 6.18208 13.1182C5.37893 13.9593 4.80964 14.9957 4.53068 16.1247C4.25172 17.2536 4.27278 18.4359 4.59179 19.5543C4.91079 20.6726 5.51664 21.6881 6.34924 22.5H15.6892C16.5218 21.6881 17.1277 20.6726 17.4467 19.5543C17.7657 18.4359 17.7868 17.2536 17.5078 16.1247C17.2288 14.9957 16.6595 13.9593 15.8564 13.1182C15.0533 12.2771 14.0442 11.6607 12.9292 11.33V10.45L15.6392 11.34L17.6992 9.14Z"
                  stroke="#6E6E68"
                  strokeWidth="1.344"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              For Lab
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CareerNav;
