import './App.css';
import Home from './Pages/Home';
import About from './Pages/AboutMe';
import Timeline from './Pages/Timeline';
import Projects from './Pages/Projects';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Routes, Route, HashRouter  } from "react-router-dom";
import React from 'react';
import colors from './Components/Constants/colorscheme';
import { ThemeProvider, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { customTheme } from './theme';

const HeaderSpacing = styled(Box)(({theme})=>({
  ...theme.mixins.toolbar,
}));

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <HashRouter basename="/">
      <div className="Main" style={{backgroundColor: colors[1]}}>
        <div>
          <Header/>
        </div>
        <div className='pageContent'>
          <HeaderSpacing/>
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
