import React, { useState } from "react";
import CarrerNav from "../../components/Navbar/CarrerNav";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const VoluntaryEqual = () => {
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
            <a href="https://www.avijo.jobs/en/disability/us" >
              https://www.avijo.jobs/en/disability/us
            </a>
            . We know that you care how we use information about you and we
            appreciate your trust in us to do that carefully and sensibly.
            Please consult our{" "}
            <a href="https://www.avijo.jobs/privacy-notice" >Privacy Notice</a>{" "}
            to know more about how we collect, use and transfer the personal
            data of our candidates.
          </p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#" className="text-decoration-none" >
                Privacy Notice
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="text-decoration-none" >
                Impressum
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="text-decoration-none" >
                Disability accommodations
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="text-decoration-none" >
                Diversity and Inclusion
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="text-decoration-none" >
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
        <div className="userRegister bg-gray-50">
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
          <Link
            to="/carrer/sign-up"
            className="d-flex align-items-center justify-between"
          >
            My progress{" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="20" rx="10" fill="#39D2C0" />
              <path
                d="M15.142 5.49414L7.84458 12.7906L4.85724 9.8029L4 10.6617L7.84458 14.5061L16 6.3516L15.142 5.49414Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link
            className="d-flex align-items-center justify-between"
            to="/carrer/Generalquestions"
          >
            General questions
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="20" rx="10" fill="#39D2C0" />
              <path
                d="M15.142 5.49414L7.84458 12.7906L4.85724 9.8029L4 10.6617L7.84458 14.5061L16 6.3516L15.142 5.49414Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link
            className="d-flex align-items-center justify-between"
            to="/carrers/Education"
          >
            Education
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="20" rx="10" fill="#39D2C0" />
              <path
                d="M15.142 5.49414L7.84458 12.7906L4.85724 9.8029L4 10.6617L7.84458 14.5061L16 6.3516L15.142 5.49414Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link
            className="d-flex align-items-center justify-between"
            to="/WorkEligibilty"
          >
            Work Eligibilty
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="20" rx="10" fill="#39D2C0" />
              <path
                d="M15.142 5.49414L7.84458 12.7906L4.85724 9.8029L4 10.6617L7.84458 14.5061L16 6.3516L15.142 5.49414Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link
            className="d-flex align-items-center justify-between"
            to="/Resume"
          >
            Resume
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="20" rx="10" fill="#39D2C0" />
              <path
                d="M15.142 5.49414L7.84458 12.7906L4.85724 9.8029L4 10.6617L7.84458 14.5061L16 6.3516L15.142 5.49414Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link
            className="d-flex align-items-center justify-between"
            to="/Acknowledge"
          >
            Acknowledge{" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="20" rx="10" fill="#39D2C0" />
              <path
                d="M15.142 5.49414L7.84458 12.7906L4.85724 9.8029L4 10.6617L7.84458 14.5061L16 6.3516L15.142 5.49414Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link className="btn-active" to="/VoluntaryEqual">
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
  const [checked, setChecked] = useState(false);

  const handleCheck = () => setChecked(!checked);
  return (
    <div className="border contact-main py-4 px-4 rounded-3xl">
      <div className="d-flex justify-between align-items-center mb-3">
        <h2 className="text-start">
          {" "}
          Voluntary Equal Employment Opportunity
          <br /> Self-Identification
        </h2>

        <p>Required fields</p>
      </div>
      <p className="text-start">
        As an Equal Opportunity Employer, Amazon does not use this information
        in its hiring decisions, so whether or not you choose to identify gender
        will not affect your application in any way.
      </p>

      <Form>
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={12}>
            What is your gender?
          </Form.Label>
          <Col sm={12}>
            <Form.Check type="radio" label="Female" name="gender" id="female" />
            <Form.Check type="radio" label="Male" name="gender" id="male" />
            <Form.Check
              type="radio"
              label="I choose not to self-identify"
              name="gender"
              id="selfIdentify"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mt-3">
          <Form.Label as="legend" column sm={12}>
            Do you identify as Aboriginal, Torres Strait Islander, Māori or
            Pacific Islander? (Please select all that apply)
          </Form.Label>
          <Col sm={12}>
            <Form.Check type="checkbox" label="Aboriginal" id="aboriginal" />
            <Form.Check
              type="checkbox"
              label="Torres Strait Islander"
              id="torresStraitIslander"
            />
            <Form.Check type="checkbox" label="Māori" id="maori" />
            <Form.Check
              type="checkbox"
              label="Pacific Islander (including Persons having origins in Samoa, Tonga, Fiji, Vanuatu, Papua New Guinea, Tuvalu or other Pacific Islands)"
              id="pacificIslander"
            />
            <Form.Check type="checkbox" label="No" id="no" />
            <Form.Check
              type="checkbox"
              label="Prefer not to disclose"
              id="preferNotToDisclose"
            />
          </Col>
        </Form.Group>
      </Form>

      <Button variant="primary" className="mt-3">
        Continue
      </Button>
    </div>
  );
};

export default VoluntaryEqual;
