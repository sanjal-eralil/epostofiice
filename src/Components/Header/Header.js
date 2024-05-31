import React from 'react'
import './Header.css'

function Header() {
  return (
    <div>
     
        
       <header className="header"> 
        {/* <a href="#" class="logo"><img src="../../../public/Images/postlogo.jpeg" alt="image"/></a>  */}
        {/* <div className='Imagelogo'>
        <img src="Images/postlogo.jpeg" alt="image"/></div> */}
        <nav className="navbar">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Service</a>
            <a href="#">Contact</a>
            
        </nav>
    </header>
    </div>
  )
}

export default Header
