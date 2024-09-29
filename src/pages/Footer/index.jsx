import React from "react";
import "./index.css";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="footer mb-4">
                <h2 className="footer-heading-2">About</h2>
                <p>
                  I am a Mern stack web developer .I am a frontend and backend developer.I am completed my 20+ project till now

                </p>
                <ul className="sociacl-list unstyled">
                  <li>
                    <a href="#">
                      <span>
                        <FaTwitter size={26} color="#fff" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <FaFacebookF size={26} color="#fff" />
                      </span>
                    </a>

                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <FaInstagram size={26} color="#fff" />
                      </span>
                    </a>
                  </li>  <li>
                    <a href="#">
                      <span>
                        <FaGithub size={26} color="#fff" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="footer-2">
                <h2 className="footer-heading-2">Links</h2>
                <ul className="unstyle-list">
                  <li>
                    <a href="#">
                      <span>
                        <FaLongArrowAltRight color="#999999" />
                      </span>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <FaLongArrowAltRight color="#999999" />
                      </span>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <FaLongArrowAltRight color="#999999" />
                      </span>
                      Project
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <FaLongArrowAltRight color="#999999" />
                      </span>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="footer mb-4">
                <h2 className="footer-heading-2">Services</h2>
                <ul className="unstyle-list">
                  <li>
                    <a href="#">
                      <span>
                        <FaLongArrowAltRight color="#999999" />
                      </span>
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <FaLongArrowAltRight color="#999999" />
                      </span>
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <FaLongArrowAltRight color="#999999" />
                      </span>
                      Business Strategy
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <FaLongArrowAltRight color="#999999" />
                      </span>
                      UI/UX designer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="footer mb-4">
                <h2 className="footer-heading-2">Have a Questions?</h2>
                <div className="question mb-3">
                  <ul>
                    <li>
                      <span>
                        <CiLocationOn />
                      </span>
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </li>
                    <li>
                      <span>
                        <IoIosCall />
                      </span>
                      +91 9628554907
                    </li>
                    <li>
                      <span>
                        <IoMdMail />
                      </span>
                      Vijay9628554907@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Copyright ©2024 All rights reserved | This template is made with
                react.js,css and bootstrap
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
