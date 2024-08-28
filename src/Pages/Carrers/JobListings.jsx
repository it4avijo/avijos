import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Accordion,
  Dropdown,
} from "react-bootstrap";
import "./JobListings.css";
import { Link } from "react-router-dom";
import CareerNav from "../../components/Navbar/CarrerNav";
import Footer from "../../components/Home/footer/Footer";

const jobListings = [
  {
    title: "Virtual Customer Service Associate - Work From Home - Davao",
    location: "Virtual, PHL",
    jobId: "SF24011672",
    postedDate: "February 8, 2024",
    Link: "Read More",
    updatedDate: "14 days ago",
    qualifications: [
      "Must have at least a year of BPO experience",
      "Minimum age: 18 years old",
      "Software Development",
      "Completed at least two years in college or Senior High Graduate",
      "High school graduate (old curriculum) with at least one (1) year customer service experience",
    ],
  },
  {
    title: "CAP Team Manager, CAP",
    location: "Virtual, PHL",
    jobId: "SF24011672",
    postedDate: "February 8, 2024",
    Link: "...Read More",
    updatedDate: "14 days ago",
    qualifications: [
      "Demonstrated ability to build, develop and handle a group of people to customer pain points",
      "Ability to support Business and provide solutions to customer pain points",
      "Ability to handle complex and ambiguous scenarios",
    ],
  },
  // Additional job listings...
];

const JobListings = () => {
  return (
    <Container fluid>
      <Row className="top-bar align-items-center pe-3">
        <CareerNav/>
        <Col md={9}>
          <h5 className="mt-4">Filter by</h5>
        </Col>
        <Col md={3} className="text-end">
          <Dropdown className="dropdown">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Sort by: Most relevant
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Most relevant</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Date</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Location</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col md={3} className="fixed-sidebar bg-light" style={{marginTop:'6%'}}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Job Type</Accordion.Header>
              <Accordion.Body>
                <Form.Check type="checkbox" label="Full Time" />
                <Form.Check type="checkbox" label="Part Time" />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Job Category</Accordion.Header>
              <Accordion.Body>
                <Form.Check type="checkbox" label="Software Development" />
                <Form.Check
                  type="checkbox"
                  label="Sales, Advertising, & Account Management"
                />
                <Form.Check
                  type="checkbox"
                  label="Operations, IT, & Support Engineering"
                />
                <Form.Check type="checkbox" label="Marketing" />
                <Form.Check type="checkbox" label="Solutions Architect" />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Country/Region</Accordion.Header>
              <Accordion.Body>
                <Form.Check type="checkbox" label="Canada" />
                <Form.Check type="checkbox" label="Japan" />
                <Form.Check type="checkbox" label="United States" />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>State/Province</Accordion.Header>
              <Accordion.Body>
                <Form.Check type="checkbox" label="Washington" />
                <Form.Check type="checkbox" label="Ontario" />
                <Form.Check type="checkbox" label="Berlin" />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>City</Accordion.Header>
              <Accordion.Body>
                <Form.Check type="checkbox" label="Seattle" />
                <Form.Check type="checkbox" label="Tokyo" />
                <Form.Check type="checkbox" label="Toronto" />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Team</Accordion.Header>
              <Accordion.Body>
                <Form.Check type="checkbox" label="Amazon Web Services" />
                <Form.Check type="checkbox" label="Subsidiaries" />
                <Form.Check type="checkbox" label="Marketplace" />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>Role Type</Accordion.Header>
              <Accordion.Body>
                <Form.Check type="checkbox" label="Individual Contributor" />
                <Form.Check type="checkbox" label="People Manager" />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>Category</Accordion.Header>
              <Accordion.Body>
                <Form.Check type="checkbox" label="Cooperate" />
                <Form.Check type="checkbox" label="Fulfillment Center" />
                <Form.Check type="checkbox" label="Remote" />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col md={9} className="content" style={{marginTop:"8%"}}>
          {jobListings.map((job, index) => (
            <Card key={index} className="mb-3 mt-4">
              <Card.Body>
                <div className="d-flex justify-between align-items-baseline">
                  <div>
                    <Card.Title style={{color:'#0095D9'}}>{job.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {job.location} | Job ID: {job.jobId}
                    </Card.Subtitle>
                  </div>
                  <div className="posted">
                    <div className="d-flex align-items-center">
                      <strong className="text-gray-400">Posted:</strong>{" "}
                      <p className="mb-0 ms-2 text-gray-400">{job.postedDate} </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <strong className="text-gray-400">Updated:</strong>
                      <p className="mb-0 ms-2 text-gray-400">{job.updatedDate}</p>
                    </div>
                  </div>
                </div>

                <Card.Text>
                  <strong>Basic qualifications:</strong>
                  <ul className="mt-2 mb-2">
                    {job.qualifications.map((qualification, idx) => (
                      <li className="mb-1" key={idx}>
                        {qualification}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/carrer/JobListings/View`}
                    className="ms-4 text-decoration-none"
                    style={{color:'#0095D9'}}
                  >
                    {job.Link}
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default JobListings;
