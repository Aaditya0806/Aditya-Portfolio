import React from 'react'
import "./skill.css"

const programming = () => {
  return (
    <div className='skill-content'>
        <h3 className='skill-content-title'>Programming & Library</h3>
  
        <div className='skill-box'>
           <div className='skill-data'>
               <p><i class="ri-braces-line skill-icon"></i>Java</p>
               <p className='level'>Advance</p>

           </div>
           <div className='skill-bar'>
               <span className='java'></span>
           </div>
        </div>
        <div className='skill-box'>
           <div className='skill-data'>
               <p> <i class="ri-braces-line skill-icon"></i>JavaScript</p>
               <p className='level'>Intermediate</p>

           </div>
           <div className='skill-bar'>
               <span className='javaScript'></span>
           </div>
        </div>
        <div className='skill-box'>
           <div className='skill-data'>
               <p><i class="ri-parentheses-fill skill-icon "></i>Python</p>
               <p className='level'>Basic</p>

           </div>
           <div className='skill-bar'>
               <span className='python'></span>
           </div>
        </div>
        <div className='skill-box'>
           <div className='skill-data'>
               <p><i class="ri-reactjs-line skill-icon"></i>React JS</p>
               <p className='level'>Intermediate</p>

           </div>
           <div className='skill-bar'>
               <span className='reactjs'></span>
           </div>
        </div>

    </div>
  )
}

export default programming
