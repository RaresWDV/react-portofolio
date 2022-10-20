import React from 'react'
import image1 from'../../images/img3.png'

function Home() {
  return (
    <section className='home page' id='home'>
        <div className="left-section-content">
             <div className="title">
               <span>Hi there, I`m</span>
               <span>Eva Rares</span>
               <span>Full Stack Developer</span>
             </div>

             <div className="description">
               I am passionate about solving
               business problems through
               human-centered design.
               Curious by nature and
               business-minded.
             </div>

             <a href="">Contact Me</a>
        </div>

        <div className="right-section-content">
           <img src={image1} alt="" />
           <a href="">Watch my projects</a>
        </div>
    </section>
  )
}

export default Home