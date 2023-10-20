import './App.css';
import Home from './Pages/Home/index.js';
import About from './Pages/AboutMe/index.js';
import Timeline from './Pages/Timeline/index.js';
import Projects from './Pages/Projects/index.js';
import Header from './Components/Header/index.js';
import Footer from './Components/Footer/index.js';
import { Routes, Route, HashRouter  } from "react-router-dom";
import React from 'react';


function App() {
  return (
    <HashRouter basename="/">
    <div className="Main">
      <div>
        <Header/>
      </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Timeline' element={<Timeline/>}/>
          <Route path='/Projects' element={<Projects/>}/>
        </Routes>
      <div style={{ position:'relative', bottom:0 }}>
        <Footer/>
      </div>
    </div>
    </HashRouter>
  );
}

export default App;
