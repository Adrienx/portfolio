import { Clipboard2Check, PatchCheck, People } from "react-bootstrap-icons"
import "../reset.css"
import "../styles/Overview.css"

function Overview() {
  return (
    <div>
      <section className="overview-section">
        <div className="container-xxl">
          <div className="overview-items">
            <div className="row">
              {/* Item 1 */}
              <div className="overview-item">
                <div className="overview-icon">
                  {/* verified icon */}
                  <PatchCheck />
                </div>
                <div className="overview-text">
                  <h3>8+ Years</h3>
                  <p>In Technical Program Mgt</p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="overview-item">
                <div className="overview-icon">
                  {/* clipboard icon */}
                  <Clipboard2Check />
                </div>
                <div className="overview-text">
                  <h3>60+ High-Impact Solutions</h3>
                  <p>Architected and Deployed</p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="overview-item">
                <div className="overview-icon">
                  {/* support icon */}
                  <People />
                </div>
                <div className="overview-text">
                  <h3>Proven Track Record </h3>
                  <p>Leading High-Performing Remote Teams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Overview
