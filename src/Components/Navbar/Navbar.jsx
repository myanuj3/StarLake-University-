import React, { useEffect, useState } from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';


export const Navbar = () => {
  let [sticky,setSticky]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);
    
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

 

  return (
    <nav className={`container ${sticky ? 'dark-nav':''}`}>
      <h1>StarLake University</h1>
      <ul className={mobileMenu ? '' :'hide-mobile-menu'}>
      <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
      <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
      <li><Link to='about' smooth={true} offset={-160} duration={500}>About us</Link></li>
      <li><Link to='campus ' smooth={true} offset={-260} duration={500}>Campus</Link></li>
      <li><button className='btn'><Link to='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></button></li>
      </ul>
         <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
   </nav>

  )

}
