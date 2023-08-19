import './App.css';
import Home from './Pages/Home/index.js';
import About from './Pages/AboutMe/index.js';
import Timeline from './Pages/Timeline/index.js';
import Projects from './Pages/Projects/index.js';
import Header from './Components/Header/index.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="Main">
      <BrowserRouter>
      <Header/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Timeline' element={<Timeline/>}/>
          <Route path='Projects' element={<Projects/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
