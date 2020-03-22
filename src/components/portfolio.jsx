import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
    return (
    <section id="portfolio" className="page-section">
    <div className="container-fluid p-0">
      <div className="row no-gutters">
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="javascript:void(0)">
            <img className="img-fluid" src="images/portfolio/thumbnails/1.jpg" alt="" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
                Brand Website
              </div>
              <div className="project-name">
                Adviser Centre
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="javascript:void(0)">
            <img className="img-fluid" src="images/portfolio/thumbnails/2.jpg" alt="" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
                Brand Website
              </div>
              <div className="project-name">
                Future Wealth Creations
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="javascript:void(0)">
            <img className="img-fluid" src="images/portfolio/thumbnails/3.jpg" alt="" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
                Web Application
              </div>
              <div className="project-name">
                Adviser Centre Application

              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="javascript:void(0)">
            <img className="img-fluid" src="images/portfolio/thumbnails/4.jpg" alt="" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
                Brand Website
              </div>
              <div className="project-name">
                Terri Scott Accounting
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="javascript:void(0)">
            <img className="img-fluid" src="images/portfolio/thumbnails/5.jpg" alt="" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
                  Live Streaming Website
              </div>
              <div className="project-name">
                VPA
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="javascript:void(0)">
            <img className="img-fluid" src="images/portfolio/thumbnails/6.jpg" alt="" />
            <div className="portfolio-box-caption p-3">
              <div className="project-category text-white-50">
                Brand Website
              </div>
              <div className="project-name">
                Get out of Sydney
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  )
  }
  }