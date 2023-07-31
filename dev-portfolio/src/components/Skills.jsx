import "../reset.css"
import "../styles/Skills.css"

import html5 from "../assets/bxl-html5.svg"
import css3 from "../assets/bxl-css3.svg"
import javascript from "../assets/bxl-javascript.svg"
import reactjs from "../assets/bxl-react.svg"
import nodejs from "../assets/bxl-nodejs.svg"
import express from "../assets/bxl-express.svg"
import mongodb from "../assets/bxl-mongodb.svg"
import figma from "../assets/bxl-figma.svg"
import python from "../assets/bxl-python.svg"
import django from "../assets/bxl-django.svg"
import postgresql from "../assets/bxl-postgresql.svg"
import linux from "../assets/bxl-linux.svg"

function Skills() {
  return (
    <div>
      <section id="skills" className="skills-section">
        <div className="container-xl">
          <div className="section_title">
            <p>My TechStack</p>
          </div>
          <div className="skill-items">
            <div className="container">
              <div className="row">
                <div className="col-sm text-center">
                  <img src={html5} alt="html5" />
                  <p>HTML</p>
                </div>
                <div className="col-sm text-center">
                  <img src={css3} alt="css3" />
                  <p>CSS</p>
                </div>
                <div className="col-sm text-center">
                  <img src={javascript} alt="javascript" />
                  <p>JavaScript</p>
                </div>
                <div className="col-sm text-center">
                  <img src={reactjs} alt="reactjs" />
                  <p>React</p>
                </div>
                <div className="col-sm text-center">
                  <img src={nodejs} alt="nodejs" />
                  <p>NodeJS</p>
                </div>
                <div className="col-sm text-center">
                  <img src={express} alt="nodejs" />
                  <p>Express</p>
                </div>
                <div className="col-sm text-center">
                  <img src={mongodb} alt="mongodb" />
                  <p>MongoDB</p>
                </div>
                <div className="col-sm text-center">
                  <img src={python} alt="python" />
                  <p>Python</p>
                </div>
                <div className="col-sm text-center">
                  <img src={django} alt="django" />
                  <p>Django</p>
                </div>
                <div className="col-sm text-center">
                  <img src={postgresql} alt="postgresql" />
                  <p>Postgresql</p>
                </div>
                <div className="col-sm text-center">
                  <img src={figma} alt="figma" />
                  <p>Figma</p>
                </div>
                <div className="col-sm text-center">
                  <img src={linux} alt="linux" />
                  <p>Linux</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
