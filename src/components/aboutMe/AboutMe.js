import React, { Component } from "react";
import ImageAbout from "../img/dgs1.jpeg";
import Image from "../img/coder.png"

class AboutMe extends Component {
  render() {
    return (
      <section
        id="about"
        className="container-fluid about row d-flex justify-content-between"
      >
        <div className="col-lg-6 d-flex align-items-center justify-content-center about-img">
          <img
            src={ImageAbout}
            alt="about-image"
            className="img-fluid col-12"
            data-aos="zoom-in"
            style={{ width: "100%", height: "100%"}}
          />
        </div>
        <div className="col-lg-6 pt-5 pt-lg-0">
        
          <h3 data-aos="fade-up">Sobre mim</h3>
          <br />
          <p data-aos="fade-up">
            Sou Desenvolvedor de Software Full Stack nas seguintes tecnologias: HTML, CSS, JavaScript (ES6+), Typescript, ReactJS, React Native, Nodejs. Me
            dedico e estudo diariamente com foco e empenho para desenvolver projetos de excelência que geram valor e como resultado se destacar no mercado de tecnologia. Estou em constante
            aprendizado, criando projetos pessoais, participando de bootcamps, cursos, desafios, hackathons e procuro fazer freelancer de design gráfico, desenvolvimentos de sites e aplicativos mobile.
          </p>
          <p data-aos="fade-up">
            Algumas outras tecnologias que tenho interesse em ser especialista: Lógica de programação, Estrutura de dados, Banco de dados, AWS, Google Cloud, Ibm Cloud, Wordpress, PHP, Bootstrap, Git e GitHub, REST APIs, Mysql, MongoDB,
            Docker, kurbenetes, Container Linux, Kotlin, Java e Mobile.
          </p>

          <p data-aos="fade-up">
            <a
              href="https://www.linkedin.com/in/dgsdouglaspinheiro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="btn btn-get-cv">
               Confira meu CV
              </button>
              <div className="col-lg-6">
          <img
            src={Image}
            alt="image"
            className="img-fluid col-12"
            data-aos="zoom-in"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
            </a>
          </p>
        </div>
      </section>
    );
  }
}

export default AboutMe;
