import React from "react";
import logo from "../img/main.png";

const Presentation = () => (
  <section id="Presentation" className="d-flex align-items">
    <div className="container">
      <div className="row mx-auto">
        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
          <h1>-->#Dgs$ </h1>
          <h2 className="text">Desenvolvedor Full Stack</h2>
          <h6>Olá! 👋  
My name is Douglas Pinheiro, from Brazil (🇧🇷). Study Front-end and mobile development. I seek an opportunity to learn and work on these technologies. I am passionate about projects like Linux, so I always install a new distro! My goal is to work with Front-end and Mobile and support my wife and daughter doing what I love about technology.</h6>
          <a
            href="https://wa.me/5511983165618"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-get-started">Let's talk?</button>
          </a>
          <div>
          <a
            href="https://wa.me/5511983165618"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-get-started">
            Vamos conversar?
            </button>
          </a>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img">
          <img src={logo} className="img-fluid animated" alt="" width="90%"  />
        </div>
      </div>
    </div>
  </section>
);

export default Presentation;
