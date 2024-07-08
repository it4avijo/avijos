import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import ProfileDropdown from "./ProfileDropdown";
const ProfileNavbar = () => {
  return (
    <section className="border">
      <div className="container">
        {/* <ProfileNavbar /> */}{" "}
        <Navbar bg="white" expand="lg">
          <Navbar.Brand href="/" className="logo_profile">
            Profile
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <ProfileDropdown />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </section>
  );
};

export default ProfileNavbar;
