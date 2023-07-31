import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import "../styles/Carousel.css"

// import ui_ux_svg from "../assets/ui-ux.svg"
// import web_design_svg from "../assets/web-desgin.svg"
// import app_design_svg from "../assets/app-desgin.svg"

function CarouselC() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  }

  return (
    <div className="carousel-container">
      <Carousel
        responsive={responsive}
        swipeable={true}
        infinite={true}
        draggable={true}
      >
        <div>
          <div className="service-item">
            <span className="service-item-logo logo-count-1">
              {/* <img src={project_management_svg} alt="service" /> */}
            </span>
            <h4>Project Management</h4>
            <p>
              Proven expertise in managing complex technical projects and
              cross-functional teams from inception to completion.
            </p>
          </div>
        </div>
        <div>
          <div className="service-item">
            <span className="service-item-logo logo-count-2">
              {/* <img src={full_stack_dev_svg} alt="service" /> */}
            </span>
            <h4>Full Stack Development</h4>
            <p>
              Comprehensive skills in both front-end and back-end technologies,
              including HTML, CSS, JavaScript, React, Python, Node.js, Django,
              MongoDB, and Express.
            </p>
          </div>
        </div>
        <div>
          <div className="service-item">
            <span className="service-item-logo logo-count-3">
              {/* <img src={img} alt="service" /> */}
            </span>
            <h4>Agile Methodologies</h4>
            <p>
              Proficient in implementing Agile methodologies such as Scrum and
              Kanban for effective project management and team collaboration.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselC
