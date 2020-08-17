import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class Footer extends Component {
  scrollTopTop = () => {
    scroll.scrollTopTop();
  };
  render() {
    return (
      <footer id="footer">
        <section id="social" className="social">
          <div className="footer-top">
            <div className="container">
              <div
                className="row justify-content-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="footer-links">
                  <p>Sinta-se livre para entrar em contato:</p>
                  <div className="social-links mt-3 d-flex justify-content-center">
                    <a
                      href="https://github.com/dgsdev"
                      className="github"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/douglaspramos/"
                      className="instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/dgsdouglaspinheiro/"
                      className="linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>

                    <a
                      href="https://wa.me/5511983165618"
                      className="whatsapp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <a
                     href="mailto: dgspramos@gmail.com"
                     className="email"
                     target="_blank"
                     rel="noopener noreferrer"
                     >

                    <i className="fas fa-envelope"></i>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="container">
          <div class="copyright">
          {" "}
            <strong>
              <span style={{ color: "#0099cc" }}></span>
            </strong>{" "}
            
          </div>
        </div>
        <Link
          className="back-to-top"
          to="Presentation"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <i className="fas fa-chevron-circle-up fa-3x"></i>
        </Link>
      </footer>
    );
  }
}

export default Footer;
