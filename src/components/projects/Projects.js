import React, { Component } from "react";
import coderflix from '../img/coderflix.png'
import coderflix1 from '../img/coderflix2.png'
import coderflix2 from '../img/coderflix3.png'
import coderflix3 from '../img/coderflix4.png'
import coderflix4 from '../img/coderflix5.png'
import coderflix5 from '../img/coderflix6.png'

class Projects extends Component {
  render() {
    return (
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Projetos</h2>
            <p>Confira meus projetos</p>
          </div>

          <div
            class="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-lg-4 col-md-6 portfolio-item filter-react filter-react">
              <div className="portfolio-wrap">
                <img src={coderflix2} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="https://dgsdev.vercel.app/"
                    title="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
                <div className="portfolio-info">
                  <h4>Coderflix</h4>
                  <p>HTML / CSS / nodejs / Reactjs</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-react filter-rn">
              <div className="portfolio-wrap">
                <img
                    src={coderflix}
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="https://github.com/dgsdev/Coderflix"
                    title="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
                <div className="portfolio-info">
                  <h4>CoderFlix</h4>
                  <p>JavaScript</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-js">
              <div className="portfolio-wrap">
                <img src={coderflix3} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="https://github.com/dgsdev/Coderflix"
                    title="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
                <div className="portfolio-info">
                  <h4>Coderflix</h4>
                  <p>JavaScript / NodeJS</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-react filter-rn">
              <div className="portfolio-wrap">
                <img src={coderflix4} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="https://github.com/dgsdev"
                    title="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
                <div className="portfolio-info">
                  <h4>Coderflix</h4>
                  <p>ReactJS / NodeJS / Json-server / heroku</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-rn">
              <div className="portfolio-wrap">
                <img
                  src={coderflix5}
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="https://github.com/dgsdev"
                    title="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
                <div className="portfolio-info">
                  <h4>Coderflix</h4>
                  <p>React / NodeJS</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-rn">
              <div className="portfolio-wrap">
                <img
                  src={coderflix1}
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="https://github.com/dgsdev"
                    title="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
                <div className="portfolio-info">
                  <h4>Coderflix</h4>
                  <p>JavaScript</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
