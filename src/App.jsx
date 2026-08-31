import './App.css';
import Home from './Pages/Home/index';
import About from './Pages/AboutMe/index';
import Timeline from './Pages/Timeline/timeline';
import Projects from './Pages/Projects/index';
import Header from './Components/Header/index';
import Footer from './Components/Footer/index';
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
