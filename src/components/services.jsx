import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem, faLaptopCode, faGlobe, faHeart } from '@fortawesome/free-solid-svg-icons'

export default class Services extends Component {
  render() {
    return (
      <section className="page-section" id="services">
        <div className="container">
          <h2 className="text-center mt-0">Skills</h2>
          <hr className="divider my-4" />
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <FontAwesomeIcon icon={faGem} className="fa-4x fa-gem text-primary mb-4" />

                <h3 className="h4 mb-2">
                  Programming Languages I know
                </h3>
                <p className="text-muted mb-0">
                  PHP, Python, Node.js... I am nothing but adaptive.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <FontAwesomeIcon icon={faLaptopCode} className="fa-4x fa-gem text-primary mb-4" />

                <h3 className="h4 mb-2">
                  All the way to the front
                </h3>
                <p className="text-muted mb-0">
                  React.js, Vue, Angular... even old school jQuery.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <FontAwesomeIcon icon={faGlobe} className="fa-4x fa-gem text-primary mb-4" />

                <h3 className="h4 mb-2">
                  Push It
                </h3>
                <p className="text-muted mb-0">
                  I use git, CD, docker, vagrant.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <FontAwesomeIcon icon={faHeart} className="fa-4x fa-gem text-primary mb-4" />

                <h3 className="h4 mb-2">
                  Made with Love
                </h3>
                <p className="text-muted mb-0">
                  Even with deadlines looming, all code is carefully thought out, tested and reviewed 
                  using tools such as IDE plugins, PHP Unit, Jasmine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}