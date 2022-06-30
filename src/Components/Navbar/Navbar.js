import React from 'react'
import "./Navbar.css"
import { useState } from 'react'
import { useEffect } from 'react';
function Navbar() {
  const [showNavbar,setShowNavbar] =useState(false);

  function navbarTransition(){
    if(window.scrollY>100){
      setShowNavbar(true)
    }
    else{

      setShowNavbar(false)
    }
    console.log(window.scrollY,showNavbar);

  }

useEffect(() => {
window.addEventListener("scroll",navbarTransition)
})


  return (
    <nav  className={`navbar ${showNavbar && "showNavbar"}`}>
        <div className='navbarContents' >
          <img
            src={require('../../assets/Netflix-Logo.png')}
            alt=''
            className='navbarLogo'
       
          />
          <img
            src={require('../../assets/Avatar.png')}
            alt=''
            className='navbarAvatar'

          />
        </div>

    </nav>
  )
}

export default Navbar