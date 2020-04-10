import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import Scrollspy from "react-scrollspy";

export default class Navbar extends Component {
  state = {
    isTop: true,
  };

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;

      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });
  }

  isActive() {
    return 'navbar navbar-expand-lg navbar-light fixed-top py-3 btn '+ (!this.state.isTop ? 'navbar-scrolled' : '');
  }

  render() {
    return (
      <nav className={this.isActive()} id="mainNav">
        <div className="container">
          <Link exact="true" to="/" className="navbar-brand">
            <img src="/images/logo.webp" style={{height: "26px"}} alt="Gavin Dibley" />
          </Link>

          <button 
              className="navbar-toggler navbar-toggler-right" 
              type="button" 
              data-toggle="collapse" 
              data-target="#navbarResponsive" 
              aria-controls="navbarResponsive" 
              aria-expanded="false" 
              aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <Scrollspy 
                items={ ['about', 'services', 'portfolio', 'contact'] } 
                className="navbar-nav ml-auto my-2 my-lg-0" 
                currentClassName="active">
              <li className="nav-item">
                <Link smooth to="/#about" className="nav-link">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link smooth to="/#services" className="nav-link">
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link  smooth to="/#portfolio" className="nav-link">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link smooth to="/#contact" className="nav-link">
                  Contact Me
                </Link>
              </li>
            </Scrollspy>
          </div>
        </div>
      </nav>
    )
  }
}