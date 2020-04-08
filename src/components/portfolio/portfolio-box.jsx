import React, { Component } from 'react'

export default class PortfolioBox extends Component {
  render() {
    return (
          <div className="portfolio-box">{/* TODO add popup modal with project details */}
            <img className="img-fluid" src={this.props.image} alt="" />
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
                {this.props.categoryName}
              </div>
              <div className="project-name">
                {this.props.projectName}
              </div>
            </div>
          </div>
  )
  }
  }