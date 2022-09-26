import React from 'react';
// import Nav from './components/Nav' 
import About from './components/About'
import Project from './components/Project'
import Header from './components/Header'
import Footer from './components/Footer'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const styles = {
  body: {
    backgroundColor: '#124B5C'
  }
}

function App() {
  return (
    <div className={"primary"} style={styles.body}>
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
