import "../reset.css"
import "../styles/Contact.css"

import { Github, Linkedin } from "react-bootstrap-icons"

function Contact() {
  return (
    <div>
      <section id="contact" className="contact-section">
        <div className="container-xl">
          <div className="contact-info-cont">
            <div className="contact-info">
              <div className="section_title">
                <p>Let&apos;s Connect</p>
              </div>
              <ul className="contact-social">
                <li>
                  <a href="https://www.linkedin.com/in/legend1/">
                    <Linkedin />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Adrienx">
                    <Github />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
