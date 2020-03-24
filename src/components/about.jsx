import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
export default class About extends Component {
  render() {
    return (
        <section className="page-section bg-primary" id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-white mt-0">About Me</h2>
                        <hr className="divider light my-4" />
                        <p className="text-white-50 mb-4">My name is Gavin Dibley and I'm a professional website designer and developer located on the Central Coast.</p>

                        <p className="text-white-50 mb-4">
                            I have over a decade of professional experience in website development and have worked with a variety of clients big and small 
                            this includes clients in the government, education industry, financial sector and large multi-national organisations, there is no job too big or small.</p>

                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <a href="https://github.com/rulin132"><FontAwesomeIcon icon={faGithub} className=" fa-4x mb-3 text-white" /></a>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}