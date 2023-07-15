
import './App.css';
import Welcome from './components/welcome';
import Nav from './components/nav'
import Heading from './components/header'
import Footer from './components/footer'
import React from "react";

function App() {
  return (
    <div className="App">
           <Nav  title="home" />
           <Heading/>
           <Welcome/>
          <Footer/>
    </div>
  );
}

export default App;
