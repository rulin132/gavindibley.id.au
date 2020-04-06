import React, { Component } from 'react'

/* TODO move into portfolio folder */
export default class Portfolio extends Component {
  render() {
    return (
    <section id="portfolio" className="page-section">
    <div className="container-fluid p-0">{/* TODO refactor into components */}
      <div className="row no-gutters">
        <div className="col-lg-4 col-sm-6">
          <div className="portfolio-box">{/* TODO add popup modal with project details */}
            <img className="img-fluid" src="images/portfolio/thumbnails/1.webp" alt="" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
                Brand Website
              </div>
              <div className="project-name">
                Adviser Centre
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="portfolio-box">{/* TODO add popup modal with project details */}
            <img className="img-fluid" src="images/portfolio/thumbnails/2.webp" alt="" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
                Brand Website
              </div>
              <div className="project-name">
                Future Wealth Creations
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="portfolio-box">{/* TODO add popup modal with project details */}
            <img className="img-fluid" src="images/portfolio/thumbnails/3.webp" alt="" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
                Web Application
              </div>
              <div className="project-name">
                Adviser Centre Application

              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="portfolio-box">{/* TODO add popup modal with project details */}
            <img className="img-fluid" src="images/portfolio/thumbnails/4.webp" alt="" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
                Brand Website
              </div>
              <div className="project-name">
                Terri Scott Accounting
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="portfolio-box">{/* TODO add popup modal with project details */}
            <img className="img-fluid" src="images/portfolio/thumbnails/5.webp" alt="" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
                  Live Streaming Website
              </div>
              <div className="project-name">
                VPA
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
        <div className="portfolio-box">{/* TODO add popup modal with project details */}
            <img className="img-fluid" src="images/portfolio/thumbnails/6.webp" alt="" />
            <div className="portfolio-box-caption p-3">
              <div className="project-category text-white-50">
                Brand Website
              </div>
              <div className="project-name">
                Get out of Sydney
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
  }
  }