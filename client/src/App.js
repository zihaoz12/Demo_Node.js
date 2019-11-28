import React from 'react';
import './App.css';
import Main from './Views/Main.js';
import Header from './Component/Header';
import Footer from './Component/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>   
    </div>
  );
}

export default App;
