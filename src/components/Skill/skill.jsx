import React from 'react'
import './skill.css'
import Programming from './programming'
import Technology from './technology'

const skill = () => {
  return (
    <section className='skill-section' id='skills'>
      <p className='html-tag s-o-section'> &lt;section	&gt;</p>
      <p className='html-tag s-o-h1'> &lt;h1	&gt;</p>
         <h1 className='skill-title'>
            Skills
         </h1>
         <p className='html-tag s-c-h1'> &lt;/h1	&gt;</p>
         <p className='html-tag s-o-h2'> &lt;h2	&gt;</p>
         <h1 className='skill-subtitle'>
          
            <button className='skill-bounce s-M' >M</button> <button className='skill-bounce s-y' >y</button>
            <button className='skill-bounce s-T' >T</button> <button className='skill-bounce s-e' >e</button>
            <button className='skill-bounce s-c' >c</button> <button className='skill-bounce s-h' >h</button>
            <button className='skill-bounce s-n' >n</button> <button className='skill-bounce s-i' >i</button>
            <button className='skill-bounce s-cc' >c</button> <button className='skill-bounce s-a' >a</button>
            <button className='skill-bounce s-l' >l</button> <button className='skill-bounce s-L' >L</button>
            <button className='skill-bounce s-ee' >e</button> <button className='skill-bounce s-v' >v</button>
            <button className='skill-bounce s-eee' >e</button> <button className='skill-bounce s-ll' >l</button> 
         </h1>
         <p className='html-tag s-c-h2'> &lt;/h2	&gt;</p>
         <div className='skill-container grid '>
         <p className='html-tag s-o-div'> &lt;div	&gt;</p>
           <Programming/>
           <Technology/>
         </div>
           <p className='html-tag s-c-div'> &lt;/div	&gt;</p>
           <p className='html-tag s-c-section'> &lt;/section	&gt;</p>
    </section>
  )
}

export default skill
