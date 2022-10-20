import React from 'react'
import Home from './Main-components/Home'
import Work from './Main-components/Work'

function Main() {
  return (
    <main>
       <div className="left bg"></div>
       <div className="right bg"></div>
       <Home />
       <Work />
    </main>
  )
}

export default Main