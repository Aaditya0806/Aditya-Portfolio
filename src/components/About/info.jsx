import React from 'react'

const info = () => {
  return (
    <div className='about-info grid'>
      <p className='html-tag o-a-div'> &lt;div	&gt;</p>
        <div className='info-box'>
        <i class="ri-award-line info-icon"></i>
           <h3 className='info-title'>Experience</h3>
           <span className='info-subtitle'>Final year Student</span>
        </div>
        <div className='info-box'>
        <i class="ri-database-2-line info-icon"></i>
           <h3 className='info-title'>Complete</h3>
           <span className='info-subtitle'>10+ Projects</span>
        </div>
        <div className='info-box'>
        <i class="ri-briefcase-line info-icon"></i>
           <h3 className='info-title'>Available</h3>
           <span className='info-subtitle'>For Job</span>
        </div>
        <p className='html-tag c-a-div'> &lt;/div	&gt;</p>
    </div>
  )
}

export default info
