import React,{ useState, useEffect } from 'react'
import "./home.css"

const Social = () => {


  const [theme, setTheme] = useState("dark-theme");
  
  const changeTheme = () =>{
    if(theme === "dark-theme"){
      setTheme("light-theme");
    }else{
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme])
  

  return (
  
  
    <div className='home-social'>
         <span  className='social-link' >
            <i className="ri-moon-line social-icon"  id='theme-button' onClick={ () => changeTheme() }></i>
         </span>
         <a href='https://www.linkedin.com/in/aditya0806/' target="_blank" className='social-link' >
         <i className="ri-linkedin-box-line social-icon"></i>
         </a>
         <a href='https://www.instagram.com/_iam_aditya._/' target="_blank" className='social-link'>
         <i className="ri-instagram-line social-icon"></i>
         </a>
         <a href='https://github.com/Aaditya0806' target="_blank" className='social-link'>
         <i className="ri-gitlab-line social-icon"></i>
         </a>
         <a href='https://wa.me/+917247547310' target="_blank" className='social-link' >
         <i className="ri-whatsapp-line social-icon"></i>
         </a>
    </div>
  )
}

export default Social
