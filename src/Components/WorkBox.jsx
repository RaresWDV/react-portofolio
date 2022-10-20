import React from 'react'
import image from '../images/image.png';

function WorkBox() {
  return (
    <div class='workbox'>
        <div className="left-content">
          <div className="project-number">
               <div>01.</div>
               <div className='line'></div>
          </div>
          <div className="project-details">
               <div className="name">Sams`s Gym</div>
               <div className="description">
               Led the full design process on a multi million dollar domain for a fintech company that is redefining the world of payments.
               </div>
               <div className="image">
                   <img src={image} alt="" />
               </div>
               <div className="role">
                    <span>Role:</span> Designer, Developer, SEO
               </div>
               <a href="#">Watch Site</a>
          </div>
        </div>

        <div className="right-content">
          <img src={image} alt="" />
        </div>
    </div>
  )
}

export default WorkBox