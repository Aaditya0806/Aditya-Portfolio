import React from 'react'
import "./about.css"
import AboutImg from '../../assets/IMG/AboutMe-3.jpg'
import CV from '../../assets/Aditya-cv.pdf'
import Info from './info'

const about = () => {
  return (
   
      <section className='about-section ' id='about'>
         <div className='about-t-s'> 
         <p className='html-tag o-section'> &lt;section	&gt;</p>
         <p className='html-tag o-a-h1'> &lt;h1	&gt;</p>
         <h1 className='about-title'>
            About 
         </h1>
         <p className='html-tag c-a-h1'> &lt;/h1	&gt;</p>
         <p className='html-tag o-a-h2'> &lt;h2	&gt;</p>
         <h1 className=' about-subtitle'> <button className='about-bounce a-M'>M</button>
          <button className='about-bounce a-y'>y</button> <button className='about-bounce a-coma'>,</button>
         <button className='about-bounce a-MM'>M</button><button className='about-bounce a-yy'>y</button>
         <button className='about-bounce a-s'>s</button><button className='about-bounce a-e'>e</button>
         <button className='about-bounce a-l'>l</button><button className='about-bounce a-f'>f</button>
         <button className='about-bounce a-and'>&</button><button className='about-bounce a-I'>I</button>
         </h1>
         <p className='html-tag c-a-h2'> &lt;/h2	&gt;</p>
         </div>
         
         <div className='about-container grid'>
         <p className='html-tag o-a-img'> &lt;img</p>
             <div className='about-img-bg'>
            <img src={AboutImg} className="about-img" alt='Profile-Pic' />
            </div>
            <p className='html-tag c-a-img'> /&gt;</p>
            <div className='about-data'>
              <Info/>
              <p className='html-tag o-a-p'> &lt;p	&gt;</p>
              <div className='about-des'>Currently, I am in final year
                CSE Branch at OIST(Bhopal), C.G.P.A-7.9/10.I have done projects
                in developing website and Programming language(Java).
                I have understanding of DSA and problem solving skills.<br/>
                One of the most interesting things about me, it's the fact
                that I'm always ready for any challenges that comes to my way. Here's
                my CV below for more details.

                </div>
                <p className='html-tag c-a-p'> &lt;p	&gt;</p>
                <a download="" href={CV} className="about-button">Download CV 
                <span><i class="ri-profile-line"></i></span>
                </a>
            </div>

         </div>
            <p className='html-tag c-section'> &lt;/section	&gt;</p>
      </section>
   
  )
}

export default about
