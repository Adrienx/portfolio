import "../reset.css"
import "../styles/Portfolio.css"

import "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import Carousel from "./Carousel"

function Portfolio() {
  return (
    <div>
      <section id="portfolio" className="portfolio-section">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="portfolio-title-container">
              <div className="section_title">
                <p>My Portfolio</p>
              </div>
            </div>
            <div className="portfolios-cont">
              <Carousel />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
