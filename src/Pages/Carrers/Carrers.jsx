import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../components/Home/footer/Footer";
import { Link } from "react-router-dom";
import CarrerNav from "../../components/Navbar/CarrerNav";
function Carrers() {
  return (
    <div className="App">
      <CarrerNav />
      <Header />
      <JobSections />
      <ExploreOpportunities />
      <TeamMember />
      <Footer />
    </div>
  );
}

const Header = () => (
  <header className="hero">
    <div className="container text-center py-5">
      <h2>Find Job Services</h2>
      <div className="">
        <div className="container">
          <div className="row justify-center">
            <div className="searchmain shadow-none justify-center d-flex">
              <div className="first">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_743_2837)">
                    <path
                      d="M12.0855 -0.0078125C7.16625 -0.0078125 3 4.18244 3 9.14518C3 14.3427 7.82925 19.6579 11.0775 23.3937C11.0903 23.4087 11.6153 23.9914 12.2618 23.9914H12.3187C12.966 23.9914 13.4873 23.4087 13.5 23.3937C16.548 19.8897 21 14.1109 21 9.14518C21 4.18169 17.7502 -0.0078125 12.0855 -0.0078125ZM12.3862 22.3872C12.36 22.4134 12.3218 22.4427 12.288 22.4674C12.2535 22.4434 12.216 22.4134 12.1882 22.3872L11.796 21.9357C8.7165 18.4032 4.49925 13.5649 4.49925 9.14443C4.49925 4.99544 7.97325 1.49069 12.0848 1.49069C17.2065 1.49069 19.4993 5.33444 19.4993 9.14443C19.4993 12.4999 17.106 16.9564 12.3862 22.3872ZM12.0262 4.53344C9.5415 4.53344 7.52625 6.54794 7.52625 9.03343C7.52625 11.5189 9.5415 13.5334 12.0262 13.5334C14.511 13.5334 16.5262 11.5182 16.5262 9.03343C16.5262 6.54869 14.5118 4.53344 12.0262 4.53344ZM12.0262 12.0334C10.3717 12.0334 8.99175 10.6549 8.99175 9.00043C8.99175 7.34594 10.3373 6.00044 11.9918 6.00044C13.647 6.00044 14.9918 7.34594 14.9918 9.00043C14.9925 10.6549 13.6815 12.0334 12.0262 12.0334Z"
                      fill="#4F4F4F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_743_2837">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <input
                  className="input-location"
                  placeholder="Search by Location"
                ></input>
              </div>
              <div className="second">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.85692 20.5358C3.3348 18.9815 2.3024 17.0147 1.88779 14.8792C1.46976 12.7376 1.68443 10.5207 2.50556 8.49914C3.31968 6.48894 4.70959 4.7641 6.50075 3.54122C10.1349 1.05918 14.9191 1.05918 18.5532 3.54122C20.3445 4.7641 21.7344 6.48894 22.5484 8.49914C23.3696 10.5207 23.5843 12.7376 23.1661 14.8792C22.7516 17.0147 21.7192 18.9815 20.197 20.5358C18.1813 22.6043 15.4154 23.771 12.5269 23.771C9.63859 23.771 6.87273 22.6043 4.85692 20.5358Z"
                    stroke="#4F4F4F"
                    stroke-width="2.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5404 5.55448C11.8154 5.63129 11.2901 6.28126 11.3668 7.00622C11.4437 7.73118 12.0937 8.25659 12.8186 8.17979L12.5404 5.55448ZM15.7988 9.93549C16.0831 10.6069 16.8577 10.9207 17.5291 10.6364C18.2004 10.3522 18.5142 9.57763 18.2299 8.9063L15.7988 9.93549ZM21.2909 19.4303C20.7751 18.9153 19.9392 18.916 19.4243 19.432C18.9091 19.9479 18.91 20.7837 19.4259 21.2987L21.2909 19.4303ZM25.3887 27.251C25.9048 27.7662 26.7404 27.7655 27.2556 27.2494C27.7705 26.7334 27.7698 25.8978 27.2538 25.3826L25.3887 27.251ZM12.8186 8.17979C14.0902 8.04504 15.3004 8.75793 15.7988 9.93549L18.2299 8.9063C17.2783 6.65823 14.9681 5.29724 12.5404 5.55448L12.8186 8.17979ZM19.4259 21.2987L25.3887 27.251L27.2538 25.3826L21.2909 19.4303L19.4259 21.2987Z"
                    fill="#4F4F4F"
                  />
                </svg>

                <input
                  className="input-search"
                  placeholder="Search"
                  type="text"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="center-box d-flex justify-content-between align-items-center mt-3">
        <div className="d-flex align-items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/11d2/5406/fc2e8e0762713ffb66ae8a0ad64fcebe?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ceMeOEdAowXCuibbeTVgcOPL1Jl00Klr-eLx6NzpevR0Qj~zlTYkUuOPPwAxQxGjgr7hVEjCSEYPfYaLXhHIeshYAog6sIqK3y22-r2k6gzrPiuL~bL3sGFqOFUVr~hl1~0VL75G1CsYFxGa3LfX5ZU1cC1IK~5D9DIW7azei1HGr7rBIHOBd71PtqBL1hlZneGHceCLdcvy~hKMgG9KEbrqZzKq~9Wr7jOb3A0pPwBDzqJ2dlxVZsoYXdhTfHXRpBydqy5~cj-TVenx1VipDucjspsUukgJtZkyRZ39CpGXiq6VZpV2KIiKi~ZGUBtxPZzU~~tIajrHIUjSbq2KaQ__"
            alt="Profile"
            className="rounded-circle"
          />
          <h1 className="ml-3">Building a next generation of home security</h1>
        </div>
        <div className="d-flex gap-3">
          <h1>avijo</h1>
          <button className="btn btn-light py-3 px-5">Join Us</button>
        </div>
      </div>
    </div>
  </header>
);
const JobSections = () => (
  <section className="py-5">
    <div className="container job-section">
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 py-4 px-2">
            <div className="card-body">
              <h5 className="card-title">Software Development</h5>
              <p className="card-text">
                Explore job opportunities and what it's like to be a software
                engineer at Avijo.
              </p>
              <Link
                to="/carrer/JobListings"
                className="py-3 mt-3 btn btn-primary"
              >
                View more jobs
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 py-4 px-2">
            <div className="card-body">
              <h5 className="card-title">Opportunities for students</h5>
              <p className="card-text">
                Learn about, search for and apply to internships and full-time
                opportunities for students.
              </p>
              <Link
                to="/carrer/JobListings"
                className="py-3 mt-3 btn btn-primary"
              >
                View more jobs
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 py-4 px-2">
            <div className="card-body">
              <h5 className="card-title">Warehouse and Hourly Job</h5>
              <p className="card-text">
                Search open jobs and learn about job opportunities at Avijo
                warehouses and stores.
              </p>
              <Link
                to="/carrer/JobListings"
                className="py-3 mt-3 btn btn-primary"
              >
                View more jobs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ExploreOpportunities = () => (
  <section className="bg-light py-5">
    <div className="container explore">
      <div className="row">
        <div className="col-md-4 text-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/b99c/75ef/09650fe38e8fa48b428f7d5ed24a6742?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SGadnQQedj4-YnNgFF4tT6gQgVPCrWjKJZJB39uTgcUKCY0h27GnvaaRkf5yglCAQUSXJPr0-S1EpgPyEx5hU19jdgm5IH-pyTcPvrXNw0rx~8nz4-xcSjSoiVEmSIwaJp7Arp4bE1rVRc6fMSaQU7b3AZVG6qLFOOqdsqRN95y6q82ilU4eZmMslyPwdKqaY360apbtzp-aYUCLNfMiWPfMayVQsfwNKsaIFVTAWG50t96j95zj1KBWptYpQMrZRdGzS32R01~Byf31VvTHlcapwKRb7Gpgepa8pDCfdAj9iP-UC1PrDEaqpbfKtgk7dWE5aESLsbP5EimmocSVqg__"
            alt="Teams"
            className="img-fluid mb-3"
          />
          <h5>Teams</h5>
          <p>
            Get to know Avijo's teams, from Avijo Web Services to subsidiaries.
          </p>
          <a href="#" className="text-decoration-none">
            See All Teams
          </a>
        </div>
        <div className="col-md-4 text-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/1bbf/6cd1/b822bd6c2726e89bdf032578b361206f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WxBG8onZX9kgGAZfgkfIzTXZkR1QwdTznw4tmsUNyxCmjfECOeBRImveX4Hd03l835BLLhhkDpl3A2mtjvXvE8H8e4TpkY5tXQYFqWdLPECm7Qt2B8BQM1JARZ59OdJ0pp5H4VRRi5onTzbO-tmMIu50krgO7VwxDcK~AJrL3ZekqQmqpv791cLh9P5Y0pG94nnw5FU6V7LjTqFORrtUQpm6WV3HmgbrsLcWBeSJAAH9I9AYyfdN4YbDpfysz12NAikZvuGcVX1kzfdLBgePftCgiq34z9m6V0ndaSrsAwPzX2GjRAm1m8PGUJq3DoQAvmy3PNmdVI-iomI7nDWKZQ__"
            alt="Job Categories"
            className="img-fluid mb-3"
          />
          <h5>Job Categories</h5>
          <p>Want to be an Avijo? Find the right job for you.</p>
          <a href="#" className="text-decoration-none">
            See All Job Categories
          </a>
        </div>
        <div className="col-md-4 text-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/ad72/eba7/19542d05d6cdadfb329d7f4340fcb7ce?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S70~TjsjbPL4SSxEP8uA6Pa0NAZCWDSRfgPQxGs~HfKKlSJHXdxwS1x8fw361t9RxFGAOsqDhzbCOkPXMb1NmXDkiuFkjM9kr~flca6Z1K2l28dx8sDxsaE1WE-OrrOZ23uKr3fnY7VgE8XMEtm-o~AwmaObhDN3goeVWg9osW-oZ8hpIyZ-1ROpSz4lr581e3nnJRRLFZUCzkFao9R4nKSMTGr5~Z~robCvohs-Oe~Q6hB4NkP70-N5jBcuyEMx~X-0mKzYIBV8bLvRGHuBRzPYGzU0QPWvlEDGdo6vSDdcZEP5U6yJe0CYoNUTMCWHqEAMAnoslQxtl3dYt0UefA__"
            alt="Locations"
            className="img-fluid mb-3"
          />
          <h5>Locations</h5>
          <p>View Avijo's office locations across the globe.</p>
          <a href="#" className="text-decoration-none">
            See All Locations
          </a>
        </div>
      </div>
    </div>
  </section>
);

const TeamMember = () => (
  <section className="py-5 mb-5">
    <div className="container team">
      <div className="row justify-center">
        <div className="col-md-4 d-flex justify-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/3977/ea0e/80a9af897f9f48e091f016fb5b0dcac4?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hToJg-tkVWZSJVJHF04Zp~vejFiyAvG0g~vMLD3SRn9iMqWmeVaIJZsWMGJ3JhuwzUzNkzP~tFCTxaSQsbz-t0vb89gQ6VXQIB2Y5CDYix3vvFJfZSuzviC6csXxQNo22d1HnDdaS~z0pIAkVBk3W2srFuUpq~YcIhRZUcfUISuNcPBAxcSMakmMK3mA8e9sEzv-4IKy3M1mF1l2Cq-ZXd2o-~NLaCZotlJdtSrdJgX6rKzgJ~ImG9kj3PIb7LZ-Y3RYpdLp4-v6rJwGsPCymSit2T1ZFsueOHPPyre1wr1puJaAKgswiSsaIkPNlAKKY2auJQMBsdTeEiLvyZ9XWw__   "
            alt="Patti"
            className="img-fluid rounded-circle mb-3 w-50 h-100"
          />
        </div>
        <div className="col-md-8">
          <h5>Patti</h5>
          <p>Search Operations Engineer</p>
          <p>
            Patti joined Amazon as a Search Operations Engineer on Cyber Monday
            2014, her new team's most intense day of the year. Product Search is
            a key component of the Amazon store, and the Search Ops team is
            responsible for keeping this complex set of services running
            smoothly...
          </p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Carrers;
