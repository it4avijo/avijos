import React from "react";
import { Navbar, Nav } from "react-bootstrap";
const ProfileEditNav = () => {
  return (
    <section className="border navbar-shadow">
      <div className="container">
        {/* <ProfileNavbar /> */}{" "}
        <Navbar bg="white" expand="lg">
          <Navbar.Brand href="/" className="logo_profile">
            Create Profile
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">{/* <ProfileDropdown /> */}</Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </section>
  );
};

export default ProfileEditNav;
