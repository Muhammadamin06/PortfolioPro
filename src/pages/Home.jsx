import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import user from "../images/user.jpg";
import outLogo from "../images/outro_logo.png";
import { TypeAnimation } from "react-type-animation";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar link={"Techstack"} secondLink={"Projects"} />
      <div id="homepage" className="home">
        <div className="home__block container">
          <div className="home__left">
            <TypeAnimation
              sequence={["Hi,", 1000, "My name is"]}
              speed={1}
              className="home__intro"
            />
            <p className="home__name">Muhammadamin</p>
            <p className="home__intro">I build things for web</p>
          </div>
          <div className="home__right">
            <img className="home__user" src={user} alt="admin" />
          </div>
        </div>
        <div className="container">
          <TechStack />
          <Projects />
        </div>
        <div className="outro container">
          <a href="#NavBar">
            <img className="outro__logo" src={outLogo} alt="logo" />
          </a>
          <div className="outro__list">
            <a href="tel:+998900229748" className="outro__tel">
              +998 90 022 97 48
            </a>
            <a
              href="mailto:asusmuhammad00609@gmail.com"
              className="outro__email"
            >
              asusmuhammad00609@gmail.com
            </a>
            <div className="outro__mini-list">
              <a
                href="https://github.com/Muhammadamin06"
                className="outro__link"
              >
                <AiFillGithub />
              </a>
              <a href="https://t.me/Abdullayev__9748" className="outro__link">
                <BsTelegram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
