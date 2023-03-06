import React , { useState, useEffect }from 'react'
// import ".../index.css"
import "./header.css"
import Logo from "../../assets/IMG/logo.png"


const Header = () => {

      const [scroll, setScroll] = useState("header");
      
      const changeScroll = () =>{
         if(window.scrollY >= 30){
            setScroll("header scroll-header");
         }else{
            setScroll("header");
         }
      };

      useEffect(() => {
         const header = document.getElementById('header')
         header.className= scroll;
      }, [scroll])

      window.addEventListener('scroll', changeScroll);


      document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
              anchor.addEventListener("click", function(e){
               e.preventDefault();
               document.querySelector(this.getAttribute("href")).scrollIntoView({
                  behavior : "smooth"
               })
              })
      })

  return (
    <header className='header' id='header'>
         <nav className='nav container'>
            {/* <a href='#home' className='nav-logo'>Aditya.</a> */}
            <a href='#home' className='nav-logo'>
               <img className='logo' src={Logo}/>ditya.
            </a>

            <div className='nav-menu'>
               <ul className='nav-list'>
                 <li className='nav-item'>
                    <a href='#home' className='nav-link'>
                        <i class="ri-home-6-line nav-icon"></i>
                        <span className='nav-span'>Home</span>
                        </a>
                 </li>
                 <li className='nav-item'>
                    <a href='#about' className='nav-link'>
                    <i class="ri-user-3-line nav-icon"></i>
                    <span className='nav-span'>About</span> </a>
                 </li>
                 <li className='nav-item'>
                    <a href='#skills' className='nav-link'>
                    <i class="ri-newspaper-line nav-icon"></i> 
                    <span className='nav-span'>Skills</span></a>
                 </li>
                 <li className='nav-item'>
                    <a href='#projects' className='nav-link'>
                    <i class="ri-space-ship-line nav-icon"></i>
                    <span className='nav-span'>Projects</span> </a>
                 </li>
                 <li className='nav-item'>
                    <a href='#contact' className='nav-link'>
                    <i class="ri-message-3-line nav-icon"></i>
                    <span className='nav-span'>Contact</span></a>
                 </li>
               </ul>
            </div>
         </nav>
    </header>
  )
}

export default Header
