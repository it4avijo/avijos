import React, { useState } from "react";
import CarrerNav from "../../components/Navbar/CarrerNav";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const UserRegister = () => {
  return (
    <>
      <CarrerNav />
      <Hero />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <ContactInformation />
          </div>
          <div className="col-md-8 mb-3">
            <ContactForm />
          </div>
        </div>
      </div>
      <footer className="footer-bg">
        {" "}
        <div className="footer-user container mt-3">
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
        </div>
      </footer>
    </>
  );
};
export const Hero = () => {
  return (
    <>
      <div className="bg-color2 userRegister">
        <div className="container py-5">
          <h1>Apply</h1>
          <div className="d-flex gap-3 mt-4">
            <div className="d-flex gap-2 pb-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.006 0L8.541 2.475L4.2915 2.8065L3.228 6.9315L0.1875 9.9165L2.025 13.761L1.614 18L5.493 19.764L7.902 23.277L12.006 22.137L16.11 23.277L18.519 19.764L22.398 18L21.987 13.761L23.826 9.915L20.7855 6.93L19.7205 2.805L15.474 2.475L12.006 0ZM10.506 6H13.506V10.5L12.756 13.5H11.256L10.506 10.5V6ZM12.006 15C12.4038 15 12.7854 15.158 13.0667 15.4393C13.348 15.7206 13.506 16.1022 13.506 16.5C13.506 16.8978 13.348 17.2794 13.0667 17.5607C12.7854 17.842 12.4038 18 12.006 18C11.6082 18 11.2266 17.842 10.9453 17.5607C10.664 17.2794 10.506 16.8978 10.506 16.5C10.506 16.1022 10.664 15.7206 10.9453 15.4393C11.2266 15.158 11.6082 15 12.006 15Z"
                  fill="white"
                />
              </svg>
              <span>2024 Software Development Graduate (AWS) (ID:2623486)</span>
            </div>
            <div className="d-flex gap-2 pb-3">
              <svg
                width="19"
                height="24"
                viewBox="0 0 19 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.01562 6.75C7.77287 6.75 6.76562 7.75725 6.76562 9C6.76562 10.2427 7.77287 11.25 9.01562 11.25C10.2584 11.25 11.2656 10.2427 11.2656 9C11.2656 7.75725 10.2584 6.75 9.01562 6.75ZM9.01562 12.75C6.94488 12.75 5.26562 11.0715 5.26562 9C5.26562 6.9285 6.94488 5.25 9.01562 5.25C11.0864 5.25 12.7656 6.9285 12.7656 9C12.7656 11.0715 11.0864 12.75 9.01562 12.75ZM9.01562 0C4.04537 0 0.015625 4.02975 0.015625 9C0.015625 12.7635 7.51937 24.0082 9.01562 24C10.4886 24.0082 18.0156 12.7125 18.0156 9C18.0156 4.02975 13.9859 0 9.01562 0Z"
                  fill="white"
                />
              </svg>
              <span>AU, NSW, Sydney</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const ContactInformation = () => {
  return (
    <>
      <div className="userRegister">
        <h2 className="ps-3">My progress</h2>
        <div className="d-flex flex-column">
          <Link className="btn-active" to="/carrer/sign-up">
            My progress
          </Link>
          <Link className="" to="/carrer/Generalquestions">
            General questions
          </Link>
          <Link className="" to="/carrers/Education">
            Education
          </Link>
          <Link className="" to="/WorkEligibilty">
            Work Eligibilty
          </Link>
          <Link className="" to="/Resume">
            Resume
          </Link>
          <Link className="" to="/Acknowledge">
            Acknowledge
          </Link>
          <Link className="" to="/VoluntaryEqual">
            Voluntary Equal Employment Opportunity Self-Identification
          </Link>
          <Link className="" to="/VoluntarySelf">
            Voluntary Self-Identification of Military Status
          </Link>
          <Link className="" to="/ReveiwSubmit">
            Reveiw & submit
          </Link>
        </div>
      </div>
    </>
  );
};
const ContactForm = () => {
  const location = useLocation();
  const { displayName, email, photoURL } = location.state || {};
  console.log(displayName, email, photoURL);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: displayName,
    lastName: "",
    email: email,
    mobileNo: "",
    addressNo1: "",
    addressNo2: "",
    city: "",
    zipCode: "",
    country: "",
    state: "",
  });
  const [validated, setValidated] = useState(false);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      console.log(formData);
      navigate("/carrer/Generalquestions", { state: formData });
    }
    setValidated(true);
  };
  return (
    <div className="border contact-main py-4 px-4 rounded-3xl">
      <div className="d-flex justify-between align-items-center mb-3">
        <h2>Contact information</h2> <p>Required fields</p>
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="firstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your first name.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="lastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your last name.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="mobileNo">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Enter your mobile number"
                value={formData.mobileNo}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your mobile number.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="addressNo1">
          <Form.Label>Address line 1</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter line 1 (Street address, P.O. Box, etc...)"
            value={formData.addressNo1}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="addressNo2">
          <Form.Label>Address line 2</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter line 2 (Unit, Suite, etc...)"
            value={formData.addressNo2}
            onChange={handleChange}
          />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your city.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="zipCode">
              <Form.Label>Postal/Zip code</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter postal/zip code"
                value={formData.zipCode}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your postal/zip code.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="country">
              <Form.Label>Country/Region</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your country/region"
                value={formData.country}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your country/region.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="state">
              <Form.Label>Province/State</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter province/state"
                value={formData.state}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your province/state.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit" className="py-3 mt-2">
          Save and continue
        </Button>
      </Form>
    </div>
  );
};

export default UserRegister;
