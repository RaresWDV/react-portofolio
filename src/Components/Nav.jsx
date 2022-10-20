import React from 'react'

function Nav() {
  return (
    <nav>
     <div className="links">
          <a href="#home">RARES</a>
          <a href="#work">WORK</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT</a>
     </div>
     <div className="social">
          <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-solid fa-phone"></i></a>
     </div>
    </nav>
  )
}

export default Nav