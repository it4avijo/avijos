import React, { useState } from "react";
import CarrerNav from "../../components/Navbar/CarrerNav";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";

const ReveiwSubmit = () => {
  return (
    <>
      <CarrerNav />
      <Hero />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4" >
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
          <Link
            className="d-flex align-items-center justify-between"
            to="/VoluntaryEqual"
          >
            Voluntary Equal Employment
            <br /> Opportunity Self-Identification
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
            to="/VoluntarySelf"
          >
            Voluntary Self-Identification of Military Status{" "}
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
          <Link className="btn-active" to="/ReveiwSubmit">
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
        <h2 className="text-start"> Review application and forms</h2>

        <p>Required fields</p>
      </div>

      <p className="text-start">
        Please review each section of the application and its accompanying forms
        to ensure that the information is correct. Once you're ready, click
        Submit to finalize this portion of the application process.
      </p>
      <p className="text-start">
        To help us track our progress with these initiatives and provide
        information on them to you we encourage you to disclose your status as
        ex-military, a member of the Reserve Forces of your country or a
        military spouse. Providing this information is completely voluntary and
        refusing to do so will not subject you to any adverse treatment.
      </p>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title className="text-start d-flex justify-between align-items-center">
            Contact information <FaEdit />
          </Card.Title>
          <Card.Text className="text-start">
            <strong>Name</strong>
            <br />
            Your name
          </Card.Text>
          <Card.Text className="text-start">
            <strong>Email address</strong>
            <br />
            example@gmail.com
          </Card.Text>
          <Card.Text className="text-start">
            <strong>Phone number</strong>
            <br />
            775784745567
          </Card.Text>
          <Card.Text className="text-start">
            <strong>Address</strong>
            <br />
            Enter your address here
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title className="text-start d-flex justify-between align-items-center">
            General Questions <FaEdit />
          </Card.Title>
          <Card.Text className="text-start">
            <strong>Preferred start date</strong>
            <br />
            2024-06-04
          </Card.Text>
          <Button>Show all answers</Button>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title className="text-start d-flex justify-between align-items-center">
            Education <FaEdit />
          </Card.Title>
          <Card.Text className="text-start">
            Tell in about your educational history, starting with your highest
            level of education and including any ongoing studies.
          </Card.Text>
          <Button>Show all answers</Button>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title className="text-start d-flex justify-between align-items-center">
            Work Eligibility <FaEdit />
          </Card.Title>
          <Card.Text className="text-start">
            Please provide all information required. A partially filled
            application will not be accepted for review. Avijo.in, and its
            subsidiaries (Avijo) are equal opportunity employers, do not
            discriminate, and comply with all applicable nondiscrimination laws
            and regulations.
          </Card.Text>
          <Button>Show all answers</Button>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body className="d-flex justify-between">
          <Card.Title className="d-flex align-items-center gap-3 justify-start">
            <div>
              {" "}
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.1897 11.7668L47.8756 10.4527L38.6994 1.27545L38.6984 1.27448L37.954 0.530069C37.6112 0.188276 37.1565 0 36.6727 0H8.65151C7.50544 0 6.27344 0.884414 6.27344 2.8251V37.6552V53.6219V54.069C6.27344 54.8771 7.08544 55.664 8.04613 55.9121C8.09537 55.9257 8.14268 55.944 8.19289 55.9537C8.34351 55.9836 8.49702 56 8.65151 56H47.3436C47.4981 56 47.6516 55.9836 47.8023 55.9537C47.8525 55.944 47.8998 55.9257 47.949 55.9121C48.9097 55.664 49.7217 54.8771 49.7217 54.069V53.6219V37.6552V13.496C49.7217 12.7554 49.6319 12.208 49.1897 11.7668ZM38.1355 3.44207L46.2796 11.5862H38.1355V3.44207ZM8.65151 54.069C8.58295 54.069 8.52116 54.0448 8.46033 54.0217C8.31068 53.9502 8.20447 53.7996 8.20447 53.6219V39.5862H47.7907V53.6219C47.7907 53.7996 47.6845 53.9502 47.5348 54.0217C47.474 54.0448 47.4122 54.069 47.3436 54.069H8.65151ZM8.20447 37.6552V2.8251C8.20447 2.61559 8.23633 1.93103 8.65151 1.93103H36.2605C36.2286 2.05269 36.2045 2.17821 36.2045 2.30855V13.5172H47.4122C47.5425 13.5172 47.6681 13.4931 47.7897 13.4612C47.7897 13.4757 47.7907 13.4815 47.7907 13.496V37.6552H8.20447Z"
                  fill="#8D8D8D"
                />
                <path
                  d="M21.8517 47.2146C22.1771 46.7212 22.3403 46.1235 22.3403 45.4197C22.3403 44.9533 22.2409 44.5333 22.0429 44.1587C21.845 43.7841 21.5853 43.4655 21.2637 43.2019C20.9422 42.9383 20.5792 42.7394 20.1746 42.6081C19.7691 42.4758 19.3597 42.4102 18.9475 42.4102H16.1484V52.1387H17.7329V48.6271C18.0582 48.6271 18.316 48.6271 18.5053 48.6271C18.6945 48.6271 18.8355 48.6271 18.9282 48.6271C19.0209 48.6271 19.0884 48.6252 19.1329 48.6204C19.1763 48.6155 19.212 48.6136 19.2381 48.6136L21.0726 52.1377H22.7487L20.5309 48.3095C21.0861 48.0729 21.5254 47.708 21.8517 47.2146ZM19.7527 47.3671C19.5586 47.4328 19.3655 47.4666 19.1715 47.4666H17.7329V43.6122H18.9204C19.325 43.6122 19.6504 43.676 19.8975 43.8034C20.1437 43.9308 20.3349 44.0892 20.472 44.2784C20.6091 44.4677 20.698 44.6656 20.7424 44.8722C20.7858 45.0788 20.808 45.2613 20.808 45.4197C20.808 45.8155 20.7588 46.1477 20.6632 46.4161C20.5657 46.6845 20.4392 46.8931 20.2809 47.0427C20.1225 47.1924 19.9458 47.3005 19.7527 47.3671Z"
                  fill="#8D8D8D"
                />
                <path
                  d="M24.3438 43.4925H27.248V52.1387H28.845V43.4925H31.7493V42.4102H24.3438V43.4925Z"
                  fill="#8D8D8D"
                />
                <path
                  d="M33.6797 52.1387H35.2902V47.7562H39.356V46.6739H35.2902V43.6113H39.7644V42.4102H33.6797V52.1387Z"
                  fill="#8D8D8D"
                />
                <path
                  d="M13.028 13.517H18.8211C19.3551 13.517 19.7866 13.0844 19.7866 12.5515C19.7866 12.0185 19.3551 11.5859 18.8211 11.5859H13.028C12.4941 11.5859 12.0625 12.0185 12.0625 12.5515C12.0625 13.0844 12.4941 13.517 13.028 13.517Z"
                  fill="#8D8D8D"
                />
                <path
                  d="M13.028 18.3451H21.7177C22.2516 18.3451 22.6832 17.9125 22.6832 17.3796C22.6832 16.8466 22.2516 16.4141 21.7177 16.4141H13.028C12.4941 16.4141 12.0625 16.8466 12.0625 17.3796C12.0625 17.9125 12.4941 18.3451 13.028 18.3451Z"
                  fill="#8D8D8D"
                />
                <path
                  d="M25.5905 18.3447C25.8416 18.3447 26.0926 18.2385 26.276 18.0647C26.4498 17.8813 26.556 17.6303 26.556 17.3792C26.556 17.1282 26.4498 16.8772 26.276 16.6937C25.9091 16.3365 25.2719 16.3365 24.905 16.6937C24.7302 16.8772 24.625 17.1185 24.625 17.3792C24.625 17.6399 24.7302 17.8813 24.905 18.0647C25.0875 18.2385 25.3395 18.3447 25.5905 18.3447Z"
                  fill="#8D8D8D"
                />
                <path
                  d="M29.4499 18.3451H37.174C37.708 18.3451 38.1395 17.9125 38.1395 17.3796C38.1395 16.8466 37.708 16.4141 37.174 16.4141H29.4499C28.916 16.4141 28.4844 16.8466 28.4844 17.3796C28.4844 17.9125 28.916 18.3451 29.4499 18.3451Z"
                  fill="#8D8D8D"
                />
                <path
                  d="M12.3425 31.1761C12.1677 31.3596 12.0625 31.601 12.0625 31.8617C12.0625 32.1223 12.1677 32.3637 12.3425 32.5472C12.525 32.721 12.7664 32.8272 13.028 32.8272C13.2887 32.8272 13.5301 32.721 13.7135 32.5472C13.8873 32.3637 13.9935 32.1127 13.9935 31.8617C13.9935 31.6106 13.8873 31.3596 13.7135 31.1761C13.3563 30.8189 12.6997 30.8189 12.3425 31.1761Z"
                  fill="#8D8D8D"
                />
                <path
                  d="M24.6115 30.8965H16.8874C16.3535 30.8965 15.9219 31.329 15.9219 31.862C15.9219 32.395 16.3535 32.8275 16.8874 32.8275H24.6115C25.1455 32.8275 25.577 32.395 25.577 31.862C25.577 31.329 25.1455 30.8965 24.6115 30.8965Z"
                  fill="#8D8D8D"
                />
                <path
                  d="M42.9591 16.4141H41.028C40.4941 16.4141 40.0625 16.8466 40.0625 17.3796C40.0625 17.9125 40.4941 18.3451 41.028 18.3451H42.9591C43.493 18.3451 43.9246 17.9125 43.9246 17.3796C43.9246 16.8466 43.493 16.4141 42.9591 16.4141Z"
                  fill="#8D8D8D"
                />
                <path
                  d="M13.028 23.1713H34.2694C34.8033 23.1713 35.2349 22.7387 35.2349 22.2058C35.2349 21.6728 34.8033 21.2402 34.2694 21.2402H13.028C12.4941 21.2402 12.0625 21.6728 12.0625 22.2058C12.0625 22.7387 12.4941 23.1713 13.028 23.1713Z"
                  fill="#8D8D8D"
                />
                <path
                  d="M42.9617 21.2402H37.1686C36.6347 21.2402 36.2031 21.6728 36.2031 22.2058C36.2031 22.7387 36.6347 23.1713 37.1686 23.1713H42.9617C43.4957 23.1713 43.9273 22.7387 43.9273 22.2058C43.9273 21.6728 43.4957 21.2402 42.9617 21.2402Z"
                  fill="#8D8D8D"
                />
                <path
                  d="M13.028 27.9994H16.8901C17.424 27.9994 17.8556 27.5668 17.8556 27.0339C17.8556 26.5009 17.424 26.0684 16.8901 26.0684H13.028C12.4941 26.0684 12.0625 26.5009 12.0625 27.0339C12.0625 27.5668 12.4941 27.9994 13.028 27.9994Z"
                  fill="#8D8D8D"
                />
                <path
                  d="M30.4098 26.0684H20.7546C20.2206 26.0684 19.7891 26.5009 19.7891 27.0339C19.7891 27.5668 20.2206 27.9994 20.7546 27.9994H30.4098C30.9437 27.9994 31.3753 27.5668 31.3753 27.0339C31.3753 26.5009 30.9437 26.0684 30.4098 26.0684Z"
                  fill="#8D8D8D"
                />
                <path
                  d="M42.9677 26.0684H34.278C33.7441 26.0684 33.3125 26.5009 33.3125 27.0339C33.3125 27.5668 33.7441 27.9994 34.278 27.9994H42.9677C43.5016 27.9994 43.9332 27.5668 43.9332 27.0339C43.9332 26.5009 43.5016 26.0684 42.9677 26.0684Z"
                  fill="#8D8D8D"
                />
              </svg>{" "}
            </div>
            <div>
              {`Download ${"Ajay"}`}
              <Card.Text className="text-start">Uploaded: Just now</Card.Text>
            </div>
          </Card.Title>
          <Button className="px-5">Replace</Button>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title className="text-start d-flex justify-between align-items-center">
            Acknowledge the following to continue <FaEdit />
          </Card.Title>
          <Card.Text className="text-start">
            <ul>
              <li>
                Info provided in support of this application, including but not
                limited to your resume or CV and the above information, is true
                and correct.
              </li>
              <li>
                False statements or material omissions of any kind during the
                hiring process may result in denial of employment or discharge.
              </li>
              <li>
                Nothing contained in this employment application or interview
                process is intended to create an employment contract between
                Amazon and you and that no representation or promise regarding
                the duration or the termination of employment with Amazon is
                authorized or binding unless contained in a written document
                signed by an officer of Amazon.
              </li>
            </ul>
          </Card.Text>
          <Button>Show all answers</Button>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title className="text-start d-flex justify-between align-items-center">
            Voluntary Equal Employment Opportunity. Self-Identification
          </Card.Title>
          <Card.Text className="text-start">
            As an Equal Opportunity Employer, Amazon does not use this
            information in its hiring decisions, so whether or not you choose to
            identify gender will not affect your application in any way.
          </Card.Text>
          <Button>Show all answers</Button>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title className="text-start d-flex justify-between align-items-center">
            Voluntary Self-Identification of Military Status <FaEdit />
          </Card.Title>
          <Card.Text className="text-start">
            At Avijo, we actively hire ex-military (serving or former) members
            of your country's Armed Forces, serving members of your country's
            Reserve Forces and military spouses in a wide variety of careers to
            allow them to apply their knowledge, skills, and leadership
            abilities to influence change, on behalf of our customers across the
            globe. Amazon operates a number of programs tailored to our military
            community.
            <br />
            <br />
            To help us track progress with these initiatives and provide
            information on them to you we encourage you to disclose your status
            as ex-military, a member of the Reserve Forces of your country or a
            military spouse. Providing this information is completely voluntary
            and refusing to do so will not subject you to any adverse treatment.
          </Card.Text>
          <Button>Show all answers</Button>
        </Card.Body>
      </Card>

      <Button variant="primary" className="mt-3">
        Submit Application
      </Button>
    </div>
  );
};

export default ReveiwSubmit;
