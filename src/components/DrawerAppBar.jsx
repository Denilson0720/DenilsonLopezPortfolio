import * as React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useScrollTrigger from '@mui/material/useScrollTrigger';

const drawerWidth = 240;

function DrawerAppBar(props) {
  const trigger = useScrollTrigger();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center',height:'100%'}} bgcolor={'#0a3032'} className='drawer-ctn'>
        <h3>DL</h3>
        {/* <Divider/> */}

        <AnchorLink href = '#home' offset='500'>Home</AnchorLink>
        <AnchorLink href = '#about'>About</AnchorLink>
        <AnchorLink href = '#experience'>Experience</AnchorLink>
        <AnchorLink href = '#work'>Work</AnchorLink>
        <AnchorLink href ='#contact'>Contact</AnchorLink>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* navbar contiainer */}
      <AppBar component="nav" color='transparent'>
        <Toolbar className={trigger?'navbar-ctn scrolled':'navbar-ctn'}>
          {/* <h2 className ='short-logo'>DL</h2> */}
          {/* <h2 className='long-logo'>Denilson Lopez</h2> */}
            <AnchorLink href = '#home' className = 'short-logo'>DL</AnchorLink>
            <AnchorLink href = '#home' className = 'long-logo'>Denilson Lopez</AnchorLink>
            {/* display=none when mobile */}
            <AnchorLink href = '#home' offset='500'>Home</AnchorLink>
            <AnchorLink href = '#about'>About</AnchorLink>
            <AnchorLink href = '#experience'>Experience</AnchorLink>
            <AnchorLink href = '#work'>Work</AnchorLink>
            <AnchorLink href ='#contact'>Contact</AnchorLink>
          {/* accordion button, toggle drawer */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>  
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor='right'
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    
    </Box>
  );
}

// DrawerAppBar.propTypes = {

//   window: PropTypes.func,
// };

export default DrawerAppBar;
