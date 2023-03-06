import React from 'react'
import "./portfolio.css"
import Projects from "./projects"

const portfolio = () => {
  return (
    <section className='Portfolio-section' id='projects'>
      <p className='html-tag o-p-section'> &lt;section	&gt;</p>
      <p className='html-tag o-p-h1'> &lt;h1	&gt;</p>
      <h1 className='portfolio-title'>Projects</h1>
      <p className='html-tag c-p-h1'> &lt;/h1	&gt;</p>
      <p className='html-tag o-p-h2'> &lt;h2	&gt;</p>
      <h1 className='portfolio-subtitle'>
           <button className='portfolio-bounce p-M'>M</button> <button className='portfolio-bounce p-y'>y</button> 
           <button className='portfolio-bounce p-P'>P</button>  <button className='portfolio-bounce p-o'>o</button> 
           <button className='portfolio-bounce p-r'>r</button>  <button className='portfolio-bounce p-t'>t</button> 
           <button className='portfolio-bounce p-f'>f</button>  <button className='portfolio-bounce p-oo'>o</button> 
           <button className='portfolio-bounce p-l'>l</button>  <button className='portfolio-bounce p-i'>i</button> 
           <button className='portfolio-bounce p-ooo'>o</button>  
      </h1>
      <p className='html-tag c-p-h2'> &lt;/h2	&gt;</p>
      <p className='html-tag o-p-img'> &lt;img</p>
      <Projects/>
      <p className='html-tag c-p-img'> 	/&gt;</p>
      <p className='html-tag c-p-section'> &lt;section	&gt;</p>
    </section>
  )
}

export default portfolio
