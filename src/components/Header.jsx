import React from 'react'
// import { NavLink,Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
export default function Header(){
    const [navFixed,setNavFixed] = React.useState()
 
  const changeNavBg = () => {
      window.scrollY > 5 && window.scrollY>0 ? setNavFixed(true) : setNavFixed(false);
      console.log(navFixed)
     }    
  React.useEffect(() => {
      window.addEventListener('scroll', changeNavBg);
    }, [])
    return(
        <nav className = {navFixed?'nav-ctn scrolled':'nav-ctn'} id ='header'>
            <h2>DL</h2>
            {/* usde to be spans */}
            <AnchorLink href = '#home' offset='500'>Home</AnchorLink>
            <AnchorLink href = '#about'>About</AnchorLink>
            <AnchorLink href = '#experience'>Experience</AnchorLink>
            <AnchorLink href = '#work'>Work</AnchorLink>
            <AnchorLink href ='#contact'>Contact</AnchorLink>
            

        </nav>
    )
}