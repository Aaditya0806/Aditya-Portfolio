import React from 'react'
import "./skill.css"

const technology = () => {
  return (
    <div className='skill-content'>
    <h3 className='skill-content-title'>Technology & Other</h3>
   
       <div className='skill-box'>
           <div className='skill-data'>
               <p className='java-p'><i class="ri-html5-line skill-icon"></i>HTML</p>
               <p className='level'>Advance</p>

           </div>
           <div className='skill-bar'>
               <span className='Html'></span>
           </div>
        </div>
        <div className='skill-box'>
           <div className='skill-data'>
               <p> <i class="ri-css3-line skill-icon"></i>CSS</p>
               <p className='level'>Advance</p>

           </div>
           <div className='skill-bar'>
               <span className='Css'></span>
           </div>
        </div>
        <div className='skill-box'>
           <div className='skill-data'>
               <p><i class="ri-database-2-line skill-icon"></i>SQL</p>
               <p className='level'>Intermediate</p>

           </div>
           <div className='skill-bar'>
               <span className='Sql'></span>
           </div>
        </div>
        <div className='skill-box'>
           <div className='skill-data'>
               <p><i class="ri-cloudy-2-line skill-icon"></i>AWS</p>
               <p className='level'>Intermediate</p>

           </div>
           <div className='skill-bar'>
               <span className='AWS'></span>
           </div>
        </div>
</div>
  )
}

export default technology
