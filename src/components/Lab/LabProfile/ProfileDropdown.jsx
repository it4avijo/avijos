import React from "react";
import { Dropdown, Image } from "react-bootstrap";

const ProfileDropdown = () => {
  return (
    <Dropdown align="end">
      <Dropdown.Toggle variant="link" id="dropdown-basic" className="btn-dropdown">
        <Image
          src="https://via.placeholder.com/40"
          roundedCircle
          alt="Profile"
        />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/profile">Profile</Dropdown.Item>
        <Dropdown.Item href="/settings">Settings</Dropdown.Item>
        <Dropdown.Item href="/logout">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
