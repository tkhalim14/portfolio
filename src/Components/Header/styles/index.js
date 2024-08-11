import colors from '../../Constants/colorScheme.js';

const SideNavWidth = '4vw';

const TopNavToolbarStyles = {
  margin: `0 2rem 0 ${SideNavWidth}`
};

const SideNavStyle = {
  position: 'fixed',
  top: 0,
  height:'100%',
  width: SideNavWidth,
  backgroundColor: colors[1],
  borderRight: '0.1rem solid white',
  zIndex: 2,
};

const NavbarTitleStyle = {
  mr: 2,
  display: 'flex',
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.2rem',
  textDecoration: 'none',
  color: colors[2],
  justifyContent: 'center'
};

export { NavbarTitleStyle, SideNavStyle, TopNavToolbarStyles, SideNavWidth } ;