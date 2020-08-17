import React, { Component } from "react";


import { Link, animateScroll as scroll } from "react-scroll";

class Header extends Component {
  scrollTopTop = () => {
    scroll.scrollTopTop();
  };
  render() {
    return (
      <div>
        <header className="fixed-top" id="header-top">
          <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{ background: "#101010" }}
          >
            <a className="navbar-brand" style={{ color: "#ffffff" }} href="https://github.com/dgsdev">
            <i >Douglas Pinheiro </i>
            
            </a>
            <button
              className="navbar-toggler"
              style={{ background: "#0099cc" }}
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="nav navbar-nav">
                <li className="nav-item active">
                  <Link
                    href="/"
                    className="nav-link"
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                  <span className="sr-only">(current)</span>
              
                    Sobre mim
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/"
                    className="nav-link"
                    to="technologies"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Tecnologias
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/"
                    className="nav-link"
                    to="portfolio"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Projetos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/"
                    className="nav-link"
                    to="footer"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contatos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link>
                                     
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
