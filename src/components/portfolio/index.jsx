import React, { Component } from 'react'
import PortfolioBox from './portfolio-box'

export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio" className="page-section">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-lg-4 col-sm-6">
              <PortfolioBox 
                  image="images/portfolio/thumbnails/1.webp" 
                  categoryName="Brand Website" 
                  projectName="Adviser Centre"
              ></PortfolioBox>
            </div>
            <div className="col-lg-4 col-sm-6">
              <PortfolioBox 
                  image="images/portfolio/thumbnails/2.webp" 
                  categoryName="Brand Website" 
                  projectName="Future Wealth Creations"
              ></PortfolioBox>
            </div>
            <div className="col-lg-4 col-sm-6">
              <PortfolioBox 
                  image="images/portfolio/thumbnails/3.webp" 
                  categoryName="Web Application" 
                  projectName="Adviser Centre Application"
              ></PortfolioBox>
            </div>
            <div className="col-lg-4 col-sm-6">
              <PortfolioBox 
                  image="images/portfolio/thumbnails/4.webp" 
                  categoryName="Brand Website" 
                  projectName="Terri Scott Accounting"
              ></PortfolioBox>
            </div>
            <div className="col-lg-4 col-sm-6">
              <PortfolioBox 
                  image="images/portfolio/thumbnails/5.webp" 
                  categoryName="Live Streaming Website" 
                  projectName="VPA"
              ></PortfolioBox>
            </div>
            <div className="col-lg-4 col-sm-6">
              <PortfolioBox 
                  image="images/portfolio/thumbnails/6.webp" 
                  categoryName="Brand Website" 
                  projectName="Get out of Sydney"
              ></PortfolioBox>
              </div>
          </div>
        </div>
      </section>
    )
  }
}