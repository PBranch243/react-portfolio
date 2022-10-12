import React from 'react';
// import Nav from './components/Nav' 
import About from './components/About'
import Project1 from './components/Project1'
import Project2 from './components/Project2'
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
        <Project1></Project1>
        <Project2></Project2>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
