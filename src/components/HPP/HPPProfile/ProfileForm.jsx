import React, { useState } from "react";

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    title: "Dr./Mr./Ms.",
    name: "",
    specialization: "",
    gender: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="profile-form">
      <h1>Hello Dr. Adi taygi! Let's build your dedicated profile.</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <div className="name-input flex-row">
            <input
              type="text"
              name="title"
              className="input-field title-field ms-0"
              value={formData.title}
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
            <label>
              <input
                type="radio"
                name="gender"
                className="input-radio"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                className="input-radio"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />{" "}
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                className="input-radio"
                value="Other"
                checked={formData.gender === "Other"}
                onChange={handleChange}
              />{" "}
              Other
            </label>
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
