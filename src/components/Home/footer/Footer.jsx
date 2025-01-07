import React from "react";

import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <footer class="text-gray-600 body-font pt-4">
        <div class="container px-5 pb-12 mx-auto">
          <div class="flex flex-wrap md:text-left text-center mb-10 mx-4">
            <div class="lg:w-1/4 text-left md:w-1/2 w-full  ">
              <h2 class="title-font  text-gray-900 tracking-widest text-base font-semibold  mb-3">
                Find career
              </h2>
              <nav class="list-none mb-10 footer_row">
                <li>
                  <Link
                    to="/JobCategory"
                    onClick={scrollToTop}
                    class="text-gray-600 hover:text-gray-800 text-decoration-none"
                  >
                    Job Categories
                  </Link>
                </li>
                <li>
                  <Link
                    to="/JobTeam"
                    onClick={scrollToTop}
                    class="text-gray-600 hover:text-gray-800 text-decoration-none"
                  >
                    Teams
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ABDM"
                    onClick={scrollToTop}
                    class="text-gray-600 hover:text-gray-800 text-decoration-none"
                  >
                    Locations
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    onClick={scrollToTop}
                    class="text-gray-600 hover:text-gray-800 text-decoration-none"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/carrer"
                    onClick={scrollToTop}
                    class="text-lg text-gray-600 hover:text-gray-800 text-decoration-none"
                  >
                    Warehouse jobs
                  </Link>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 text-left md:w-1/2 w-full ">
              <h2 class="title-font text-gray-900 tracking-widest mb-3 text-base font-semibold">
                Working with us
              </h2>
              <nav class="list-none mb-10 footer_row">
                <li>
                  <Link
                    onClick={scrollToTop}
                    to="/Culture"
                    class="text-gray-600 hover:text-gray-800 text-decoration-none"
                  >
                    Culture
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={scrollToTop}
                    to="/lab/login"
                    class="text-gray-600 hover:text-gray-800 text-decoration-none"
                  >
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={scrollToTop}
                    to="/Diversity"
                    class="text-gray-600 hover:text-gray-800 text-decoration-none"
                  >
                    Diversity and Inclusions
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={scrollToTop}
                    to="/LeaderShip"
                    class="text-gray-600 hover:text-gray-800 text-decoration-none"
                  >
                    Leadership Principles
                  </Link>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 text-left md:w-1/2 w-full ">
              <h2 class="title-font text-gray-900 tracking-widest  mb-3 text-base font-semibold">
                Connect with us
              </h2>
              <nav class="list-none mb-10 footer_row">
                <li>
                  <Link
                    to="https://www.instagram.com/avijo.in/"
                    class="text-gray-600 hover:text-gray-800 text-decoration-none"
                    target="_blank"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.facebook.com/profile.php?id=61557517891146"
                    target="_blank"
                    class="text-gray-600 hover:text-gray-800 text-decoration-none"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.youtube.com/channel/UCZgHMknFFjnpVi59jEf6m3w"
                    target="_blank"
                    class="text-gray-600 hover:text-gray-800 text-decoration-none"
                  >
                    Youtube
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/company/103452119"
                    target="_blank"
                    class="text-gray-600 hover:text-gray-800 text-decoration-none"
                  >
                    Linkedin
                  </Link>
                </li>

                <li>
                  <Link
                    to="https://x.com/avijo_in?t=o_OpfyI_UyieZTx93ribsQ&s=08"
                    target="_blank"
                    class="text-gray-600 hover:text-gray-800 text-decoration-none"
                  >
                    Twitter
                  </Link>
                </li>
              </nav>
            </div>{" "}
            <div class="lg:w-1/4 text-left md:w-1/2 w-full ">
              <h2 class="title-font text-gray-900 tracking-widest  mb-3 text-base font-semibold">
                Legals policies
              </h2>
              <nav class="list-none mb-10 footer_row">
                <li>
                  <Link
                    onClick={scrollToTop}
                    to="/Terms-and-Conditions"
                    class="text-gray-600 hover:text-gray-800 text-decoration-none"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={scrollToTop}
                    to="/Privacy-policy"
                    class="text-gray-600 hover:text-gray-800 text-decoration-none"
                  >
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={scrollToTop}
                    to="/Fees-and-Payments-policy"
                    class="text-gray-600 hover:text-gray-800 text-decoration-none"
                  >
                    Fees and Payments policy
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={scrollToTop}
                    to="/Shipping-and-Delivery-policy"
                    class="text-gray-600 hover:text-gray-800 text-decoration-none"
                  >
                    Shipping and Delivery policy
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={scrollToTop}
                    to="/Return-Refund-and-Cancellation-policy"
                    class="text-gray-600 hover:text-gray-800 text-decoration-none"
                  >
                    Return,Refund and Cancellation policy
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={scrollToTop}
                    to="/Editorial-policy"
                    class="text-gray-600 hover:text-gray-800 text-decoration-none"
                  >
                    Editorial policy
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>{" "}
        <div class="bg-white-100 border-t-4 border-grey">
          <div class="container mx-auto py-4 px-5 flex flex-wrap justify-center sm:flex-row">
            <div className="d-flex gap-5">
              <h2 style={{ color: '#0095D9' }}>avijo</h2>
              <button className="d-flex align-items-center gap-2 py-2 px-3  rounded-1 text-white" style={{ backgroundColor: '#0095D9' }}>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0.5C3.58962 0.5 0 4.08962 0 8.5C0 12.9104 3.58962 16.5 8 16.5C12.4104 16.5 16 12.9104 16 8.5C16 4.08962 12.4104 0.5 8 0.5ZM8 1.83333C8.12049 1.83333 8.29179 1.89707 8.53255 2.17708C8.77332 2.45713 9.03644 2.93061 9.25912 3.54297C9.41062 3.95961 9.53605 4.45771 9.64714 4.98698C9.13591 5.08569 8.58429 5.14844 8 5.14844C7.41535 5.14844 6.86407 5.0858 6.35287 4.98698C6.46396 4.45771 6.58938 3.95961 6.74089 3.54297C6.96356 2.93061 7.22669 2.45713 7.46745 2.17708C7.70821 1.89704 7.87951 1.83333 8 1.83333ZM10.1185 2.1849C10.9602 2.46784 11.7287 2.90799 12.3828 3.47917C12.2446 3.79371 11.9088 4.13599 11.319 4.44271C11.2032 4.50296 11.0634 4.55373 10.9323 4.60807C10.8133 4.06408 10.6782 3.54494 10.5117 3.08724C10.3931 2.76099 10.2619 2.46154 10.1185 2.1849ZM5.88021 2.1862C5.73712 2.46244 5.6067 2.76159 5.48828 3.08724C5.322 3.54453 5.18794 4.06333 5.06901 4.60677C4.9381 4.55249 4.79801 4.50289 4.68229 4.44271C4.0925 4.13599 3.75666 3.79371 3.61849 3.47917C4.27203 2.90863 5.03958 2.46924 5.88021 2.1862ZM2.67708 4.49219C3.01428 4.94898 3.50342 5.33154 4.06771 5.625C4.30666 5.74927 4.56601 5.85807 4.83594 5.95703C4.75848 6.55396 4.7108 7.18172 4.6901 7.83333H1.36589C1.48937 6.58351 1.96233 5.44099 2.67708 4.49219ZM13.3242 4.49349C14.0384 5.44201 14.5107 6.58415 14.6341 7.83333H11.3099C11.2892 7.18172 11.2415 6.55396 11.1641 5.95703C11.4341 5.85806 11.6946 5.74928 11.9336 5.625C12.4975 5.33173 12.987 4.94989 13.3242 4.49349ZM6.14063 6.30208C6.7274 6.41227 7.34673 6.48177 8 6.48177C8.65274 6.48177 9.27275 6.41339 9.85938 6.30339C9.918 6.79186 9.95663 7.30165 9.97526 7.83333H6.02474C6.04339 7.30118 6.08193 6.79093 6.14063 6.30208ZM1.36589 9.16667H4.6901C4.71027 9.80152 4.75662 10.4129 4.83073 10.9961C4.56286 11.0945 4.30493 11.2022 4.06771 11.3255C3.49338 11.6242 2.99665 12.0155 2.65885 12.4831C1.95452 11.5391 1.48831 10.4057 1.36589 9.16667ZM6.02474 9.16667H9.97526C9.95724 9.68095 9.92142 10.1744 9.86589 10.6484C9.27788 10.5376 8.6562 10.4688 8.0013 10.4688H8C7.3451 10.4688 6.7237 10.5376 6.13542 10.6484C6.07988 10.1743 6.04277 9.681 6.02474 9.16667ZM11.3099 9.16667H14.6341C14.5117 10.4057 14.0455 11.5391 13.3411 12.4831C13.0034 12.0155 12.5066 11.6242 11.9323 11.3255C11.6951 11.2022 11.437 11.0945 11.1693 10.9961C11.2434 10.4129 11.2897 9.80152 11.3099 9.16667ZM8 11.8021C8.58803 11.8021 9.14265 11.865 9.65625 11.9648C9.54327 12.5129 9.41513 13.028 9.25912 13.457C9.03644 14.0694 8.77332 14.5429 8.53255 14.8229C8.29179 15.103 8.12049 15.1667 8 15.1667C7.87951 15.1667 7.70821 15.1029 7.46745 14.8229C7.22669 14.5429 6.96356 14.0694 6.74089 13.457C6.58487 13.028 6.45673 12.5129 6.34375 11.9648C6.85737 11.8651 7.41234 11.8021 8 11.8021ZM5.0599 12.3464C5.18071 12.9073 5.31732 13.4426 5.48828 13.9128C5.6067 14.2384 5.73712 14.5376 5.88021 14.8138C5.03195 14.5282 4.2576 14.0832 3.60026 13.5052C3.72989 13.1815 4.07053 12.8253 4.68099 12.5078C4.79445 12.4488 4.93177 12.3997 5.0599 12.3464ZM10.9401 12.3477C11.0676 12.4008 11.2047 12.4491 11.3177 12.5078C11.929 12.8257 12.2692 13.1825 12.3984 13.5065C11.7412 14.0841 10.9678 14.5284 10.1198 14.8138C10.2629 14.5376 10.3933 14.2384 10.5117 13.9128C10.6826 13.443 10.8193 12.9081 10.9401 12.3477Z"
                    fill="white"
                  />
                </svg>
                English
              </button>
              <button className="d-flex align-items-center gap-2 py-2 px-3  rounded-1 text-white" style={{ backgroundColor: '#0095D9' }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1239_600)">
                    <mask
                      id="mask0_1239_600"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="2"
                      width="16"
                      height="12"
                    >
                      <path
                        d="M14.8571 2.28516H1.14286C0.511675 2.28516 0 2.79683 0 3.42801V12.5709C0 13.2021 0.511675 13.7137 1.14286 13.7137H14.8571C15.4883 13.7137 16 13.2021 16 12.5709V3.42801C16 2.79683 15.4883 2.28516 14.8571 2.28516Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_1239_600)">
                      <path
                        d="M14.8588 2.42773H1.14453C0.592247 2.42773 0.144531 2.87545 0.144531 3.42773V12.5706C0.144531 13.1229 0.592247 13.5706 1.14453 13.5706H14.8588C15.4111 13.5706 15.8588 13.1229 15.8588 12.5706V3.42773C15.8588 2.87545 15.4111 2.42773 14.8588 2.42773Z"
                        fill="white"
                        stroke="#F5F5F5"
                        stroke-width="1.14286"
                      />
                      <mask
                        id="mask1_1239_600"
                        // style="mask-type:alpha"
                        maskUnits="userSpaceOnUse"
                        x="-1"
                        y="1"
                        width="18"
                        height="14"
                      >
                        <path
                          d="M14.8588 2.42773H1.14453C0.592247 2.42773 0.144531 2.87545 0.144531 3.42773V12.5706C0.144531 13.1229 0.592247 13.5706 1.14453 13.5706H14.8588C15.4111 13.5706 15.8588 13.1229 15.8588 12.5706V3.42773C15.8588 2.87545 15.4111 2.42773 14.8588 2.42773Z"
                          fill="white"
                          stroke="white"
                          stroke-width="1.14286"
                        />
                      </mask>
                      <g mask="url(#mask1_1239_600)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 6.09468H16V2.28516H0V6.09468Z"
                          fill="#F0642F"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 13.7138H16V9.9043H0V13.7138Z"
                          fill="#2DCC45"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.00039 9.5242C8.84199 9.5242 9.52422 8.84197 9.52422 8.00037C9.52422 7.1588 8.84199 6.47656 8.00039 6.47656C7.15879 6.47656 6.47656 7.1588 6.47656 8.00037C6.47656 8.84197 7.15879 9.5242 8.00039 9.5242Z"
                          fill="#E85C27"
                        />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1239_600">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                India
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
