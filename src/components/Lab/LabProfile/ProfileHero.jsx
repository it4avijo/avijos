import React from "react";
import ProfileImage from "../../../Assets/image/ProfileImage.png";
import ProfileForm from "./ProfileForm";
const ProfileHero = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-4">
          <ProfileForm />
        </div>
        <div className="col-md-8 mt-5">
          <img src={ProfileImage} alt="" className="w-100" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
