import "../reset.css"
import "../styles/Hero.css"

import TypeWriterEffect from "react-typewriter-effect"

function Hero() {
  return (
    <div>
      <section className="hero-section" id="home">
        <div className="container-xl">
          <div className="row">
            <div className="col hero-text">
              <TypeWriterEffect
                textStyle={{ fontFamily: "Segoe UI" }}
                startDelay={100}
                cursorColor="black"
                text="Adrien Le Gendre"
                typeSpeed={100}
                hideCursorAfterText={true}
              />

              <h3>Solutions Architect & Technical Program Manager</h3>
              <p>
                Solutions Architect & Technical Program Manager leveraging a
                robust history in technology and Agile methodologies to drive
                successful projects and streamline processes. Expert in
                harmonizing teams, bridging gaps between technical and
                non-technical roles, and translating complex concepts into
                accessible language.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
