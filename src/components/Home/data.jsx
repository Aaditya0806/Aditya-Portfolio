import React from 'react'
import "./home.css"
import Logo from "../../assets/IMG/logo.png"

const data = () => {
  return (
    <div className='home-data'>
      <p className='html-tag o-html'> &lt;html	&gt;</p>
      <p className='html-tag o-body'> &lt;body	&gt; </p>
      <p className='html-tag o-h1'> &lt;h1	&gt; </p>
      <h1 className='home-title'>  <button className='bounce H'>H</button> <button className='bounce e'>e</button> 
      <button className='bounce y'>y</button> <button className='bounce coma'>,</button> <button className='bounce I'>I</button>
       <button className='bounce collan'>'</button> <button className='bounce m'>m</button> <br/>
      {/* <button className='bounce A'>A</button>  */}
      <button className='bounce A '><img src={Logo} className="home-logo" /></button> 

      <button className='bounce d'>d</button> <button className='bounce i'>i</button>
       <button className='bounce t'>t</button> <button className='bounce yy'>y</button> <button className='bounce a'>a</button>
      <button className='bounce M'>M</button> <button className='bounce aa'>a</button> <button className='bounce l'>l</button> 
      <button className='bounce v'>v</button> <button className='bounce vi'>i</button> <button className='bounce ya'>y</button>
       <button className='bounce aM'>a</button>  </h1>
       <p className='html-tag c-h1'> &lt;h1/&gt; </p>
       <p className='html-tag o-h3'> &lt;h3&gt; </p>
       <p className='html-tag c-h3'> &lt;h3/&gt; </p>
       <p className='html-tag o-p1'> &lt;p&gt; </p>
      {/* <h1 className='home-title'></h1> */}
      <h3 className='home-subtitle'> <hr/>Front-End Developer <br/> 	&nbsp;	React JS|JavaScript  </h3>
      {/* <p className='home-des'> I am a Front-End Developer, and I am very passionate and dedicated to my work..</p> */}
      <p className='home-des'> I'm an ambitious Front-End Developer who's passionate about coding
                              and looking for a role in the established IT company with the
                              opportunity to work with the latest technologies on challenging and
                              diverse projects.
</p>
      <p className='html-tag c-p1'> &lt;p/&gt; </p>
      <p className='html-tag o-button1'> &lt;button&gt; </p>
      <div className='home-button'>
      <a href='#contact' className='button-link'>Say Hello <i class="ri-send-plane-line"></i>  </a>
      </div>
      <p className='html-tag c-button1'> &lt;button&gt; </p>
      <div className='home-scroll'>
           
           <span className='scroll-des'>Scroll down</span> 
           <span className='scroll-icon'>
             <i class="ri-arrow-down-circle-line">
           </i></span>
      </div>
    </div>
  )
}

export default data
