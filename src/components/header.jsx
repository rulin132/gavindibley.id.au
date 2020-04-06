import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
    <header className="masthead" id="intro">
        <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
            <h1 className="text-uppercase font-weight-bold"><img src="/images/logo.png" alt="Gavin Dibley" /></h1>
            <hr className="divider my-4" />
            </div>
            <div className="col-lg-8 align-self-baseline">
            <p className=" font-weight-light mb-5">Professional website design and development</p>
            </div>
        </div>
        </div>
        </header>
    )
  }
}