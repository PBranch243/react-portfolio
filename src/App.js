import React from 'react';
import Nav from './components/Nav'  //think I can lose this since nav is contained in header
import About from './components/About'
import Project from './components/Project'
import Header from './components/Header'
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Project></Project>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
