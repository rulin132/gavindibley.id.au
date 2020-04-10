import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-light py-5">
        <div className="container">
          <div className="small text-center text-muted">
            Copyright &copy; 2020 - Gavin Dibley
          </div>
        </div>
      </footer>
    )
  }
}