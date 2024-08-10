import * as React from 'react';
import './styles/index.css';
import SideNav from './components/sideNav.js';
import TopNav from './components/topNav.js';

const Header = () => {

  return (
    <React.Fragment>
      <TopNav/>
      <SideNav/>
    </React.Fragment>
  );
}
export default Header;