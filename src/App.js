import './App.css';
import Home from './Pages/Home/index.js';
import About from './Pages/AboutMe/index.js';
import Timeline from './Pages/Timeline/timeline.js';
import Projects from './Pages/Projects/index.js';
import Header from './Components/Header/index.js';
import Footer from './Components/Footer/index.js';
import { Routes, Route, HashRouter  } from "react-router-dom";
import React from 'react';
import colors from './Components/Constants/colorscheme';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const customDarkTheme  = () => ({
  palette: {
    primary: {
      main: colors[1],
    },
    secondary: {
      main: colors[2],
    },
    background: {
      default: colors[2],
      paper: colors[1],
    },
    text: {
      primary: colors[2],
      secondary: colors[2],
    },
  },
});

const customTheme = createTheme(customDarkTheme());

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <HashRouter basename="/">
      <div className="Main" style={{backgroundColor: colors[1]}}>
        <div>
          <Header/>
        </div>
        <div className='pageContent'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Timeline' element={<Timeline/>}/>
            <Route path='/Projects' element={<Projects/>}/>
          </Routes>
        </div>
        <div className='footerContent'>
          <Footer/>
        </div>
      </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
