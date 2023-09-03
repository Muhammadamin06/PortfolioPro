import React from "react";
import logo from "../images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";

function NavBar({ link, secondLink, classname }) {
  return (
    <div>
      <Navbar id="NavBar" expand="lg" className="bg-body-tertiary nav" classname={classname}>
        <Container className="nav__container">
          <Link to={"/"}>
            <img className="nav__logo" src={logo} alt="nav_logo" />
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="nav__toggle"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav__list">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "nav__link active" : "nav__link"
                }
                href="#home"
              >
                Home
              </NavLink>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive ? "nav__link active" : "nav__link"
                }
                href="#link"
              >
                About
              </NavLink>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive ? "nav__link active" : "nav__link"
                }
                href="#link"
              >
                Contact
              </NavLink>
              <a href="#stack" className="nav__link">
                {link && link}
              </a>
              <a href="#projects" className="nav__link">
                {secondLink && secondLink}
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
