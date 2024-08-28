import React, { useState } from "react";
import CarrerNav from "../../components/Navbar/CarrerNav";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Resume = () => {
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
          <Link className="btn-active" to="/Resume">
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
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setFileUploaded(true);
    }
  };

  const handleReplaceFile = () => {
    setFileUploaded(false);
    setFileName("");
  };
  return (
    <div className="border contact-main py-4 px-4 rounded-3xl">
      <div className="d-flex justify-between align-items-center mb-3">
        <h2>Upload Resume</h2>

        <p>Required fields</p>
      </div>
      {fileUploaded ? (
        <>
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
                  {`Download ${fileName}`}
                  <Card.Text className="text-start">
                    Uploaded: Just now
                  </Card.Text>
                </div>
              </Card.Title>
              <Button className="px-5" onClick={handleReplaceFile}>
                Replace
              </Button>
            </Card.Body>
          </Card>
          <p className="text-start">Don't have your resume ready?</p>
          <p className="text-start">
            No worries - your progress is saved and you can upload it later.
            You'll get an email reminder from avijo to complete your
            application.
          </p>
          <Button variant="primary" type="submit">
            Continue
          </Button>
        </>
      ) : (
        <>
          {" "}
          <p className="text-start">
            We'd like to get to know you, please upload your resume. The
            following formats are accepted: pdf file (5 MB or smaller in size).
          </p>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title className="d-flex align-items-center gap-2">
                <div>
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M46.0125 46.0126H38.0115V33.4801C38.0115 30.4921 37.9575 26.6446 33.849 26.6446C29.682 26.6446 29.043 29.9026 29.043 33.2596V46.0126H21.042V20.2411H28.7235V23.7646H28.8315C30.3975 21.0916 33.3135 19.4896 36.4095 19.6021C44.5185 19.6021 46.017 24.9346 46.017 31.8781L46.0125 46.0081V46.0126ZM12.015 16.7176C10.7859 16.7117 9.60882 16.2211 8.73931 15.3524C7.8698 14.4838 7.3781 13.3071 7.371 12.0781C7.371 9.53107 9.468 7.43407 12.015 7.43407C14.562 7.43407 16.6545 9.53107 16.659 12.0781C16.659 14.6251 14.562 16.7176 12.015 16.7176ZM16.0155 46.0126H8.0055V20.2411H16.0155V46.0126ZM49.995 6.68845e-05H3.9825C2.93918 -0.00599294 1.93562 0.399935 1.1899 1.12964C0.44419 1.85934 0.016581 2.85386 0 3.89707V50.1031C0.016581 51.1463 0.44419 52.1408 1.1899 52.8705C1.93562 53.6002 2.93918 54.0061 3.9825 54.0001H49.9995C51.0452 54.0085 52.052 53.604 52.8011 52.8742C53.5502 52.1445 53.9811 51.1487 54 50.1031V3.89257C53.9811 2.84779 53.5499 1.85285 52.8006 1.12457C52.0512 0.396286 51.0444 -0.00629214 49.9995 0.00456656L49.995 6.68845e-05Z"
                      fill="#0A66C2"
                    />
                  </svg>
                </div>
                <div>
                  Use LinkedIn
                  <Card.Text>
                    No need to upload a file, just link your profile and we'll
                    handle the rest
                  </Card.Text>
                </div>
              </Card.Title>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title className="d-flex align-items-center gap-3">
                <div>
                  <svg
                    width="64"
                    height="72"
                    viewBox="0 0 64 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 0C11.525 0 9.5 2.025 9.5 4.5V67.5C9.5 69.975 11.525 72 14 72H59C61.475 72 63.5 69.975 63.5 67.5V18L45.5 0H14Z"
                      fill="#E2E5E7"
                    />
                    <path
                      d="M50 18H63.5L45.5 0V13.5C45.5 15.975 47.525 18 50 18Z"
                      fill="#B0B7BD"
                    />
                    <path d="M63.5 31.5L50 18H63.5V31.5Z" fill="#CAD1D8" />
                    <path
                      d="M54.5 58.5C54.5 59.7375 53.4875 60.75 52.25 60.75H2.75C1.5125 60.75 0.5 59.7375 0.5 58.5V36C0.5 34.7625 1.5125 33.75 2.75 33.75H52.25C53.4875 33.75 54.5 34.7625 54.5 36V58.5Z"
                      fill="#F15642"
                    />
                    <path
                      d="M10.3047 42.6307C10.3047 42.0367 10.7727 41.3887 11.5264 41.3887H15.6822C18.0222 41.3887 20.1282 42.9547 20.1282 45.9562C20.1282 48.8002 18.0222 50.3842 15.6822 50.3842H12.6784V52.7602C12.6784 53.5522 12.1744 53.9999 11.5264 53.9999C10.9324 53.9999 10.3047 53.5522 10.3047 52.7602V42.6307ZM12.6784 43.6544V48.1364H15.6822C16.8882 48.1364 17.8422 47.0722 17.8422 45.9562C17.8422 44.6984 16.8882 43.6544 15.6822 43.6544H12.6784Z"
                      fill="white"
                    />
                    <path
                      d="M23.6483 54C23.0543 54 22.4062 53.676 22.4062 52.8863V42.6668C22.4062 42.021 23.0543 41.5508 23.6483 41.5508H27.768C35.9895 41.5508 35.8095 54 27.93 54H23.6483ZM24.7822 43.7468V51.8063H27.768C32.6257 51.8063 32.8417 43.7468 27.768 43.7468H24.7822Z"
                      fill="white"
                    />
                    <path
                      d="M38.7285 43.8911V46.7508H43.3163C43.9643 46.7508 44.6123 47.3988 44.6123 48.0266C44.6123 48.6206 43.9643 49.1066 43.3163 49.1066H38.7285V52.8843C38.7285 53.5143 38.2808 53.9981 37.6508 53.9981C36.8588 53.9981 36.375 53.5143 36.375 52.8843V42.6648C36.375 42.0191 36.861 41.5488 37.6508 41.5488H43.9665C44.7585 41.5488 45.2265 42.0191 45.2265 42.6648C45.2265 43.2408 44.7585 43.8888 43.9665 43.8888H38.7285V43.8911Z"
                      fill="white"
                    />
                    <path
                      d="M52.25 60.75H9.5V63H52.25C53.4875 63 54.5 61.9875 54.5 60.75V58.5C54.5 59.7375 53.4875 60.75 52.25 60.75Z"
                      fill="#CAD1D8"
                    />
                  </svg>
                </div>
                <div>
                  {" "}
                  Browse device{" "}
                  <Card.Text className="mt-2">
                    Please use a .pdf file smaller than 5MB
                  </Card.Text>
                </div>
              </Card.Title>

              <Form.Control
                type="file"
                onChange={handleFileChange}
                accept="application/pdf"
              />
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title className="d-flex align-items-center gap-2">
                <div>
                  {" "}
                  <svg
                    width="72"
                    height="43"
                    viewBox="0 0 72 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M65.0773 26.96C68.9992 27.5725 72 30.9649 72 35.0588C72 38.2567 70.1676 41.0253 67.4964 42.3764C67.2965 42.4778 67.0918 42.5712 66.8825 42.656H25.7821C20.5643 42.6234 16.3439 38.3831 16.3439 33.1573C16.3439 27.9112 20.5965 23.6582 25.8426 23.6582C26.1067 23.6582 26.3671 23.672 26.6253 23.693C26.6109 23.4517 26.6011 23.2094 26.6011 22.9646C26.6011 16.3986 31.924 11.0757 38.4899 11.0757C43.1029 11.0757 47.0994 13.7049 49.0705 17.5446C50.7008 16.4754 52.6494 15.8513 54.7451 15.8513C60.4679 15.8513 65.107 20.4904 65.107 26.2132C65.107 26.4645 65.0947 26.713 65.0773 26.96ZM24.5623 21.6259C18.7652 22.2652 14.2414 27.1926 14.2414 33.1573C14.2414 35.5858 14.9976 37.8452 16.2853 39.7135H9.83664C4.40399 39.7135 0 35.3095 0 29.8768C0 24.6843 4.02405 20.4346 9.1231 20.0684C8.95287 19.2973 8.86051 18.4968 8.86051 17.6747C8.86051 11.5575 13.8194 6.59893 19.9362 6.59893C22.2293 6.59893 24.3594 7.29544 26.1266 8.48889C28.6363 3.45756 33.8306 0 39.8352 0C47.767 0 54.2902 6.03063 55.0708 13.7567C54.9621 13.7538 54.8542 13.7488 54.7451 13.7488C53.0395 13.7488 51.3698 14.0947 49.8239 14.7604C47.2161 11.1464 43.0388 8.97315 38.4899 8.97315C31.2267 8.97315 25.2385 14.5369 24.5623 21.6259Z"
                      fill="#4F8AD8"
                    />
                  </svg>
                </div>
                <div>
                  {" "}
                  Use OneDrive{" "}
                  <Card.Text>Please use a .pdf file smaller than 5MB</Card.Text>
                </div>
              </Card.Title>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title className="d-flex align-items-center gap-2">
                <div>
                  {" "}
                  <svg
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1506_3592)">
                      <path
                        d="M65.8125 42.0469H15.75V58.9219H56.25"
                        fill="#4587F4"
                      />
                      <path
                        d="M26.2969 7.17188L6.1875 42.0469L15.75 58.9219L45.7031 7.17188"
                        fill="#1DA261"
                      />
                      <path
                        d="M45.7031 7.17188L65.8125 42.0469H46.5469L26.2969 7.17188"
                        fill="#FFCF48"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1506_3592">
                        <rect width="72" height="72" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  {" "}
                  Use Google Drive
                  <Card.Text>Please use a .pdf file smaller than 5MB</Card.Text>
                </div>
              </Card.Title>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title className="d-flex align-items-center gap-2">
                <div>
                  {" "}
                  <svg
                    width="68"
                    height="60"
                    viewBox="0 0 68 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M50.875 46.2242L35.125 37.2242C34.45 36.7742 33.55 36.7742 32.875 37.2242L17.125 46.2242C16.45 46.6742 16 47.3492 16 48.2492C16 49.1492 16.45 49.8242 17.125 50.2742L32.875 59.2742C33.325 59.4992 33.55 59.4992 34 59.4992C34.45 59.4992 34.675 59.4992 35.125 59.2742L50.875 50.2742C51.55 49.8242 52 49.1492 52 48.2492C52 47.3492 51.55 46.6742 50.875 46.2242Z"
                      fill="#0061FF"
                    />
                    <path
                      d="M66.625 28.2242L54.25 21.2492L66.625 14.2742C67.3 13.8242 67.75 13.1492 67.75 12.2492C67.75 11.3492 67.3 10.6742 66.625 10.2242L50.875 1.22422C50.2 0.774219 49.3 0.774219 48.625 1.22422L34 9.54922L19.375 1.22422C18.7 0.999219 17.8 0.999219 17.125 1.22422L1.375 10.2242C0.7 10.6742 0.25 11.3492 0.25 12.2492C0.25 13.1492 0.7 13.8242 1.375 14.2742L13.75 21.2492L1.375 28.2242C0.7 28.6742 0.25 29.3492 0.25 30.2492C0.25 31.1492 0.7 31.8242 1.375 32.2742L17.125 41.2742C17.575 41.4992 17.8 41.4992 18.25 41.4992C18.7 41.4992 18.925 41.4992 19.375 41.2742L34 32.9492L48.625 41.2742C49.075 41.4992 49.3 41.4992 49.75 41.4992C50.2 41.4992 50.425 41.4992 50.875 41.2742L66.625 32.2742C67.3 31.8242 67.75 31.1492 67.75 30.2492C67.75 29.3492 67.3 28.6742 66.625 28.2242ZM34 14.9492L45.25 21.2492L34 27.5492L22.75 21.2492L34 14.9492Z"
                      fill="#0061FF"
                    />
                  </svg>
                </div>
                <div>
                  Use Dropbox
                  <Card.Text>Please use a .pdf file smaller than 5MB</Card.Text>
                </div>
              </Card.Title>
            </Card.Body>
          </Card>{" "}
          <p className="text-start">Don't have your resume ready?</p>
          <p className="text-start">
            No worries - your progress is saved and you can upload it later.
            You'll get an email reminder from avijo to complete your
            application.
          </p>
        </>
      )}
    </div>
  );
};

export default Resume;
