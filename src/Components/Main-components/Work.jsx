import React from 'react'
import WorkBox from '../WorkBox'
import WorkBoxImage from '../WorkBoxImage'

function Work() {
  return (
    <section className='work' id='work'>
        <div className="section-title">
          My Work
        </div>
        <div className="section-content">
            <WorkBox />
            <WorkBox />
            <WorkBox />
            <WorkBox />
        </div>
    </section>
  )
}

export default Work