import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NotFound from "./Pages/NotFound";
import UserHeader from "./components/Users/header/Header";
import "./styles/index.css";
import HomeNavbar from "./components/Users/navbar/HomeNav";
import ProfileEditNav from "./components/Doctors/DoctorEditProfile/ProfileEditNav";
import PharmacyProfileEditNav from "./components/Pharmacy/PharmacyEditProfile/ProfileEditNav";
import LabProfileEditNav from "./components/Lab/LabEditProfile/ProfileEditNav";
import HomeNav from "./components/Users/navbar/HomeNav";
import HPPProfileNavbar from "./components/HPP/HPPProfile/ProfileNavbar";
import HPPProfileEditNav from "./components/HPP/HPPEditProfile/ProfileEditNav";
import ContactNav from "./components/Navbar/ContactNav";
import SafetyNav from "./components/Navbar/SafetyNav";
import JobListings from "./Pages/Carrers/JobListings";
import Carrers from "./Pages/Carrers/Carrers";
import JobListView from "./Pages/Carrers/JobListView";
import UserLogin from "./Pages/Carrers/UserLogin";
import UserRegister from "./Pages/Carrers/UserRegister";
import Generalquestions from "./Pages/Carrers/Generalquestions";
import Education from "./Pages/Carrers/Education";
import WorkEligibilty from "./Pages/Carrers/WorkEligibilty";
import Resume from "./Pages/Carrers/Resume";
import Acknowledge from "./Pages/Carrers/Acknowledge";
import VoluntaryEqual from "./Pages/Carrers/VoluntaryEqual";
import VoluntarySelf from "./Pages/Carrers/VoluntarySelf";
import ReveiwSubmit from "./Pages/Carrers/ReveiwSubmit";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("myPath", location.pathname);
  }, [location.pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Carrers />} />
        <Route path="/carrer/JobListings" element={<JobListings />} />
        <Route path="/carrer/JobListings/View" element={<JobListView />} />
        <Route path="/carrer/sign-in" element={<UserLogin />} />
        <Route path="/carrer/sign-up" element={<UserRegister />} />
        <Route path="/carrer/Generalquestions" element={<Generalquestions />} />
        <Route path="/carrers/Education" element={<Education />} />
        <Route path="/WorkEligibilty" element={<WorkEligibilty />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Acknowledge" element={<Acknowledge />} />
        <Route path="/VoluntaryEqual" element={<VoluntaryEqual />} />
        <Route path="/VoluntarySelf" element={<VoluntarySelf />} />
        <Route path="/ReveiwSubmit" element={<ReveiwSubmit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
