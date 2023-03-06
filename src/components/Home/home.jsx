import React from 'react'
import "./home.css"
import Social from './social'
import Data from './data'

const home = () => {
  return (
    <div className='home-section' id='home'>
        <div className='home-container container grid'>
           <div className='home-content grid'>
              <Social/>
              <div className='home-img'>
              <p className='html-tag o-img'> &lt;img </p>


              <p className='html-tag c-img'> /&gt; </p>

              </div>
              <Data/>
           </div>
        </div>
    </div>
  )
}

export default home