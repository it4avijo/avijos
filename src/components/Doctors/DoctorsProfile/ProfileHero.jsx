import React from "react";
import ProfileImage from "../../../Assets/image/manage.jpg";
import ProfileForm from "./ProfileForm";
const ProfileHero = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-4">
          <ProfileForm />
        </div>
        <div className="col-md-8 mt-4">
          <img
            src={ProfileImage}
            alt=""
            className="w-100 rounded ms-2"
            srcset=""
            style={{ height: "520px", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
