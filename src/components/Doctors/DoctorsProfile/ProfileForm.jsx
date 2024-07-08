import React, { useState } from "react";

import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../../../Routes/BaseUrl";
const ProfileForm = () => {
  const [formData, setFormData] = useState({
    title: "Dr.",
    name: "",
    specialization: "",
    gender: "",
    city: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.specialization ||
      !formData.gender ||
      !formData.city
    ) {
      Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please fill out all required fields!",
      });
      return;
    }

    try {
      const response = await axios.post(
        BaseUrl + "/doctor/doctorProfile",
        formData
      );
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Profile Created",
          text: "Your profile has been created successfully!",
        });
        navigate("/doctor/edit-profile", { state: formData }); // Pass the formData as state if needed
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text:
          error.response?.data?.message ||
          "An error occurred while submitting your profile.",
      });
    }
  };

  return (
    <div className="profile-form">
      <h1>Hello Dr. Adi taygi! Let's build your dedicated profile.</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <div className="name-input flex-row ">
            <input
              type="text"
              name="title"
              className="input-field title-field ms-0"
              value="Dr./Mr./Ms."
              onChange={handleChange}
              disabled
            />
            <input
              type="text"
              name="name"
              className="input-field ms-0"
              placeholder="Please enter your Name "
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Specialization</label>
          <select
            name="specialization"
            className="input-field"
            value={formData.specialization}
            onChange={handleChange}
          >
            <option value="">Select Specialization</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Dermatology">Dermatology</option>
            {/* Add more specializations as needed */}
          </select>
        </div>
        <div className="form-group">
          <label>Gender</label>
          <div className="flex-row">
            <div className="d-flex flex-row">
              {" "}
              <label> Male</label>
              <input
                type="radio"
                name="gender"
                className="input-radio"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />{" "}
            </div>
            <div className="d-flex flex-row">
              {" "}
              <label> Female</label>
              <input
                type="radio"
                name="gender"
                className="input-radio"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />{" "}
            </div>
            <div className="d-flex flex-row">
              <label>Other</label>
              <input
                type="radio"
                name="gender"
                className="input-radio"
                value="Other"
                checked={formData.gender === "Other"}
                onChange={handleChange}
              />{" "}
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>City</label>
          <select
            name="city"
            className="input-field"
            value={formData.city}
            onChange={handleChange}
          >
            <option value="">Select City</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            {/* Add more cities as needed */}
          </select>
        </div>
        <button type="submit" className="submit-button">
          Continue
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
