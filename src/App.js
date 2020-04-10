import React from 'react';
import {HashRouter} from "react-router-dom";

import './App.css';
import Navbar from './components/navbar'
import Header from './components/header'
import About from './components/about';
import Services from './components/services';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar></Navbar>
        <Header></Header>
        <About></About>
        <Services></Services>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </HashRouter>
  );
}

export default App;
