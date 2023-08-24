import './App.css';
import Home from './Pages/Home/index.js';
import About from './Pages/AboutMe/index.js';
import Timeline from './Pages/Timeline/index.js';
import Projects from './Pages/Projects/index.js';
import Header from './Components/Header/index.js';
import Footer from './Components/Footer/index.js';
import { BrowserRouter, Routes, Route, HashRouter  } from "react-router-dom";
import React from 'react';


function App() {
  return (
    <div className="Main">
      <HashRouter>
      <Header/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Timeline' element={<Timeline/>}/>
          <Route path='/Projects' element={<Projects/>}/>
        </Routes>
      </div>
      <div style={{ position:'relative', bottom:0 }}>
        <Footer/>
      </div>
      </HashRouter>
    </div>
  );
}

export default App;
