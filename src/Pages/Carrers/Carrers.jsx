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
  <header className="hero bg-white">
    <div class="flex md:flex-row justify-between p-4">
      <div className="flex flex-col p-2 w-50 h-full">
        <div className="flex-grow">
          <h2 className="text-4xl">Get Instant placement with KYC (Know Your Colleague)</h2>
          <span className="text-lg">
            Avijo Expert is the premier mobile application designed specifically for healthcare professionals. Built to complement the Avijo Alpha platform, Avijo Expert empowers doctors and medical practitioners with the tools they need to manage their practice, engage with patients, and contribute to a growing health community—all from the convenience of their mobile devices.
          </span>
        </div>
        <button className="bg-[#0095D9] h-10 w-40 rounded-lg mt-2">
          <span className="text-sm text-white"> Learn more</span>
        </button>
      </div>
      <div className="p-4 w-50 ml-20">
        <img src={require('../../Assets/image/header1.png')} className="h-60 w-90" />
      </div>
    </div>
  </header>
);

const JobSections = () => (
  <section className="py-5 bg-gray-50">
    <div className="container job-section">
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 py-12 px-2">
            <div className="card-body">
              <h5 className="card-title">Software Development</h5>
              <p className="card-text mb-4">
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
  <section className="bg-white py-5">
    <div className="container explore">
      <div className="row">
        <div className="col-md-4 text-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/86c6/c786/69998b72deab31dc231a50e328696bce?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a27uZBwS5Y89~4qHKJXeDNOEcXxAAfEm5phDPokXNvZcO0p711honwd7Vd6gIYtWq8sXUgpYARPx7-ouZpNoAjVz0YTgpRnB7eoB-8ECdWDhB4WAMdDhqrQLWWxZ1X3x9zQAsfJeV1ZpX9S-sk3o4MeAJ6LIMidmWGSv7CVprA2eoxXI~GdSAD-iq0LbTF5WKbZsrwqlKB~82ItOTzf0g8iRR0Nj0VBptBWa3fVUlzOzHjgdIejQ~EECj3d7t5OdWaek0-WRHnaGPwfKKqTPZNGUtEpFq4A9WY0jiA2MAfFDfNprb5L8KUTATMEikYrtiz-EhJWguO8zFniemlu6VA__"
            alt="Teams"
            className="img-fluid mb-3"
          />
          <h5>Teams</h5>
          <p>
            Get to know Avijo's teams, from Avijo Web Services to subsidiaries.
          </p>
          <a href="#" className="text-decoration-none" style={{ color: '#0095D9' }}>
            See All Teams
          </a>
        </div>
        <div className="col-md-4 text-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/ff06/a1bd/281742cb8afebb622c3b4d3ff80be84e?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bioiIViWjyM6d6AwCAHFwuf434m4RQdRGTGNGGbci4OOuVyqYPGM91cYmPzfBBCrluKxpYSlggZsZjnxyV7SVKMicsuSGikNm3N8hwvrNHfu-8qJXs45b5iYFflc~TEJ3-SznHQwbMt01oE~z4H18Uumyr1CP~~BgRPNPGEfhcBlYN0BfsBXktRz1saGBUdzeN2bfWMH8gN5SKdRm6fmQybMOyngcAqXoNdS3WbuyfPp5In~604nXt4A706iQNVd6lu1nBUrHvy9pb6SIAs5thGScMjVSKEVeata6b5i4tsytGwI4xRPp46pXmXy~lMiOL6FeYY~ckKmNu6l2pVDrw__"
            alt="Job Categories"
            className="img-fluid mb-3"
          />
          <h5>Job Categories</h5>
          <p>Want to be an Avijo? Find the right job for you.</p>
          <a href="#" className="text-decoration-none" style={{ color: '#0095D9' }}>
            See All Job Categories
          </a>
        </div>
        <div className="col-md-4 text-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/dd96/84ba/56cfa96c24f8e5170e73aaeb8266f8c3?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hG6rNPWW2ULKD8GAAmGcLN9pDp1dXAVLBkxsrbl6NN5mL-07QSE5Jeqrk6cJkDm~d2KOhlRjsYCpx9EfdkSVVZvJH4zy5R6gsMAurMac8kA9NrGZpzqxfHuCIFI~f0AARp6rgMsuYcOQedXd18A5EoNroiyQmRPz0sMnOZUpupeBXYIQHVCOQz1MjucaO4WcD76q8mpgflL5Hoiiq2oE5v0DwIDbRc4sk1o5Cm6QSgqeCHJtpC~oJZrrJqohPH6-P7~8V51YapTBfwUujxC9NqTAuCYIVCepKTgaMV1uSJ6EZoRMyN4c93sPrH6lxiqwNYwSzK-pQq1jKZoAJqSGMg__"
            alt="Locations"
            className="img-fluid mb-3"
          />
          <h5>Locations</h5>
          <p>View Avijo's office locations across the globe.</p>
          <a href="#" className="text-decoration-none" style={{ color: '#0095D9' }}>
            See All Locations
          </a>
        </div>
      </div>
    </div>
  </section>
);

const TeamMember = () => (
  <section className="py-5 mb-5 border-t-[40px] border-b-[40px] border-gray-50">
    <div className="container team">
      <div className="row justify-center">
        <div className="col-md-4 d-flex justify-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/3d84/22e7/eb76d82e7e01241bc38c331463a6eab6?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pgdxwtFSLGae3Gn7EigFdMrQpJNPCA56gFhRPGA8XPLV-jvMswVCdsxiufVjsrzHW1OMEHhEcpoKVRVuOnU3hVggm1cVm2kTIrIBQIEn6qg4MfDOA78AFPgUo8nGR9Q110puH3-tQqT63eytam42OCfu2Zc-09iOPBZo8NX2tZT4VLy11UoStY5L4TVaDR1UgbhAOqC3LL1CIfFd2aV5MQfUL7YbQ6OnSBG3nvWfGHg8N6IA8MjMmimGvMJ9fNEluUzio3U8aEhFU6Hydnpd6ymEtqZ7~CK82NY0UMknSKHfenYwgsCZeldN11pcscksgNemgs2GaxLF~baasrTDmA__"
            alt="Patti"
            className="img-fluid  mb-3 h-auto w-50 rounded-lg"
          />
        </div>
        <div className="col-md-8">
          <h5>We Think & Learn more than Work</h5>
          <p>
            We believe in thinking and learning more than just working. Our culture encourages innovation, continuous learning, and collaboration, creating an environment where every team member can thrive and grow.
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
