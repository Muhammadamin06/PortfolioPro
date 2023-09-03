import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiFillCalendar } from "react-icons/ai";
import NavBar from "../components/NavBar";

function About() {
  return (
    <>
      <NavBar />

      <div className="about container">
        <h3 className="about__title">About Me</h3>
        <p className="about__text">
          The web developer is like a tool that helps you to export ready-made
          templates ready to work as your future website. It helps you to
          combine slides, panels and other components and export it as a set of
          static files: HTML/CSS/JS.
        </p>

        <div className="about__block">
          <h4 className="about__title">Work Experience</h4>
          <div className="about__box">
            <div className="about__info">
              <h5 className="about__box_title">Almost Junior Web Developer</h5>
              <p className="about__location">
                <CiLocationOn /> <span>Tashkent</span>
              </p>
            </div>
            <div className="about__time">
              <p className="about__full">Full time</p>
              <p className="about__date">
                <AiFillCalendar /> <span>Dec 2022 - Sep 2023</span>
              </p>
            </div>
          </div>

          <div className="about__box">
            <div className="about__info">
              <h5 className="about__title">Education</h5>
              <h5 className="contact__box_title">Public School</h5>
              <p className="about__location">
                <CiLocationOn /> <span>Tashkent</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
