import React from "react";
import { Link } from "react-router-dom";
import "./SearchSection.css";

const SearchSection = () => {
  return (
    <div className="search-container">
      <div className="container">
        <div className="row">
          <div className="search-header">
            <h1>Find what you need?</h1>
          </div>
          <div className="searchmain">
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

              <input className="input-search" type="text"></input>
              <button className="search-button">Search</button>
            </div>
          </div>
          <div className="prescription">
            <svg
              width="19"
              height="24"
              viewBox="0 0 19 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7591 2.85256H13.1821V4.07356H15.7591H15.7661C16.4211 4.07356 16.9521 4.60456 16.9521 5.25956V5.26756V21.5936V21.6006C16.9521 22.2566 16.4201 22.7876 15.7651 22.7876C15.7631 22.7876 15.7601 22.7876 15.7581 22.7876H2.40709C2.40509 22.7876 2.40209 22.7876 2.40009 22.7876C1.74409 22.7876 1.21309 22.2556 1.21309 21.6006C1.21309 21.5976 1.21309 21.5956 1.21309 21.5926V5.26656C1.21309 5.26456 1.21309 5.26156 1.21309 5.25956C1.21309 4.60356 1.74509 4.07256 2.40009 4.07256H2.40709H4.98409V2.85256H2.40709C1.07609 2.85256 -0.00390625 3.93256 -0.00390625 5.26356V21.5896C-0.00290625 22.9206 1.07609 23.9996 2.40709 23.9996H15.7581C17.0891 23.9996 18.1691 22.9196 18.1691 21.5886V5.26256C18.1691 3.93156 17.0891 2.85156 15.7581 2.85156L15.7591 2.85256Z"
                fill="#545454"
                stroke="#545454"
                stroke-width="0.00032"
              />
              <path
                d="M12.6024 2.225H11.2834C11.2834 0.996 10.2874 0 9.05844 0C7.82944 0 6.83344 0.996 6.83344 2.225H5.52344V5.282H12.5964V2.225H12.6024ZM10.3444 2.225H7.77444C7.77444 2.215 7.77444 2.204 7.77444 2.193C7.77444 1.483 8.35044 0.907 9.06044 0.907C9.77044 0.907 10.3464 1.483 10.3464 2.193V2.227V2.225H10.3444Z"
                fill="#545454"
                stroke="#545454"
                stroke-width="0.00032"
              />
              <path
                d="M5.94531 8.51562H15.4033V9.68563H5.94531V8.51562Z"
                fill="#545454"
                stroke="#545454"
                stroke-width="0.00032"
              />
              <path
                d="M5.94531 13.4062H15.4033V14.5763H5.94531V13.4062Z"
                fill="#545454"
                stroke="#545454"
                stroke-width="0.00032"
              />
              <path
                d="M5.94531 18.25H15.4033V19.426H5.94531V18.25Z"
                fill="#545454"
                stroke="#545454"
                stroke-width="0.00032"
              />
              <path
                d="M2.625 7.75781H5.305V10.4378H2.625V7.75781Z"
                fill="#545454"
                stroke="#545454"
                stroke-width="0.00032"
              />
              <path
                d="M2.625 12.6562H5.305V15.3363H2.625V12.6562Z"
                fill="#545454"
                stroke="#545454"
                stroke-width="0.00032"
              />
              <path
                d="M2.625 17.5H5.305V20.18H2.625V17.5Z"
                fill="#545454"
                stroke="#545454"
                stroke-width="0.00032"
              />
            </svg>

            <Link to="/order-with-prescription" className="prescription-link">
              Order With Prescription
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;