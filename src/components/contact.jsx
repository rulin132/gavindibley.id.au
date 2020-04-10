import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default class Contact extends Component {
  render() {
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0">Let's Get In Touch!</h2>

              <hr className="divider my-4" />

              <p className="text-muted mb-5">
                Ready to start your next project with me? Give me a call or send an email and I'll get back to you as 
                soon as possible!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
              <a href="tel:+61431050539">
                <FontAwesomeIcon icon={faPhone} className=" fa-3x mb-3 text-muted" /><br />
                0431-050-539
              </a>
            </div>
            <div className="col-lg-4 mr-auto text-center">
              <a className="d-block" href="mailto:gavin@gavindibley.id.au">
                <FontAwesomeIcon icon={faEnvelope} className=" fa-3x mb-3 text-muted" /><br />
                gavin@gavindibley.id.au
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}